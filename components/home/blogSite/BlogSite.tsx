import SectionTitle from '@/components/common/parts/Titles/SectionTitle';
import styles from './BlogSite.module.css';
import HomeLink from '@/components/common/parts/homeLink/HomeLink';
import ProductionBlogSiteLink from '@/components/common/parts/homeLink/productionBlogSiteLinkWrap/ProductionBlogSiteLink';
import ScatterText from '@/components/common/parts/scatterText/ScatterText';
import { BLOG_URL } from '@/lib/blog';

// 今はブログへの誘導だけ。最新記事を API から取得できるようになったら、
// ここに記事の一覧(BlogSiteItem)を表示する。
const BlogSite = () => {
  return (
    <section className={styles.section}>
      <SectionTitle title="Blog" subTitle="ブログ" />
      <div className={styles.content}>
        <p className={styles.text}>
          <ScatterText
            lines={[
              [
                '日常と猫、仕事、技術、ガジェット、PC、AI の記録を書いています。',
                'hard',
              ],
              ['Astro と Cloudflare で作ったブログで、', 'hard'],
              ['AI に運用を任せる仕組みなど、開発や自動化の話も載せています。'],
            ]}
          />
        </p>
      </div>
      <ProductionBlogSiteLink>
        <HomeLink href={BLOG_URL} linkText="Blog Site" blogSite />
      </ProductionBlogSiteLink>
    </section>
  );
};

export default BlogSite;
