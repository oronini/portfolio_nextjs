'use client';
import { useState } from 'react';
import styles from './HamburgerMenu.module.css';
import Link from 'next/link';
import './HamburgerMenu.css';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const iconPath = 'img/icons/newTabOp.svg';

const linkArray = [
  { href: '/', text: 'Top' },
  { href: '/about', text: 'About Me' },
  { href: '/production', text: 'Production' },
  // { href: '/blog', text: 'Blog Site', icon: true },
  { href: '/contact', text: 'Contact' },
];

const HamburgerMenu = () => {
  const pathname = usePathname();

  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <button className={styles.btn} onClick={() => setIsActive(!isActive)}>
        <span className={isActive ? `${styles.line} line_top` : styles.line}>
          <div className={styles.line_inner1}></div>
        </span>
        <span className={isActive ? `${styles.line} line_med` : styles.line}>
          {' '}
          <div className={styles.line_inner2}></div>
        </span>
        <span className={isActive ? `${styles.line} line_bottom` : styles.line}>
          {' '}
          <div className={styles.line_inner3}></div>
        </span>
      </button>
      <div
        className={
          isActive ? `${styles.wrap_bg} menu_is_active` : styles.wrap_bg
        }
        onClick={() => setIsActive(!isActive)}
      >
        <div className={styles.link_wrap}>
          {linkArray.map((item) => {
            if (pathname !== item.href) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={styles.link}
                  onClick={() => setIsActive(false)}
                >
                  <p>{item.text}</p>
                  {item.icon ? (
                    <div className={styles.icon_wrap}>
                      <Image
                        src={iconPath}
                        alt="別タブで開くアイコン"
                        width={15}
                        height={15}
                      />
                    </div>
                  ) : (
                    ''
                  )}
                </Link>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
