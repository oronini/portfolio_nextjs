'use client';
import Image from 'next/image';
import styles from './NavLink.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const iconPath = 'img/icons/newTabOp.svg';

const navLinkArray = [
  { href: '/', text: 'Top' },
  { href: '/about', text: 'About Me' },
  { href: '/production', text: 'Production' },
  // { href: '/blog', text: 'Blog Site', icon: true },
  { href: '/contact', text: 'Contact' },
];

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <>
      {navLinkArray.map((item) => {
        if (pathname !== item.href) {
          return (
            <Link key={item.href} href={item.href} className={styles.link}>
              <p>{item.text}</p>
              {/* {item.icon ? (
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
              )} */}
            </Link>
          );
        }
      })}
    </>
  );
};

export default NavLinks;
