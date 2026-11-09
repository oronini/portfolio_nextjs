import PagesTitle from '@/components/common/parts/Titles/PagesTitle';
import { Metadata } from 'next';
import styles from './About.module.css';
import Profile from '@/components/about/profile/Profile';
import SocialMedia from '@/components/about/socialMedia/SocialMedia';
import Experience from '@/components/about/experience/Experience';
import Information from '@/components/about/information/Information';

export const metadata: Metadata = {
  title: 'Nekodesk Portfolio | About Me',
  description:
    'Nekodesk のプロフィールです。これまでの経歴、Next.js・TypeScript・AWS などの開発スキルと環境、趣味、SNS をまとめています。',
};

const page = () => {
  return (
    <>
      <div className={styles.wrap}>
        <main>
          <PagesTitle title="About Me" subTitle="私について" />
          <Profile />
          <Experience />
          <Information />
          <SocialMedia />
        </main>
      </div>
    </>
  );
};

export default page;
