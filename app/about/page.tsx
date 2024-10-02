import PagesTitle from '@/components/common/parts/Titles/PagesTitle';
import { Metadata } from 'next';
import styles from './About.module.css';
import Profile from '@/components/about/profile/Profile';
import SocialMedia from '@/components/about/socialMedia/SocialMedia';
import Information from '@/components/about/information/Information';

export const metadata: Metadata = {
  title: 'MK Portfolio | About Me',
  description: 'MK Portfolio | About Me',
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
