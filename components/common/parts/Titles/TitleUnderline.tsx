import styles from './Titles.module.css';

// 見出しの下に、スクロールで画面に入ると描かれる手描き風の線
const TitleUnderline = () => (
  <svg
    className={styles.underline}
    viewBox="0 0 240 14"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path d="M2 8 C 40 2, 80 14, 120 8 S 200 2, 238 8" pathLength={1} />
  </svg>
);

export default TitleUnderline;
