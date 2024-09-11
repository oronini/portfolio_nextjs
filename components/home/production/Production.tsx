import SectionTitle from '@/components/common/parts/Titles/SectionTitle';
import styles from './Production.module.css';
import HomeLink from '@/components/common/parts/homeLink/HomeLink';
import ProductionBlogSiteLink from '@/components/common/parts/homeLink/productionBlogSiteLinkWrap/ProductionBlogSiteLink';
import ProductionItem from '@/components/production/ProductionItem';
import { productionItemArray } from '@/lib/productionItem';

const Production = () => {
  return (
    <section className={styles.section}>
      <SectionTitle title="Production" subTitle="制作物" />
      <ul className={styles.content}>
        {productionItemArray.slice(0, 3).map((item) => (
          <ProductionItem
            key={item.linkHref}
            imgPath={item.imgPath}
            alt={item.alt}
            linkHref={item.linkHref}
            title={item.title}
            topText={item.topText}
            home
          />
        ))}
      </ul>
      <ProductionBlogSiteLink>
        <HomeLink href="/production" linkText="View More" />
      </ProductionBlogSiteLink>
    </section>
  );
};

export default Production;
