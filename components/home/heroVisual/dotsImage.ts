type ThreeModule = typeof import('three');

const IMAGE_SRC = '/img/home/mv.jpg';
const REPEL_RADIUS = 110;
// 粒子数の上限(細かさと負荷のバランス)
const MAX_POINTS = 200000;

const vertexShader = /* glsl */ `
  attribute vec3 aStart;
  attribute vec3 aColor;
  attribute float aSize;
  attribute float aRand;
  uniform float uProgress;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uForce;
  uniform float uRadius;
  uniform float uDpr;
  varying vec3 vColor;

  void main() {
    vColor = aColor;
    float t = clamp((uProgress - aRand * 0.6) / 0.4, 0.0, 1.0);
    float eased = 1.0 - pow(1.0 - t, 3.0);
    vec3 p = mix(aStart, position, eased);

    // 集まった後も粒子がわずかに揺れる
    p.xy += vec2(sin(uTime * 0.8 + aRand * 40.0), cos(uTime * 0.7 + aRand * 30.0)) * 0.8 * eased;

    // マウスから離れる方向に押し出す
    vec2 d = p.xy - uMouse;
    float falloff = smoothstep(uRadius, 0.0, length(d));
    p.xy += normalize(d + vec2(0.0001)) * falloff * uForce * uRadius * 0.45;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
    gl_PointSize = aSize * uDpr * mix(0.4, 1.0, eased);
  }
`;

const fragmentShader = /* glsl */ `
  varying vec3 vColor;

  void main() {
    float r = length(gl_PointCoord - vec2(0.5));
    float alpha = 1.0 - smoothstep(0.38, 0.5, r);
    if (alpha < 0.01) discard;
    gl_FragColor = vec4(vColor, alpha);
  }
`;

type Options = {
  // マウント時刻(performance.now())。CSS アニメーション(線が走る演出)の開始と揃える
  mountedAt: number;
  // 粒子が集まり始めるまでの待ち時間(ms)
  introDelayMs: number;
  introDurationMs: number;
  reducedMotion: boolean;
};

// CSS の background-position(例: "-120px -10px" / "50% 50%")を px に変換する
const resolveOffset = (token: string, free: number): number => {
  if (token.endsWith('%')) return (free * parseFloat(token)) / 100;
  return parseFloat(token) || 0;
};

/**
 * 写真を粒子(ドット)で描画する(明暗でドットの大きさを変えるハーフトーン風)。
 * container の background-size: cover / background-position と同じ見え方に揃える。
 * 画像の読み込みや WebGL の初期化に失敗した場合は null を返す(呼び出し側で通常の背景画像表示に戻す)。
 * 戻り値は後始末用の関数。
 */
export async function createDotsImage(
  THREE: ThreeModule,
  container: HTMLElement,
  canvas: HTMLCanvasElement,
  { mountedAt, introDelayMs, introDurationMs, reducedMotion }: Options,
): Promise<(() => void) | null> {
  const image = new Image();
  image.src = IMAGE_SRC;
  try {
    await image.decode();
  } catch {
    return null;
  }

  let renderer: InstanceType<ThreeModule['WebGLRenderer']>;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  } catch {
    return null;
  }

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(0, 1, 1, 0, -1, 1);
  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    transparent: true,
    depthTest: false,
    uniforms: {
      uProgress: { value: reducedMotion ? 1 : 0 },
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(-9999, -9999) },
      uForce: { value: 0 },
      uRadius: { value: REPEL_RADIUS },
      uDpr: { value: 1 },
    },
  });

  let points: InstanceType<ThreeModule['Points']> | null = null;
  let visible = true;
  let rafId = 0;
  let targetForce = 0;
  const mouse = new THREE.Vector2(-9999, -9999);

  const disposePoints = () => {
    if (!points) return;
    scene.remove(points);
    points.geometry.dispose();
    points = null;
  };

  const build = () => {
    disposePoints();

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    if (width === 0 || height === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(dpr);
    renderer.setSize(width, height, false);
    material.uniforms.uDpr.value = dpr;
    camera.right = width;
    camera.top = height;
    camera.updateProjectionMatrix();

    // background-size: cover と background-position を再現して、見える範囲を求める
    const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight);
    const drawW = image.naturalWidth * scale;
    const drawH = image.naturalHeight * scale;
    const [posX = '50%', posY = '50%'] = getComputedStyle(container).backgroundPosition.split(' ');
    const offsetX = resolveOffset(posX, width - drawW);
    const offsetY = resolveOffset(posY, height - drawH);

    // 1セル = 1ドット。縮小描画でセルごとの平均色を得る
    const cell = Math.max(1.6, Math.sqrt((width * height) / MAX_POINTS));
    const cols = Math.ceil(width / cell);
    const rows = Math.ceil(height / cell);
    const small = document.createElement('canvas');
    small.width = cols;
    small.height = rows;
    const ctx = small.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(
      image,
      (offsetX * cols) / width,
      (offsetY * rows) / height,
      (drawW * cols) / width,
      (drawH * rows) / height,
    );
    const { data } = ctx.getImageData(0, 0, cols, rows);

    // ほぼ白い写真なので、暗部(0.35以下)を黒として扱うレベル補正で、元の色味を残したままドットを見やすくする
    const BLACK_POINT = 0.35;
    const level = (v: number) => Math.min(Math.max((v - BLACK_POINT) / (1 - BLACK_POINT), 0), 1);
    const lums: number[] = [];
    for (let i = 0; i < cols * rows; i++) {
      lums.push((0.299 * data[i * 4] + 0.587 * data[i * 4 + 1] + 0.114 * data[i * 4 + 2]) / 255);
    }

    const count = cols * rows;
    const positions = new Float32Array(count * 3);
    const starts = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const rands = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const x = (i % cols) * cell + cell / 2;
      const y = Math.floor(i / cols) * cell + cell / 2;
      positions.set([x, height - y, 0], i * 3);
      starts.set([Math.random() * width, Math.random() * height, 0], i * 3);

      // 明るい毛並みは小さく、影や鼻のような暗い所ほど大きなドットにする
      const darkness = Math.min(Math.max((1 - lums[i]) / 0.5, 0), 1);
      sizes[i] = cell * (0.5 + 0.9 * Math.pow(darkness, 1.1));
      rands[i] = Math.random();
      // 元の色(鼻のピンクなど)を残しつつ、暗いところほど濃く見せる
      for (let c = 0; c < 3; c++) {
        colors[i * 3 + c] = Math.pow(level(data[i * 4 + c] / 255), 1.3);
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aStart', new THREE.BufferAttribute(starts, 3));
    geometry.setAttribute('aColor', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('aRand', new THREE.BufferAttribute(rands, 1));
    points = new THREE.Points(geometry, material);
    points.frustumCulled = false;
    scene.add(points);
  };

  const render = (now: number) => {
    if (reducedMotion) {
      renderer.render(scene, camera);
      return;
    }
    const u = material.uniforms;
    u.uProgress.value = Math.min(Math.max((now - mountedAt - introDelayMs) / introDurationMs, 0), 1);
    u.uTime.value = now / 1000;
    u.uForce.value += (targetForce - u.uForce.value) * 0.08;
    (u.uMouse.value as InstanceType<ThreeModule['Vector2']>).lerp(mouse, 0.25);
    renderer.render(scene, camera);
  };

  const loop = (now: number) => {
    if (visible) render(now);
    rafId = requestAnimationFrame(loop);
  };

  const onPointerMove = (e: PointerEvent) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const inside = x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;
    targetForce = inside ? 1 : 0;
    if (inside) mouse.set(x, rect.height - y);
  };
  const onPointerLeave = () => {
    targetForce = 0;
  };

  build();
  const resizeObserver = new ResizeObserver(() => {
    build();
    if (reducedMotion) render(performance.now());
  });
  resizeObserver.observe(canvas);

  const intersectionObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
  });
  intersectionObserver.observe(canvas);

  if (reducedMotion) {
    render(performance.now());
  } else {
    window.addEventListener('pointermove', onPointerMove);
    document.documentElement.addEventListener('pointerleave', onPointerLeave);
    rafId = requestAnimationFrame(loop);
  }

  return () => {
    cancelAnimationFrame(rafId);
    window.removeEventListener('pointermove', onPointerMove);
    document.documentElement.removeEventListener('pointerleave', onPointerLeave);
    resizeObserver.disconnect();
    intersectionObserver.disconnect();
    disposePoints();
    material.dispose();
    renderer.dispose();
  };
}
