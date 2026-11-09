'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import styles from '../Home.module.css';
import { createDotsImage } from './dotsImage';

// 粒子が集まる時間(0.5s〜3.7s)。タイトルの文字は 3.3s から集まり始める
const INTRO_DELAY_MS = 500;
const INTRO_DURATION_MS = 3200;

// ready: ドット表示 / failed: 読み込みや WebGL に失敗したので通常の背景画像に戻す
type Status = 'pending' | 'ready' | 'failed';

const HeroVisual = ({ children }: { children: ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [status, setStatus] = useState<Status>('pending');

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const mountedAt = performance.now();
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    let disposed = false;
    let cleanup: (() => void) | null = null;

    // three は重いので、マウント後に読み込む
    (async () => {
      try {
        const THREE = await import('three');
        if (disposed) return;
        cleanup = await createDotsImage(THREE, container, canvas, {
          mountedAt,
          introDelayMs: INTRO_DELAY_MS,
          introDurationMs: INTRO_DURATION_MS,
          reducedMotion,
        });
        if (disposed) {
          cleanup?.();
          return;
        }
        setStatus(cleanup ? 'ready' : 'failed');
      } catch {
        if (!disposed) setStatus('failed');
      }
    })();

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`${styles.main_visual} ${
        status === 'failed' ? styles.main_visual_image : ''
      } animation_mv`}
    >
      <canvas ref={canvasRef} className={styles.dots} aria-hidden="true" />
      {children}
    </div>
  );
};

export default HeroVisual;
