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
  ...props
}: Props): React.ReactElement => (
  <div className={`${styles.PostItem}  ${props.className}`}>
    <div className={styles['img-container']}>
      <Image src={banner} alt={title} />
    </div>
    <Link title={title} href={`/blog/${link}`}>
      <h2 className='m-0'>{title}</h2>
    </Link>
    <small>
      {format(date, 'MMM dd, yyyy')} &bull; {readTime}
    </small>
    <div className={styles['category-holder']}>
      <i className='icon-category text-accent l-icon' />
      <span>
        {categories.map((item) => (
          <Link
            key={item}
            className={styles['category-link']}
            title={`Go to ${item}`}
            href={`/blog/category/${categoryToSlugMap[item]}`}
          >
            {item}
          </Link>
        ))}
      </span>
    </div>

    <article className='one-rem-mt one-rem-mb'>{excerpt}</article>
    <div className={styles['btn-holder']}>
      <Link title='Read More' href={`/blog/${link}`}>
        Read More
        <i className='icon-arrow-right ' />
      </Link>
    </div>
  </div>
);

export default PostItemMain;
