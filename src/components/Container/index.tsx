import React from 'react';
import styles from './index.module.scss';

interface Props {
  children: React.ReactNode;
  className?: string;
}
export default ({ children, className = '' }: Props) => (
  <div
    className={`
    ${styles.Container}
    ${className}`}
  >
    {children}
  </div>
);
