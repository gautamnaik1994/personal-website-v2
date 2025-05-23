import React from 'react';
import Link from 'next/link';
import styles from './index.module.scss';
import { categories, categoryToSlugMap } from '@/service/blog';

interface Props {
  activeCategory: string;
}

export default function List({ activeCategory }: Props) {
  return (
    <div className={styles.CategoryTagListParent}>
      <div className={styles.CategoryTagList}>
        <Link
          title='All'
          href={`/blog/`}
          className={activeCategory == `Gautam Blogs` ? styles.active : ``}
        >
          All
        </Link>
        {categories.map((item) => (
          <Link
            key={item}
            scroll={false}
            href={`/blog/category/` + categoryToSlugMap[item]}
            className={item == activeCategory ? styles.active : `no`}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}
