'use client';
import React, { useState, useEffect } from 'react';
// import dynamic from 'next/dynamic';
import TableOfContents from '../TableOfContents';
import Button from '@/components/Button/Button';
import styles from './index.module.scss';
import { TOCItem } from '@/types';
import { isDesktop } from '@/utils/MediaQueries';

interface TOCWrapperProps {
  items: TOCItem[];
}

const TOCWrapper: React.FC<TOCWrapperProps> = ({ items }) => {
  const [isClient, setIsClient] = useState(false);
  const [isOpen, setIsOpen] = useState(isDesktop());

  useEffect(() => {
    setIsClient(true);
    setIsOpen(isDesktop());

    return () => {
      setIsClient(false);
      setIsOpen(false);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClick = (e: React.MouseEvent) => {
    // check if vibration is supported
    if (navigator.vibrate) {
      navigator.vibrate(100);
    }

    setIsOpen(!isOpen);
    (e.target as HTMLElement).blur();
  };

  if (!isClient) {
    return null;
  }

  return (
    <>
      <Button
        onClick={handleClick}
        variant='primary'
        className={`floating-toc-button ${styles[`floating`]}`}
        title='Open Table of Contents'
        isRounded={true}
      >
        <i className={`icon icon-${isOpen ? `close` : `bullet-list`}`}></i>
      </Button>
      {isOpen && (
        <TableOfContents
          className='floating-toc'
          isPhone={!isDesktop()}
          items={items}
          isPopup={true}
          onCloseHandler={handleClose}
        />
      )}
    </>
  );
};

export default TOCWrapper;
