import React from 'react';
import socialLinks from '@/content/staticData/socialLinks';
import { SocialLink } from '@/types';
import styles from './index.module.scss';

const LinkBox = (): React.ReactElement => {
  return (
    <div className={styles.LinkBox}>
      <div className={styles.circle} />
      <div className='relative'>
        <h3 className='mt-0'>Social Links</h3>
        <div className='link-list'>
          {socialLinks.map((link: SocialLink, index: number) => {
            return (
              <a
                href={link.value}
                key={index}
                target='_blank'
                title={`Visit ${link.key} profile`}
                rel='noreferrer'
              >
                <i className={`icon-${link.iconClassName}`} /> {link.key}
                <span className='icon-open-new-tab'></span>
              </a>
            );
          })}
        </div>
        <h3 className=''>Education</h3>
        <div>
          <div className='edu-item'>
            <span>•</span>
            Bachelor of Engineering in Computer Science
          </div>
          <div className='edu-item'>
            <span>•</span>
            Continuous Learner, Still Learning 📈
          </div>
          {/* <div className='edu-item'>
            <span>•</span>
            <a
              href='https://woolf.university/id/1003119532'
              target='_blank'
              title='View my credentials'
              rel='noreferrer'
              className='masters-link'
            >
              Masters in Computer Science: AI and ML
              {` `}
              <span className='icon-open-new-tab'></span>
            </a>
          </div> */}
        </div>
        <h3 className=''>StackOverflow Badge</h3>
        <a
          href='https://stackoverflow.com/users/2376317/gautam-naik'
          className='stack-badge'
          target='_blank'
          title='View my StackOverflow profile'
          rel='noreferrer'
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src='https://stackoverflow.com/users/flair/2376317.png?theme=dark'
            loading='lazy'
            width='208'
            height='58'
            alt='profile for Gautam Naik at Stack Overflow, Q&amp;A for professional and enthusiast programmers'
            title='profile for Gautam Naik at Stack Overflow, Q&amp;A for professional and enthusiast programmers'
          />
        </a>
      </div>
    </div>
  );
};

export default LinkBox;
