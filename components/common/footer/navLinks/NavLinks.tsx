'use client';
import Image from 'next/image';
import styles from './NavLink.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BLOG_URL } from '@/lib/blog';

const iconPath = '/img/icons/newTabOp.svg';

const navLinkArray: MenuItem[] = [
  { href: '/', text: 'Top' },
  { href: '/about', text: 'About Me' },
  { href: '/production', text: 'Production' },
  { href: BLOG_URL, text: 'Blog Site', external: true },
  { href: '/contact', text: 'Contact' },
];

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <>
      {navLinkArray.map((item) => {
        if (pathname !== item.href) {
          return (
            <Link
              key={item.href}
              href={item.href}
              className={styles.link}
              {...(item.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              <p>{item.text}</p>
              {item.external ? (
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
    </>
  );
};

export default NavLinks;
