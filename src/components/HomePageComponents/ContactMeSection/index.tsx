import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import ExternalLinkButton from '@/components/Button/ExternalLinkButton';
import styles from './index.module.scss';

interface Props {
  className?: string;
}

export default function ContactMeSection({
  className,
}: Props): React.ReactElement {
  return (
    <section className={className}>
      <SectionTitle title="Let's Talk" />
      <div className={styles.StyledDiv}>
        <div className={styles['contact-me-text']}>
          I am always on the lookout for new and exciting opportunities. Drop an
          email if you have something exciting to share and I'll try my best to
          get back to you!
        </div>
        <ExternalLinkButton
          variant='primary'
          href={`mailto:gautamnaik1994@gmail.com`}
          title='Mail Me'
        >
          Mail Me
        </ExternalLinkButton>
      </div>
    </section>
  );
}
