'use client';

import { useEffect, useRef, useSyncExternalStore } from 'react';
import styles from './CustomCursor.module.css';

// カーソルが乗ったときにリングを大きくする要素
const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label';

const QUERY =
  '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)';

const subscribe = (onChange: () => void) => {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener('change', onChange);
  return () => mq.removeEventListener('change', onChange);
};
const getSnapshot = () => window.matchMedia(QUERY).matches;

/**
 * 小さなドットと、遅れて追従するリングのカスタムカーソル。
 * マウスなど細かいポインターがあり、動きを減らす設定でない環境のみ表示する。
 * 標準のカーソルは消さない(操作性を損なわないため)。
 */
const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const enabled = useSyncExternalStore(subscribe, getSnapshot, () => false);

  useEffect(() => {
    if (!enabled) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const target = { x: -100, y: -100 };
    const ringPos = { x: -100, y: -100 };
    let rafId = 0;

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      const interactive = (e.target as Element | null)?.closest(INTERACTIVE);
      ring.dataset.active = interactive ? 'true' : 'false';
      dot.dataset.visible = 'true';
      ring.dataset.visible = 'true';
    };
    const onDown = () => {
      ring.dataset.pressed = 'true';
    };
    const onUp = () => {
      ring.dataset.pressed = 'false';
    };
    const onLeave = () => {
      dot.dataset.visible = 'false';
      ring.dataset.visible = 'false';
    };

    const loop = () => {
      ringPos.x += (target.x - ringPos.x) * 0.16;
      ringPos.y += (target.y - ringPos.y) * 0.16;
      ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`;
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    document.documentElement.addEventListener('pointerleave', onLeave);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      document.documentElement.removeEventListener('pointerleave', onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={ringRef} className={styles.ring} aria-hidden="true">
        <span className={styles.ring_inner} />
      </div>
      <div ref={dotRef} className={styles.dot} aria-hidden="true">
        <span className={styles.dot_inner} />
      </div>
    </>
  );
};

export default CustomCursor;
