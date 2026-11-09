'use client';

import { useEffect, useRef } from 'react';
import styles from './ScrollLine.module.css';

// 画面の上から、この割合の位置まで線を伸ばす
const REACH = 0.5;
const LINE_TOP = 18;
// 最後の見出し(data-line-end)の手前で、いったん線を止める余白(px)
const GAP_BEFORE_END = 40;
// 最後の見出しが、画面の上からこの割合より上に入ったら、黒丸までゆっくりつなぐ
const CONNECT_AT = 0.85;

// 表示演出の移動(transform)に影響されない、親からの位置
const offsetTopWithin = (el: HTMLElement, ancestor: HTMLElement) => {
  let top = 0;
  let node: HTMLElement | null = el;
  while (node && node !== ancestor) {
    top += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return top;
};

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
      const end = wrap.querySelector<HTMLElement>('[data-line-end]');
      const endTop = end ? offsetTopWithin(end, wrap) : null;
      // 最後の黒丸の中心までの長さ。見出しが無ければ全体の長さ
      const full = Math.max(
        (end && endTop !== null ? endTop + end.offsetHeight / 2 : rect.height) -
          LINE_TOP,
        0
      );
      const stop =
        endTop !== null
          ? Math.max(endTop - GAP_BEFORE_END - LINE_TOP, 0)
          : full;
      const connecting = end
        ? end.getBoundingClientRect().top < window.innerHeight * CONNECT_AT
        : false;
      const reached = window.innerHeight * REACH - rect.top - LINE_TOP;
      const height =
        reduceMotion || connecting
          ? full
          : Math.min(Math.max(reached, 0), stop);
      line.dataset.connecting = String(connecting);
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
