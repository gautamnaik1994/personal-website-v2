import React from 'react';
import styles from './index.module.scss';

export default function SectionTitle({
  title = 'Default',
}: {
  title: string;
}): React.ReactElement {
  return <h2 className={styles.sectionTitle}>{title}</h2>;
}
