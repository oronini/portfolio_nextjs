import Image from 'next/image';
import styles from './ServiceItem.module.css';

const ServiceItem = ({
  title,
  subTitle,
  imgPath,
  imgAlt,
  text,
}: ServiceSectionProps) => {
  return (
    <section className={styles.content}>
      <h4 className={styles.title}>
        {title}
        <span className={styles.sub_title}>{subTitle}</span>
      </h4>
      <div className={styles.img_wrap}>
        <Image src={imgPath} alt={imgAlt} width={100} height={100} />
      </div>
      <p className={styles.text}>{text}</p>
    </section>
  );
};

export default ServiceItem;
