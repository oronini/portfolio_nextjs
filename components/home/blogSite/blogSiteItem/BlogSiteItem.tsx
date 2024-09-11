import Link from 'next/link';
import styles from './BlogSiteItem.module.css';
import HomeLink from '@/components/common/parts/homeLink/HomeLink';
import Image from 'next/image';

const iconPath = 'img/icons/newTabOp.svg';

const BlogSiteItem = ({
  imgPath,
  alt,
  date,
  linkHref,
  text,
}: BlogSiteSectionProps) => {
  return (
    <div className={styles.item_wrap}>
      <div className={styles.img_wrap}>
        <Link href={linkHref}>
          <Image src={imgPath} alt={alt} width={1000} height={527} />
        </Link>
      </div>
      <p className={styles.date}>{date}</p>
      <p className={styles.text}>{text}</p>
      <div className={styles.link_wrap}>
        <Link href={linkHref} className={styles.link}>
          <p>more</p>
          <div className={styles.icon_wrap}>
            <Image
              src={iconPath}
              alt="別タブで開くアイコン"
              width={13}
              height={15}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogSiteItem;
