import Image from 'next/image';
import styles from './Profile.module.css';
import ScatterText from '@/components/common/parts/scatterText/ScatterText';
import AboutHeading from '@/components/common/parts/aboutHeading/AboutHeading';

const Profile = () => {
  return (
    <section data-reveal>
      <div className={styles.wrap}>
        <AboutHeading text="Hey! I&#39;m Web Developer" />
        <div className={styles.content}>
          <div className={styles.img_wrap}>
            <Image
              src={'/img/about/mascot.png'}
              alt="プロフィール画像"
              width={500}
              height={625}
            />
          </div>
          <p className={styles.text}>
            <span>
              <ScatterText
                lines={[
                  [
                    '飲食業や建設業を経て、通信業のカスタマーサポートで SV(スーパーバイザー)として、チームのマネジメントや人材育成、KPI 管理に取り組みました。',
                    'para',
                  ],
                  [
                    '趣味のオンラインゲームを快適に楽しむために自作 PC を組んだことから、プログラミングや PC の仕組みに興味を持ち、独学を始めました。',
                    'hard',
                  ],
                  [
                    'その後、コロナ禍をきっかけに、非接触型サービスや AI、Web アプリケーションの重要性を感じ、IT 業界へ転職しました。',
                    'para',
                  ],
                  [
                    'Web サイトの制作や進行管理を経て、Web アプリケーションの開発に携わるようになりました。',
                    'hard',
                  ],
                  [
                    'Next.js・TypeScript を中心としたフロントエンドに加え、AWS を使ったバックエンド、環境構築、設計も担当しています。',
                    'hard',
                  ],
                  [
                    'C# による Windows デスクトップアプリの補助ツール開発や、ビルド環境の構築にも取り組みました。',
                    'para',
                  ],
                  ['AI の活用にも力を入れています。', 'hard'],
                  [
                    'AI が開発しやすいように設計を整え、ルールやスキルを用意して、AI が意図しない動作をする場面を極力減らしています。',
                    'hard',
                  ],
                  [
                    '実装やレビュー、定型作業の自動化にも活用し、Claude Code や Cursor に加え、Claude API・ChatGPT API を使ったアプリや LINE Bot の開発、ブログ運営の自動化にも取り組んでいます。',
                    'hard',
                  ],
                  ['このサイトの制作にも AI を活用しています。', 'para'],
                  [
                    '顧客との折衝や要件の整理、コードレビュー、メンバーの育成にも関わり、チームのリーダー的な役割を担ってきました。',
                  ],
                ]}
              />
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
