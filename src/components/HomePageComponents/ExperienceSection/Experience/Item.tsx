import React from 'react';
import styles from './index.module.scss';

interface ItemProps {
  title: string;
  titlemed: string;
  value: number;
}

export default ({ title, titlemed, value }: ItemProps) => (
  <div className={styles.Item}>
    <div className={styles.value}>{value}</div>
    <div
      className={styles.title}
      data-titlemed={titlemed}
      data-title={title}
    ></div>
  </div>
);
