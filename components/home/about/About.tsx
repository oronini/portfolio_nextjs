import Image from 'next/image';
import styles from './About.module.css';
import HomeLink from '@/components/common/parts/homeLink/HomeLink';
import ScatterText from '@/components/common/parts/scatterText/ScatterText';
import SectionTitle from '@/components/common/parts/Titles/SectionTitle';

const imagePath = '/img/home/aboutIcon.png';

const About = () => {
  return (
    <section className={styles.section} data-reveal>
      <SectionTitle title="About Me" subTitle="私について" />
      <div className={styles.content}>
        <div className={styles.text_wrap}>
          <p className={styles.text}>
            <ScatterText
              softBreakClassName={styles.br}
              lines={[
                ['エンジニアとして常に進化を続ける技術に触れ、', 'soft'],
                ['学び続けることが私の原動力です。', 'hard'],
                ['ディレクションからデザインまで幅広く対応できますが、', 'soft'],
                ['根底にあるのはユーザー体験の追求です。', 'hard'],
                ['新しいフレームワークや開発手法を取り入れ、', 'soft'],
                ['パフォーマンスの高いサイト、アプリケーション開発を', 'soft'],
                ['実現するために考え続けます。'],
              ]}
            />
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
