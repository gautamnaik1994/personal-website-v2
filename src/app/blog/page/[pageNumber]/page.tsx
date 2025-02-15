import { getPaginatedPosts, getPosts, postsPerPage } from '@/service/blog';
import { notFound, redirect } from 'next/navigation';
import BlogGrid from '@/components/BlogPageComponents/BlogGrid';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
  alternates: {
    canonical: '/blog',
  },
};

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
    <>
      <link
        rel='next'
        href={`https://www.gautamnaik.com/blog/page/${pageNumber + 1}`}
      />
      {pageNumber == 2 && (
        <link rel='prev' href={`https://www.gautamnaik.com/blog`} />
      )}
      {pageNumber > 2 && (
        <link
          rel='prev'
          href={`https://www.gautamnaik.com/blog/page/${pageNumber - 1}`}
        />
      )}
      <main>
        <BlogGrid
          posts={posts}
          baseUrl='/blog/page'
          pageNumber={pageNumber}
          total={total}
        />
      </main>
    </>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts();
  const pages = Math.ceil(posts.length / postsPerPage);

  return [...Array(pages)].map((_, i) => ({
    pageNumber: `${i + 1}`,
  }));
}
