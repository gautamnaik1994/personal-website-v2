import React from 'react';
import styles from './index.module.scss';

export default ({ title = 'Default' }: { title: string }): JSX.Element => {
  return <h2 className={styles.sectionTitle}>{title}</h2>;
};
