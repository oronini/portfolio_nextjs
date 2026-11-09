import Image from 'next/image';
import type { CSSProperties } from 'react';
import { findSkillIcon } from '@/lib/skillIcons';
import styles from './Information.module.css';

type Props = {
  skill: string;
};

const SkillIcon = ({ skill }: Props) => {
  const icon = findSkillIcon(skill);
  if (!icon) return null;

  // 画像のロゴ。SVG はそのまま配信できるため最適化は不要
  if ('src' in icon) {
    return (
      <Image
        className={styles.skill_icon_image}
        src={icon.src}
        alt=""
        width={15}
        height={15}
        unoptimized
      />
    );
  }

  // 通常時はブランドカラー。ホバーでタグが暗い背景に反転するため、その間は文字色(白)にして黒系のアイコンが沈まないようにする
  return (
    <svg
      className={styles.skill_icon}
      viewBox="0 0 24 24"
      style={{ '--icon-color': `#${icon.hex}` } as CSSProperties}
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
};

export default SkillIcon;
