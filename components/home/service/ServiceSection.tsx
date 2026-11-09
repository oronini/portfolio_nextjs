import ServiceContactSectionTitle from '../../common/parts/serviceContactSectionTitle/ServiceContactSectionTitle';
import styles from './ServiceSection.module.css';
import ServiceItem from './serviceItem/ServiceItem';

const imagePath = 'img/home/serviceIcon/';
const aiItem = {
  id: 4,
  title: 'AI',
  subTitle: 'AI 活用',
  imgPath: 'ai.svg',
  imgAlt: 'AI 活用画像',
  text: 'AI が開発しやすいように設計を整え、ルール・スキル・ハーネスを用意して、実装やレビュー、定型作業を自動化します。Claude Code・Cursor の活用に加え、Claude API・ChatGPT API を使ったアプリや LINE Bot の開発、ブログ運営の自動化にも取り組んでいます。AI に任せる範囲と人が判断する範囲を見極め、品質を保つことを大切にしています。',
};
const serviceItemArray = [
  {
    id: 1,
    title: 'Direction',
    subTitle: 'ディレクション',
    imgPath: 'direction.svg',
    imgAlt: 'ディレクション画像',
    text: '要件のヒアリングから、実現可否と工数を踏まえた提案、スケジュールと進行の管理まで担当します。お客様と開発メンバーの認識をそろえ、手戻りの少ない進行を心がけています。',
  },
  {
    id: 2,
    title: 'Development',
    subTitle: '開発',
    imgPath: 'development.svg',
    imgAlt: '開発画像',
    text: 'Web アプリは Next.js・TypeScript を中心に、AWS を使ったバックエンドや環境構築まで一貫して担当します。C# による Windows デスクトップアプリの補助ツール開発や、ビルド環境の構築も経験しています。保守しやすく、拡張しやすい構成を大切にしています。',
  },
  {
    id: 3,
    title: 'Design',
    subTitle: 'デザイン',
    imgPath: 'design.svg',
    imgAlt: 'デザイン画像',
    text: '余白を活かした、シンプルで読みやすい UI のデザインを得意としています。情報の優先度を整理し、ユーザーが迷わず目的を達成できる画面を心がけています。モックの段階から、実装やデータの構造を見据えた画面設計を行います。',
  },
];

const ServiceSection = () => {
  return (
    <section className={styles.section}>
      <ServiceContactSectionTitle title="Service" />
      {/* 強みとして、3つの項目より先に横長で見せる */}
      <div className={styles.ai_wrap}>
        <ServiceItem
          title={aiItem.title}
          subTitle={aiItem.subTitle}
          imgPath={`${imagePath}${aiItem.imgPath}`}
          imgAlt={aiItem.imgAlt}
          text={aiItem.text}
          featured
        />
      </div>
      <div className={styles.content_warp}>
        {serviceItemArray.map((item) => (
          <ServiceItem
            key={item.id}
            title={item.title}
            subTitle={item.subTitle}
            imgPath={`${imagePath}${item.imgPath}`}
            imgAlt={item.imgAlt}
            text={item.text}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
