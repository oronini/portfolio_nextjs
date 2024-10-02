import PagesTitle from '@/components/common/parts/Titles/PagesTitle';
import { Metadata } from 'next';
import styles from './Contact.module.css';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'MK Portfolio | Contact',
  description: 'MK Portfolio | Contact',
};

const page = () => {
  return (
    <>
      <div className={styles.line}></div>
      <div className={styles.wrap}>
        <main>
          <PagesTitle title="Contact" subTitle="お問合せ" />
          <div className={styles.text_wrap}>
            <p>
              制作の依頼・ご相談など何でもお気軽にお問い合わせくださいませ。
            </p>
            <p>お問合わせをお待ちしております。</p>
            <p className={styles.annotation}>
              （&nbsp;<span>＊</span>マークは必須項目です。&nbsp;）
            </p>
          </div>
          <ContactForm />
        </main>
      </div>
    </>
  );
};

export default page;
