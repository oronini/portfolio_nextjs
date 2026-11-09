import PagesTitle from '@/components/common/parts/Titles/PagesTitle';
import { Metadata } from 'next';
import styles from './Contact.module.css';
import ScatterText from '@/components/common/parts/scatterText/ScatterText';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Nekodesk Portfolio | Contact',
  description:
    'Nekodesk へのお問い合わせフォームです。ご依頼、ご相談、その他のご連絡を受け付けています。お名前・メールアドレス・お問い合わせ内容をご入力のうえ、お送りください。',
};

const page = () => {
  return (
    <>
      <div className={styles.wrap}>
        <main>
          <PagesTitle title="Contact" subTitle="お問い合わせ" />
          <div className={styles.text_wrap}>
            <p>
              <ScatterText text="ご依頼、ご相談、その他のご連絡など、お気軽にお問い合わせください。" />
            </p>
            <p>
              <ScatterText text="お問い合わせをお待ちしております。" />
            </p>
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
