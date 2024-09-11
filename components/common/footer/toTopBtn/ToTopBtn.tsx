'use client';
import Image from 'next/image';
import styles from './ToTopBtn.module.css';

const url = 'img/icons/toTop_icon.svg';

const toTopAction = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const ToTopBtn = () => {
  return (
    <button className={styles.to_top_btn} onClick={toTopAction}>
      <Image src={url} alt="トップへ戻るアイコン" width={50} height={50} />
    </button>
  );
};

export default ToTopBtn;
