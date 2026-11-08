'use client';

import { useEffect } from 'react';

/**
 * data-reveal を持つ要素が画面に入ったら data-inview="true" を付ける。
 * 見た目の制御は globals.css の [data-reveal] で行う。
 * ページ遷移などで DOM が差し替わっても、MutationObserver で新しい要素を拾う。
 */
const RevealObserver = () => {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.inview = 'true';
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );

    const scan = () => {
      document
        .querySelectorAll<HTMLElement>('[data-reveal]:not([data-inview])')
        .forEach((el) => io.observe(el));
    };
    scan();

    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
};

export default RevealObserver;
