import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { getFeaturedPosts } from '@/service/blog';
import PostItemMain from '@/components/BlogPageComponents/PostItem';
import styles from './index.module.scss';
import InternalLinkButton from '@/components/Button/InternalLinkButton';

interface Props {
  className?: string;
}

const FeaturedBlogs = async ({ className }: Props) => {
  const posts = await getFeaturedPosts();

  return (
    <section className={className}>
      <SectionTitle title=' Blogs' />
      <div className={`${styles.blogList} two-rem-mb`}>
        {posts.map(
          ({
            slug,
            title,
            date,
            categories,
            bannerPath,
            readingTime,
            description,
          }) => (
            <PostItemMain
              key={slug}
              link={slug}
              title={title}
              date={date}
              excerpt={description}
              categories={categories}
              readTime={readingTime.text}
              banner={bannerPath}
            />
          )
        )}
      </div>
      <div className='text-center'>
        <InternalLinkButton
          href='/blogs'
          title='View All Blogs'
          variant='primary'
        >
          View All Blogs
        </InternalLinkButton>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
