import ServiceContactSectionTitle from '@/components/common/parts/serviceContactSectionTitle/ServiceContactSectionTitle';
import styles from './Contact.module.css';
import Link from 'next/link';

const Contact = () => {
  return (
    <section className={styles.section}>
      <ServiceContactSectionTitle title="Contact" />
      <div className={styles.wrap}>
        <Link href={'/contact'} className={styles.link_btn}>
          お問合せはこちらから
        </Link>
        <div className={styles.text_wrap}>
          <p className={styles.text}>
            制作の依頼・ご相談など何でもお気軽にお問い合わせくださいませ。
          </p>
          <p className={styles.text}>お問合わせをお待ちしております。</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
