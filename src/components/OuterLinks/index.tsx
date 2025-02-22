import React from 'react';
import socialLinks from '@/content/staticData/socialLinks';
import styles from './index.module.scss';

const OuterLinks = () => {
  return (
    <div className={`${styles.StyledOuterLinks} outer-links`}>
      <div className={styles[`left-side`]}>
        {socialLinks.map((link, index) => {
          return (
            <a
              href={link.value}
              key={index}
              target='_blank'
              title={`Visit ${link.key} profile`}
              rel='noreferrer'
            >
              <i className={`icon-${link.iconClassName}`} />
            </a>
          );
        })}
      </div>
      <div className={styles[`right-side`]}>
        <a
          className={styles.inner}
          title='Mail me'
          href={`mailto:gautamnaik1994@gmail.com`}
        >
          gautamnaik1994@gmail.com
        </a>
      </div>
    </div>
  );
};

export default OuterLinks;
