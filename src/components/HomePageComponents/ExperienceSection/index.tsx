import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import styles from './index.module.scss';
import Experience from './Experience';
import DownloadCVBox from './DownloadCVBox';

interface Props {
  className?: string;
}

const ExperienceSectionComponent = ({ className }: Props): React.ReactNode => (
  <section className={className}>
    <SectionTitle title='Experience' />
    <div className={styles.ExperienceSection}>
      <Experience />
      <DownloadCVBox />
    </div>
  </section>
);

export default ExperienceSectionComponent;
