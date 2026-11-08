'use client';

import { useEffect } from 'react';

// ほんの少しでもスクロールされたら「スクロールした」とみなす距離(px)
const SCROLLED_THRESHOLD = 4;

/**
 * data-reveal / data-scatter を持つ要素が画面に入ったら data-inview="true" を付ける。
 * 見た目の制御は globals.css などの CSS で行う。
 * ページ遷移などで DOM が差し替わっても、MutationObserver で新しい要素を拾う。
 *
 * data-wait-scroll を持つ要素の中は、最初のスクロールまで待ってから表示する。
 * 縦長の画面では、ページを開いた時点で画面に入ってしまい、触る前に演出が終わるため。
 * ただしスクロールできない(ページが短い)場合は、待たずに表示する。
 */
const RevealObserver = () => {
  useEffect(() => {
    let scrolled = window.scrollY > SCROLLED_THRESHOLD;
    const pending = new Set<HTMLElement>();

    const canScroll = () =>
      document.documentElement.scrollHeight - window.innerHeight > 24;

    const show = (el: HTMLElement) => {
      el.dataset.inview = 'true';
      io.unobserve(el);
    };

    const releasePending = () => {
      pending.forEach(show);
      pending.clear();
    };

    const io: IntersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          if (!scrolled && el.closest('[data-wait-scroll]') && canScroll()) {
            // 最初のスクロールまで保留する
            pending.add(el);
            io.unobserve(el);
            return;
          }
          show(el);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );

    const onScroll = () => {
      if (window.scrollY <= SCROLLED_THRESHOLD) return;
      scrolled = true;
      releasePending();
      window.removeEventListener('scroll', onScroll);
    };
    // 画面サイズが変わってスクロール不要になった場合も、保留を解除する
    const onResize = () => {
      if (!canScroll()) releasePending();
    };
    if (!scrolled) window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    const scan = () => {
      document
        .querySelectorAll<HTMLElement>(
          '[data-reveal]:not([data-inview]), [data-scatter]:not([data-inview])',
        )
        .forEach((el) => {
          if (!pending.has(el)) io.observe(el);
        });
    };
    scan();

    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return null;
};

export default RevealObserver;
