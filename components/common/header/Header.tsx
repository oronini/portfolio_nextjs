import React from 'react';
import Logo from '../parts/Logo';
import styles from './Header.module.css';
import Link from 'next/link';
import HamburgerMenu from './hamburgerMenu/HamburgerMenu';

const Header = () => {
  return (
    <header className={styles.wrap}>
      <div className={styles.inner}>
        <Link href={'/'} className={styles.link}>
          <div className={styles.title_warp}>
            <div className={styles.logo_warp}>
              <Logo />
            </div>
            <h1 className={styles.title}>Mikami Koji</h1>
          </div>
        </Link>
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default Header;
