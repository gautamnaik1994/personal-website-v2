import { getPaginatedPosts, getPosts, postsPerPage } from '@/service/blog';
import { notFound, redirect } from 'next/navigation';
import BlogGrid from '@/components/BlogPageComponents/BlogGrid';

export default async function Page(props: {
  params: Promise<{ pageNumber: number }>;
}) {
  const params = await props.params;
  let { pageNumber } = params;
  pageNumber = Number(pageNumber);

  if (pageNumber < 1) notFound();

  if (pageNumber == 1) redirect('/blog');

  const { posts, total } = await getPaginatedPosts({
    page: pageNumber,
    limit: postsPerPage,
  });

  if (!posts.length) notFound();

  return (
    <main>
      <BlogGrid
        posts={posts}
        baseUrl='/blog/page'
        pageNumber={pageNumber}
        total={total}
      />
    </main>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts();
  const pages = Math.ceil(posts.length / postsPerPage);

  return [...Array(pages)].map((_, i) => ({
    pageNumber: `${i + 1}`,
  }));
}
