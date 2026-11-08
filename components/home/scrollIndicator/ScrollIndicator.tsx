import styles from './ScrollIndicator.module.css';

// ヒーローの下で、スクロールを促す縦線がゆっくり流れる
const ScrollIndicator = () => {
  return (
    <div className={styles.scroll} aria-hidden="true">
      <span className={styles.label}>Scroll</span>
      <svg className={styles.line} viewBox="0 0 2 60">
        <line x1="1" y1="0" x2="1" y2="60" />
      </svg>
    </div>
  );
};

export default ScrollIndicator;
