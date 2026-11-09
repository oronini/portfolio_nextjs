'use client';

import { useEffect, useRef } from 'react';
import styles from './ScrollLine.module.css';

// 画面の上から、この割合の位置まで線を伸ばす
const REACH = 0.5;
const LINE_TOP = 18;

/**
 * 子要素の左側に、スクロールに合わせて上から下へ伸びる縦線を1本引く。
 * セクションごとに線を持つと、伸びるタイミングがばらばらになるため、全体で1本にする。
 */
const ScrollLine = ({ children }: { children: React.ReactNode }) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const line = lineRef.current;
    if (!wrap || !line) return;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = wrap.getBoundingClientRect();
      const max = Math.max(rect.height - LINE_TOP, 0);
      const reached = window.innerHeight * REACH - rect.top - LINE_TOP;
      const height = reduceMotion ? max : Math.min(Math.max(reached, 0), max);
      line.style.height = `${height}px`;
    };
    const request = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request);
    // 文章の長さが変わっても、線の長さを合わせる
    const ro = new ResizeObserver(request);
    ro.observe(wrap);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', request);
      window.removeEventListener('resize', request);
      ro.disconnect();
    };
  }, []);

  return (
    <div ref={wrapRef} className={styles.wrap}>
      <span ref={lineRef} className={styles.line} aria-hidden="true" />
      {children}
    </div>
  );
};

export default ScrollLine;
