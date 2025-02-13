import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import AboutMe from '@/content/staticData/AboutMe.mdx';
import styles from './index.module.scss';
import LinkBox from './LinkBox';

interface Props {
  className?: string;
}

const AboutMeSection = ({ className }: Props): React.ReactElement => {
  return (
    <section className={`relative ${className}`}>
      <SectionTitle title='About Me' />
      <div className={styles.FlexBox}>
        <div className={styles.StyledAboutMe}>
          <AboutMe />
        </div>
        <LinkBox />
      </div>
    </section>
  );
};

export default AboutMeSection;
