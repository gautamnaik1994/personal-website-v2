'use client';
import React, { useState, ReactNode } from 'react';
import Button from '@/components/Button/Button';
import styles from './index.module.scss';

function ExpandableSeeMore({ children }: { children: ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setIsExpanded(!isExpanded);
    // event.target.blur();
  };

  return (
    <div className={`${styles.expandableSeeMore} one-rem-mb`}>
      <div
        className={`${styles.inner} ${isExpanded ? styles.open : styles.close}`}
      >
        {children}
      </div>
      <Button variant='primary' onClick={(e) => handleClick(e)}>
        {isExpanded ? `See Less` : `See More`}
      </Button>
    </div>
  );
}

export default ExpandableSeeMore;
