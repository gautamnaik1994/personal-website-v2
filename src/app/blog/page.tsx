import { getPaginatedPosts, postsPerPage } from '@/service/blog';
import BlogGrid from '@/components/BlogPageComponents/BlogGrid';

export default async function BlogHome() {
  const { posts, total } = await getPaginatedPosts({
    page: 1,
    limit: postsPerPage,
  });

  return (
    <>
      <link rel='next' href={`https://www.gautamnaik.com/blog/page/2`} />
      <main>
        <BlogGrid
          posts={posts}
          baseUrl='/blog/page'
          altBaseUrl='/blog'
          pageNumber={1}
          total={total}
        />
      </main>
    </>
  );
}
