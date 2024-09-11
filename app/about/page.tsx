import PagesTitle from '@/components/common/parts/Titles/PagesTitle';
import { Metadata } from 'next';
import styles from './About.module.css';
import Profile from '@/components/about/profile/Profile';
import Information from '@/components/about/infomation/Information';
import SocialMedia from '@/components/about/socialMedia/SocialMedia';

export const metadata: Metadata = {
  title: 'KM About Me',
  description: 'KM About Me',
};

const page = () => {
  return (
    <>
      <div className={styles.line}></div>
      <div className={styles.wrap}>
        <main>
          <PagesTitle title="About Me" subTitle="私について" />
          <Profile />
          <Information />
          <SocialMedia />
        </main>
      </div>
    </>
  );
};

export default page;
