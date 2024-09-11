import AboutHeading from '@/components/common/parts/aboutHeading/AboutHeading';
import styles from './SocialMedia.module.css';
import './SocialMedia.css';
import Image from 'next/image';
import Link from 'next/link';
import { iconsArray } from '@/lib/socialMedia';

const imagePath = 'img/about/socialMediaIcons/';

const SocialMedia = () => {
  return (
    <section>
      <div className={styles.wrap}>
        <AboutHeading text="Social Media" />
        <div className={styles.icons_wrap}>
          {iconsArray.map((item) => (
            <Link
              href={item.href}
              className={`${styles.icon_circle} ${item.className}`}
              key={item.src}
            >
              <div className={styles.img_wrap}>
                <Image
                  src={`${imagePath}${item.src}`}
                  alt={`${item.alt}アイコン`}
                  width={40}
                  height={40}
                  className={styles.img}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
