import React from 'react';
import Link from 'next/Link';
import styles from './index.module.scss';
import { categories, categoryToSlugMap } from '@/service/blog';

interface Props {
  activeCategory: string;
}

export default function List({ activeCategory }: Props) {
  return (
    <div className={styles.CategoryTagList}>
      <h3 className='one-rem-mb'>Categories</h3>
      <Link
        title='All'
        href={`/blog/`}
        className={activeCategory == 'Gautam Blogs' ? styles.active : ``}
      >
        All
      </Link>
      {categories.map((item) => (
        <Link
          key={item}
          scroll={false}
          href={'/blog/category/' + categoryToSlugMap[item]}
          className={item == activeCategory ? styles.active : 'no'}
        >
          {item}
        </Link>
      ))}
    </div>
  );
}
