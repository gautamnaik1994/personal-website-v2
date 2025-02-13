import { getPaginatedPosts, postsPerPage } from '@/service/blog';
import BlogGrid from '@/components/BlogPageComponents/BlogGrid';

export default async function BlogHome() {
  const { posts, total } = await getPaginatedPosts({
    page: 1,
    limit: postsPerPage,
  });

  return (
    <main>
      <BlogGrid
        posts={posts}
        baseUrl='/blog/page'
        pageNumber={1}
        total={total}
      />
    </main>
  );
}
