import Image from 'next/image';
import styles from './Profile.module.css';
import AboutHeading from '@/components/common/parts/aboutHeading/AboutHeading';

const Profile = () => {
  return (
    <section>
      <div className={styles.wrap}>
        <AboutHeading text="Hey! I&#39;m Web Developer" />
        <div className={styles.content}>
          <div className={styles.img_wrap}>
            <Image
              src={'/img/about/profile.png'}
              alt="プロフィール画像"
              width={500}
              height={500}
            />
          </div>
          <p className={styles.text}>
            <span>
              飲食業や建設業など、幅広い業種での経験を積んだ後、大手通信企業のカスタマーサポートでSVとして約5年間勤務。
              <br />
              その際、趣味のオンラインゲームを快適に楽しむために自作PCを組み立てた経験から、プログラミングやPCの仕組みに興味を持ち、独学をスタート。
              <br />
              コロナをきっかけに、非接触型サービスやAI、Webアプリケーションの重要性を感じ、IT業界への強い関心を抱き、
              転職を決意し、フロントエンドエンジニアとして入社。
              <br />
              某FAQシステムの初期構築において、ワイヤーフレームの作成、デザイン、コーディング、システム設定、コンテンツ作成、ディレクション、進行管理など、幅広い業務を担当。
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
