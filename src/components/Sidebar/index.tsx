'use client';
import React, { Fragment, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Link from 'next/link';
import Logo from '@/components/Logo';
import Hamburger from './Hamburger';
import styles from './index.module.scss';
import NavbarLinks from '@/components/NavLinks';
import siteMetaData from '@/content/staticData/siteMetaData';

const properties = {
  close: {
    transform: `translateX(-110%)`,
  },
  open: {
    transform: `translateX(0%)`,
  },
  springConfig: { mass: 5, tension: 250, friction: 35 },
};

export interface Props {
  className?: string;
}

export default function Sidebar({ className = `` }: Props): React.ReactElement {
  const [menuOpen, setMenuOpen] = useState(false);

  const { transform } = properties[menuOpen ? `open` : `close`];

  const sideBarProps = useSpring({
    transform,
    config: properties.springConfig,
  });

  return (
    <Fragment>
      {/* 
//@ts-expect-error: TypeScript cannot infer the type correctly */}
      <animated.aside
        className={`${styles.Sidebar} ${className}`}
        style={{ transform: sideBarProps.transform }}
      >
        <Link
          title={siteMetaData.title}
          className={styles.HomeLink}
          href='/'
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <Logo />
        </Link>

        <NavbarLinks
          className={styles.NavLink}
          activeClassName={styles.navActive}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        />
      </animated.aside>
      <Hamburger
        clickHandler={() => setMenuOpen(!menuOpen)}
        menuOpen={menuOpen}
      />
    </Fragment>
  );
}
