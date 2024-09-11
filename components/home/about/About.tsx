import Image from 'next/image';
import styles from './About.module.css';
import HomeLink from '@/components/common/parts/homeLink/HomeLink';
import SectionTitle from '@/components/common/parts/Titles/SectionTitle';

const imagePath = '/img/home/aboutIcon.png';

const About = () => {
  return (
    <section className={styles.section}>
      <SectionTitle title="About Me" subTitle="私について" />
      <div className={styles.content}>
        <div className={styles.text_wrap}>
          <p className={styles.text}>
            エンジニアとして常に進化を続ける技術に触れ、
            <br className={styles.br} />
            学び続けることが私の原動力です。
            <br />
            ディレクションからデザインまで幅広く対応できますが、
            <br className={styles.br} />
            根底にあるのはユーザー体験の追求です。
            <br />
            新しいフレームワークや開発手法を取り入れ、
            <br className={styles.br} />
            パフォーマンスの高いサイト、アプリケーション開発を
            <br className={styles.br} />
            実現するために考え続けます。
          </p>
        </div>
        <div className={styles.img_link}>
          <div className={styles.img_wrap}>
            <Image
              src={imagePath}
              alt="プロフィールアイコン"
              width={250}
              height={250}
            />
          </div>
          <div className={styles.link_wrap}>
            <HomeLink linkText="My profile" href="/about" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
