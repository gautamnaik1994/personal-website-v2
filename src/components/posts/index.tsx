import { type Post } from '@/types';
import PostItemMain from '@/components/BlogPageComponents/PostItem';

export function Posts({ posts }: { posts: Post[] }) {
  return (
    <div>
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
            category={categories[0]}
            readTime={readingTime.text}
            banner={bannerPath}
          />
        )
      )}
    </div>
  );
}
