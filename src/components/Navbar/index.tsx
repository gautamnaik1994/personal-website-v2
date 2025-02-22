import Link from 'next/link';
import Logo from '../Logo';
import styles from './index.module.scss';
import NavbarLinks from '@/components/NavLinks';
import siteMetaData from '@/content/staticData/siteMetaData';

export interface Props {
  className?: string;
}

const NavbarComponent = ({ className = `` }: Props) => {
  return (
    <nav className={`${styles.Navbar} ${className}`}>
      <Link
        title={siteMetaData.title}
        href='/'
        className={styles.homeLink}
        aria-label='Home'
      >
        <Logo />
      </Link>

      <NavbarLinks
        className={styles.navLink}
        activeClassName={styles.navActive}
      />
    </nav>
  );
};

export default NavbarComponent;
