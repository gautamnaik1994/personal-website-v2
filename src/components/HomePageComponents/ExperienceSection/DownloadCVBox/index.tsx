import React from 'react';
import ExternalLinkComponent from '@/components/Button/ExternalLinkButton';
import styles from './index.module.scss';

const DownloadCVBox = (): React.ReactElement => {
  return (
    <div className={styles.StyledDownloadCV}>
      <div className={styles[`top-sec`]}>Curriculum Vitae</div>

      <div className={styles.cv}>
        <div className={`${styles.page} ${styles[`second-page`]}`}>
          <p>
            Education
            <br />
            Contact
            <br />
            Links
            <br />
            References
          </p>
        </div>
        <div className={`${styles.page} ${styles[`first-page`]}`}>
          <p>
            Name
            <br />
            Position
            <br />
            Intro
            <br />
            Skills
            <br />
            Projects
            <br />
            Experience
            <br />
          </p>
        </div>
      </div>

      <ExternalLinkComponent
        href='https://docs.google.com/document/d/11sbc2ZdMQ29icbyBnARn6zPXepX3IispmQKP2ptu7_Q/edit?usp=sharing'
        title='Checkout my CV'
        variant='primary'
      >
        Checkout my CV
      </ExternalLinkComponent>
    </div>
  );
};

export default DownloadCVBox;
