import { ReactNode } from 'react';
import styles from './ProductionBlogSiteLink.module.css';

type ProductionBlogSiteLink = {
  children: ReactNode;
};
const ProductionBlogSiteLink = ({ children }: ProductionBlogSiteLink) => {
  return <div className={styles.link_warp}>{children}</div>;
};

export default ProductionBlogSiteLink;
