import React from 'react';
import styles from './index.module.scss';

interface ItemProps {
  title: string;
  titlemed: string;
  value: number;
  className?: string;
}

export default ({ title, titlemed, value, className }: ItemProps) => (
  <div className={`${styles.Item} ${className}`}>
    <div className={styles.value}>{value}</div>
    <div
      className={styles.title}
      data-titlemed={titlemed}
      data-title={title}
    ></div>
  </div>
);
