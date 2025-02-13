import React, { Fragment } from 'react';
import Logo from '@/components/Logo';
import Link from 'next/Link';
import styles from './index.module.scss';
import socialLinks from '@/content/staticData/socialLinks';

const getYear = () => {
  const d = new Date();
  return d.getFullYear();
};

export default () => {
  return (
    <footer className={styles.Footer}>
      <Logo className={styles.StyledLogo} />
      <div className={styles[`social-links`]}>
        {socialLinks.map((link, index) => {
          return (
            <a
              href={link.value}
              key={index}
              target='_blank'
              title={link.key}
              rel='noreferrer'
            >
              <i className={`icon-${link.iconClassName}`} />
            </a>
          );
        })}
      </div>
      <small className='two-rem-mt half-rem-mb'>
        Built using{' '}
        <Link title='GatsbyJs' target='_blank' href='https://www.nextjs.org/'>
          GatsbyJs
        </Link>{' '}
        and hosted on{' '}
        <Link title='Netlify' href='https://www.netlify.com/' target='_blank'>
          Netlify
        </Link>
      </small>
      <small>&copy; Copyright {getYear()}, Gautam Naik</small>
    </footer>
  );
};
