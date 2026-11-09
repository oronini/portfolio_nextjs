import Image from 'next/image';
import styles from './About.module.css';
import HomeLink from '@/components/common/parts/homeLink/HomeLink';
import ScatterText from '@/components/common/parts/scatterText/ScatterText';
import SectionTitle from '@/components/common/parts/Titles/SectionTitle';

const imagePath = '/img/about/mascot.png';

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
                ['要件の整理、設計、実装、運用に', 'soft'],
                ['取り組んできたエンジニアです。', 'hard'],
                ['Web アプリから Windows デスクトップアプリ関連まで、', 'soft'],
                ['扱う領域を広げてきました。', 'para'],
                ['AI の活用にも力を入れています。', 'hard'],
                ['AI が開発しやすい設計や、', 'soft'],
                ['ルール・スキル・ハーネスを整え、', 'soft'],
                ['自動化できる作業は仕組みにしています。', 'para'],
                ['技術的な正しさだけでなく、', 'soft'],
                ['業務で運用できるか、期限内に実現できるかを踏まえて', 'soft'],
                ['判断することを大切にしています。', 'hard'],
                ['学び続け、考え続けることが、私の原動力です。'],
              ]}
            />
          </p>
        </div>
        <div className={styles.img_link}>
          <div className={styles.img_wrap}>
            <Image
              src={imagePath}
              alt="プロフィール画像"
              width={500}
              height={625}
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
