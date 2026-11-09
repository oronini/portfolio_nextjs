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
          <div className={`${styles.img_wrap} ${styles.roll}`}>
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
                    '飲食業と建設業を経て、通信業のカスタマーサポートへ。SV(スーパーバイザー)として、チームのマネジメントや人材育成、KPI 管理を担当していました。',
                    'para',
                  ],
                  [
                    'プログラミングに興味を持ったきっかけは、趣味のオンラインゲームを快適に楽しむために組んだ自作 PC です。そこから独学を始めました。',
                    'hard',
                  ],
                  [
                    'コロナ禍で、非接触型サービスや AI、Web アプリケーションの重要性を感じたことが、IT 業界へ転職する決め手です。',
                    'para',
                  ],
                  [
                    'Web サイトの制作・進行管理から、Web アプリケーションの開発へと軸足を移しています。',
                    'hard',
                  ],
                  [
                    'フロントエンドは Next.js・TypeScript、バックエンドは AWS を使い、環境構築や設計まで担当します。',
                    'hard',
                  ],
                  [
                    'C# による Windows デスクトップアプリの補助ツール開発や、ビルド環境の構築の経験もあります。',
                    'para',
                  ],
                  ['AI の活用は、私の強みの一つです。', 'hard'],
                  [
                    'AI が開発しやすいよう設計を整え、ルールやスキルを用意して、AI の意図しない動作を極力減らしています。',
                    'hard',
                  ],
                  [
                    'Claude Code や Cursor で実装・レビュー・定型作業を効率化し、Claude API・ChatGPT API を使ったアプリや LINE Bot の開発、ブログ運営の自動化にも取り組んでいます。',
                    'hard',
                  ],
                  ['このサイトの制作にも、AI を活用しています。', 'para'],
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
