import ServiceContactSectionTitle from '@/components/common/parts/serviceContactSectionTitle/ServiceContactSectionTitle';
import styles from './Contact.module.css';
import Link from 'next/link';
import ScatterText from '@/components/common/parts/scatterText/ScatterText';

const Contact = () => {
  return (
    <section className={styles.section} data-reveal>
      <ServiceContactSectionTitle title="Contact" />
      <div className={styles.wrap}>
        <Link href={'/contact'} className={styles.link_btn}>
          <ScatterText lines={[['お問い合わせはこちらから']]} />
        </Link>
        <div className={styles.text_wrap}>
          <p className={styles.text}>
            <ScatterText
              lines={[
                [
                  'ご依頼、ご相談、その他のご連絡など、お気軽にお問い合わせください。',
                ],
              ]}
            />
          </p>
          <p className={styles.text}>
            <ScatterText lines={[['お問い合わせをお待ちしております。']]} />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
