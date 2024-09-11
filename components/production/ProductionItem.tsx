import Link from 'next/link';
import styles from './ProductionItem.module.css';
import Image from 'next/image';

const iconPath = 'img/icons/newTabOp.svg';
const imagePath = '/img/production/';

const ProductionItem = ({
  linkHref,
  imgPath,
  alt,
  title,
  skills,
  topText,
  pageText,
  home,
}: ProductionProps) => {
  return (
    <li className={styles.item}>
      <Link href={linkHref} rel="noopener noreferrer" target="_blank">
        <div className={styles.img_wrap}>
          <Image
            src={`${imagePath}${imgPath}`}
            alt={alt}
            width={home ? 1008 : 1000}
            height={home ? 800 : 650}
          />
        </div>
      </Link>
      <Link
        href={linkHref}
        className={home ? styles.home_title_link : styles.title_link}
        rel="noopener noreferrer"
        target="_blank"
      >
        {home ? (
          <h4 className={styles.title}>{title}</h4>
        ) : (
          <h3 className={styles.title}>{title}</h3>
        )}
        <div className={styles.icon_wrap}>
          <Image
            src={iconPath}
            alt="別タブで開くアイコン"
            width={15}
            height={15}
          />
        </div>
      </Link>
      {home ? '' : <p className={styles.skills}>{skills}</p>}
      <p className={home ? styles.home_text : styles.text}>
        {home ? topText : pageText}
      </p>
    </li>
  );
};

export default ProductionItem;
