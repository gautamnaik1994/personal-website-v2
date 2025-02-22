import React from 'react';
import Link from 'next/link';
import styles from './index.module.scss';
import Image from 'next/image';
import { ImageData } from '@/types';
import { categoryToSlugMap } from '@/service/blog';
import { format } from 'date-fns';

interface Props {
  link: string;
  title: string;
  date: string;
  excerpt: string;
  categories: Array<keyof typeof categoryToSlugMap>;
  readTime: string;
  banner: ImageData;
  className?: string;
}

const PostItemMain = ({
  link,
  title,
  date,
  excerpt,
  categories,
  readTime,
  banner,
  className = ``,
}: Props): React.ReactElement => (
  <div className={`${styles.PostItem}  ${className}`}>
    <div className={styles[`img-container`]}>
      <Image src={banner} alt={title} />
    </div>
    <Link
      title={`Read more about ${title}`}
      href={`/blog/${link}`}
      aria-label={`Read more about ${title}`}
    >
      <h3>{title}</h3>
    </Link>
    <small>
      {format(date, `MMM dd, yyyy`)} &bull; {readTime}
    </small>
    <div className={styles[`category-holder`]}>
      <i className='icon-category text-accent l-icon' />
      <span>
        {categories.map((item) => (
          <Link
            key={item}
            className={styles[`category-link`]}
            title={`Go to ${item}`}
            href={`/blog/category/${categoryToSlugMap[item]}`}
          >
            {item}
          </Link>
        ))}
      </span>
    </div>

    <article className='one-rem-mt one-rem-mb'>{excerpt}</article>
    <div className={styles[`btn-holder`]}>
      <Link
        title={`Read more about ${title}`}
        href={`/blog/${link}`}
        aria-label={`Read more about ${title}`}
      >
        <div className='screen-reader-text'>Read more about {title}!</div>
        Read More
        <i className='icon-arrow-right ' />
      </Link>
    </div>
  </div>
);

export default PostItemMain;
