'use client';
import React, { useEffect, useRef } from 'react';

import styles from './index.module.scss';
import { TOCItem } from '@/types';

interface Props {
  isPopup?: boolean;
  items: TOCItem[];
  onCloseHandler?: () => void;
  isPhone?: boolean;
  className?: string;
}

const TableOfContents = ({
  items,
  isPopup = false,
  isPhone = false,
  onCloseHandler = () => {},
  className = '',
}: Props) => {
  const tocRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(url);
    if (targetElement) {
      targetElement.scrollIntoView();
      isPhone && onCloseHandler();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.body.classList.remove('toc-not-in-view');
        } else {
          document.body.classList.add('toc-not-in-view');
        }
      },
      {
        root: null,
        rootMargin: `0px`,
        threshold: 0.1,
      }
    );

    if (tocRef.current && !isPopup) {
      observer.observe(tocRef.current);
    }

    return () => {
      if (tocRef.current) {
        observer.unobserve(tocRef.current);
      }
    };
  }, []);

  const renderItems = (items: TOCItem[], level = 0) => {
    return (
      <ul
        className={`toc-list `}
        style={{ paddingLeft: `${level + 1 * 20}px` }}
      >
        {items.map((item, index) => {
          const newUrl = `#c-h-` + item.slug;
          return (
            <li key={index} className={`toc-item `}>
              <a
                href={newUrl}
                onClick={(e) => handleClick(e, newUrl)}
                className={`toc-link `}
              >
                {item.value}
              </a>
              {item.children &&
                item.children.length > 0 &&
                level < 2 &&
                renderItems(item.children, level + 1)}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <>
      <div
        className={`${styles.TOC}  ${isPopup && styles['toc-popup']} ${className} `}
        ref={tocRef}
      >
        <h2 className='mt-0'>Table of Contents</h2>
        {renderItems(items)}
      </div>
    </>
  );
};

export default TableOfContents;
