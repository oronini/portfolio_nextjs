import ServiceContactSectionTitle from '../../common/parts/serviceContactSectionTitle/ServiceContactSectionTitle';
import styles from './ServiceSection.module.css';
import ServiceItem from './serviceItem/ServiceItem';

const imagePath = 'img/home/serviceIcon/';
const serviceItemArray = [
  {
    id: 1,
    title: 'Direction',
    subTitle: 'ディレクション',
    imgPath: 'direction.svg',
    imgAlt: 'ディレクション画像',
    text: 'プロジェクト開始時には、お客様の詳細なビジョンと要望をヒアリングし、市場動向と競合分析を踏まえて課題を明確化します。目標達成に向けた具体的な計画を立案します。その上で、タスクとスケジュールを設定して実行体制を整えます。丁寧な準備を経て、着実に目標達成を目指します。',
  },
  {
    id: 2,
    title: 'Development',
    subTitle: '開発',
    imgPath: 'development.svg',
    imgAlt: '開発画像',
    text: 'フロントエンドエンジニアとして、モダンなJavaScriptを活用し、パフォーマンスが高く使いやすいUIを設計します。セマンティックでアクセシブルなマークアップを心がけ、デバイスを問わずシームレスな体験を提供することを重視しています。また、メンテナンス性と拡張性に優れたコーディングによって、お客様の要件を的確に捉えた高品質な開発を行います。',
  },
  {
    id: 3,
    title: 'Design',
    subTitle: 'デザイン',
    imgPath: 'design.svg',
    imgAlt: 'デザイン画像',
    text: 'シンプルかつスマートなデザインを得意とし、余白を巧みに活用することで情報の読みやすさと視覚的な快適さを向上させています。私の目標は、ユーザーが迷うことなく目的を達成できるよう、必要な情報を正確に伝えることです。開発者としての視点とクリエイティブな表現ので、効果的なデザインアプローチを実現しています。',
  },
];

const ServiceSection = () => {
  return (
    <section className={styles.section}>
      <ServiceContactSectionTitle title="Service" />
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
