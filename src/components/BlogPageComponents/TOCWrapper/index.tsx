'use client';
import React, { useState } from 'react';

import TableOfContents from '../TableOfContents';
import Button from '@/components/Button/Button';
import styles from './index.module.scss';
import { TOCItem } from '@/types';
import { isDesktop } from '@/utils/MediaQueries';

interface FloatingTocBtnProps {
  items: TOCItem[];
}

const FloatingTocBtn: React.FC<FloatingTocBtnProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(isDesktop());

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button
        onClick={(e) => {
          setIsOpen(!isOpen);
          (e.target as HTMLElement).blur();
        }}
        variant='primary'
        className={styles.RoundButton}
      >
        <i className={`icon icon-${isOpen ? `close` : `bullet-list`}`}></i>
      </Button>
      {isOpen && (
        <TableOfContents
          isPhone={!isDesktop()}
          items={items}
          isPopup={true}
          onCloseHandler={handleClose}
        />
      )}
    </>
  );
};

export default FloatingTocBtn;
