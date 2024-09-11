import SectionTitle from '@/components/common/parts/Titles/SectionTitle';
import styles from './BlogSite.module.css';
import BlogSiteItem from './blogSiteItem/BlogSiteItem';
import HomeLink from '@/components/common/parts/homeLink/HomeLink';
import ProductionBlogSiteLink from '@/components/common/parts/homeLink/productionBlogSiteLinkWrap/ProductionBlogSiteLink';

const imagePath = '/img/home/blogSite/';
const BlogSiteItemArray: BlogSiteSectionProps[] = [
  {
    id: 0,
    imgPath: 'blogImg1.jpg',
    alt: 'サイト画像',
    date: 'yyyy/mm/dd',
    linkHref: '#',
    text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
  {
    id: 1,
    imgPath: 'blogImg2.jpg',
    alt: 'サイト画像',
    date: 'yyyy/mm/dd',
    linkHref: '#',
    text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
  {
    id: 2,
    imgPath: 'blogImg3.jpg',
    alt: 'サイト画像',
    date: 'yyyy/mm/dd',
    linkHref: '#',
    text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
  {
    id: 3,
    imgPath: 'blogImg4.jpg',
    alt: 'サイト画像',
    date: 'yyyy/mm/dd',
    linkHref: '#',
    text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
];

const BlogSite = () => {
  return (
    <section className={styles.section}>
      <SectionTitle title="Blog Site" subTitle="ブログサイト" />
      <div className={styles.content}>
        {BlogSiteItemArray.map((item) => (
          <BlogSiteItem
            key={item.id}
            imgPath={`${imagePath}${item.imgPath}`}
            alt={item.alt}
            date={item.date}
            linkHref={item.linkHref}
            text={item.text}
          />
        ))}
      </div>
      <ProductionBlogSiteLink>
        <HomeLink href="/contact" linkText="Blog Site" blogSite />
      </ProductionBlogSiteLink>
    </section>
  );
};

export default BlogSite;
