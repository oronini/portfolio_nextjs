import styles from './Footer.module.css';
import Logo from '../parts/Logo';

import ToTopBtn from './toTopBtn/ToTopBtn';
import NavLinks from './navLinks/NavLinks';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.wrap}>
      <div className={styles.inner}>
        <ToTopBtn />
        <div className={styles.nav_wrap}>
          <NavLinks />
        </div>
        <div className={styles.legal_nav}>
          <Link href="/operator">運営者情報</Link>
          <Link href="/privacy">プライバシーポリシー</Link>
          <Link href="/disclaimer">免責事項</Link>
        </div>
        <div className={styles.logo_copyright_warp}>
          <div className={styles.logo_warp}>
            <Logo />
          </div>
          <p className={styles.copyright}>
            &copy; Nekodesk all rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
