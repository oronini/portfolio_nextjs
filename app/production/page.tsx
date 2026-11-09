import { Metadata } from 'next';
import styles from './Production.module.css';
import PagesTitle from '@/components/common/parts/Titles/PagesTitle';
import ProductionItem from '@/components/production/ProductionItem';
import { visibleProductionItems } from '@/lib/productionItem';

export const metadata: Metadata = {
  title: 'Nekodesk Portfolio | Production',
  description:
    'Nekodesk の個人制作物です。Three.js や Next.js、React・TypeScript・Firebase などを使って制作したアプリとサイトを紹介します。',
};

const page = () => {
  return (
    <>
      <div className={styles.wrap}>
        <main>
          <PagesTitle title="Production" subTitle="制作物" />
          <ul className={styles.list}>
            {visibleProductionItems.map((item) => (
              <ProductionItem
                key={item.linkHref}
                linkHref={item.linkHref}
                imgPath={item.imgPath}
                alt={item.alt}
                title={item.title}
                skills={item.skills}
                pageText={item.pageText}
              />
            ))}
          </ul>
        </main>
      </div>
    </>
  );
};

export default page;
