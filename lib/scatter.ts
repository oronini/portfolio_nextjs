import type { CSSProperties } from 'react';

// 位置はサーバー側で決めるため、毎回同じになる擬似乱数を使う
const random = (n: number) => {
  const x = Math.sin(n * 12.9898) * 43758.5453;
  return x - Math.floor(x);
};

// タグなど、1つのまとまりをばらばらの位置から集めるための CSS 変数(--x / --y / --r / --d)
export const scatterStyle = (i: number): CSSProperties => {
  const angle = random(i * 3 + 1) * Math.PI * 2;
  const distance = 140 + random(i * 3 + 2) * 300;
  return {
    '--x': `${Math.round(Math.cos(angle) * distance)}px`,
    '--y': `${Math.round(Math.sin(angle) * distance)}px`,
    '--r': `${Math.round((random(i * 3 + 3) - 0.5) * 120)}deg`,
    '--d': `${Math.round(random(i * 7 + 5) * 500)}ms`,
  } as CSSProperties;
};
