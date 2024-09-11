import Link from 'next/link';
import styles from './HomeLink.module.css';
import Image from 'next/image';
type Props = {
  linkText: string;
  href: string;
  blogSite?: boolean;
  more?: boolean;
};

const iconPath = 'img/icons/newTabOp.svg';

const HomeLink = ({ linkText, href, blogSite }: Props) => {
  return (
    <Link
      href={href}
      className={styles.link}
      {...(blogSite ? { rel: 'noopener noreferrer', target: '_blank' } : {})}
    >
      <p>{linkText}</p>
      {blogSite ? (
        <div className={styles.icon_wrap}>
          <Image
            src={iconPath}
            alt="別タブで開くアイコン"
            width={15}
            height={15}
          />
        </div>
      ) : (
        ''
      )}
    </Link>
  );
};

export default HomeLink;
