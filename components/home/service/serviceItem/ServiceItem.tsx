import Image from 'next/image';
import styles from './ServiceItem.module.css';
import ScatterText from '@/components/common/parts/scatterText/ScatterText';

const ServiceItem = ({
  title,
  subTitle,
  imgPath,
  imgAlt,
  text,
  featured = false,
}: ServiceSectionProps) => {
  return (
    <section
      className={`${styles.content} ${featured ? styles.featured : ''}`}
      data-reveal
    >
      <h4 className={styles.title}>
        <ScatterText text={title} />
        <span className={styles.sub_title}>
          <ScatterText text={subTitle} />
        </span>
      </h4>
      <div className={styles.img_wrap}>
        <Image src={imgPath} alt={imgAlt} width={100} height={100} />
      </div>
      <p className={styles.text}>
        <ScatterText text={text} />
      </p>
    </section>
  );
};

export default ServiceItem;
