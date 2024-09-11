import { Metadata } from 'next';
import styles from './Production.module.css';
import PagesTitle from '@/components/common/parts/Titles/PagesTitle';
import ProductionItem from '@/components/production/ProductionItem';
import { productionItemArray } from '@/lib/productionItem';

export const metadata: Metadata = {
  title: 'KM Production',
  description: 'KM Production',
};

const page = () => {
  return (
    <>
      <div className={styles.line}></div>
      <div className={styles.wrap}>
        <main>
          <PagesTitle title="Production" subTitle="制作物" />
          <ul className={styles.list}>
            {productionItemArray.map((item) => (
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
