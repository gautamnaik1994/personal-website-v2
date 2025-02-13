'use client';
import Link from 'next/link';
import Logo from '../Logo';
import { NAVIGATION } from '@/utils/constant';
import styles from './index.module.scss';
import { usePathname } from 'next/navigation';

export interface Props {
  className?: string;
}

const NavbarComponent = ({ className }: Props) => {
  const pathname = usePathname();
  const isActive = (link: string) => {
    return pathname.startsWith(link);
  };

  return (
    <nav className={`${styles.Navbar} ${className}`}>
      <Link
        title='Gautam Naik'
        href='/'
        className={styles.homeLink}
        aria-label='Home'
      >
        <Logo />
      </Link>

      {NAVIGATION.map((navigation) => (
        <Link
          className={`${styles.navLink} ${
            isActive(navigation.to) ? styles.navActive : ''
          }`}
          key={navigation.label}
          title={navigation.title}
          href={navigation.to}
          target={navigation.external ? `_blank` : undefined}
          rel={navigation.external ? `noopener noreferrer` : undefined}
        >
          {navigation.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavbarComponent;
