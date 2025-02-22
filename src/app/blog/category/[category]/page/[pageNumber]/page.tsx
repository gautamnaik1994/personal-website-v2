import { type Category, categories, slugToCategoryMap } from '@/service/blog';

import {
  getPaginatedPostsByCategory,
  getPostsByCategory,
  postsPerPage,
  categoryToSlugMap,
} from '@/service/blog';
import { notFound, redirect } from 'next/navigation';
import BlogGrid from '@/components/BlogPageComponents/BlogGrid';
import { Metadata } from 'next/types';
import siteMetaData from '@/content/staticData/siteMetaData';

export default async function Page(props: {
  params: Promise<{ category: Category; pageNumber: number }>;
}) {
  const params = await props.params;
  let { pageNumber } = params;
  const { category } = params;
  const decodedCategory = slugToCategoryMap[category];
  pageNumber = Number(pageNumber);

  if (pageNumber < 1) notFound();

  if (pageNumber == 1) redirect(`/blog/category/${category}`);

  const { posts, total } = await getPaginatedPostsByCategory({
    category,
    page: pageNumber,
    limit: postsPerPage,
  });

  if (!posts.length) notFound();

  return (
    <>
      {postsPerPage * pageNumber < total && (
        <link
          rel='next'
          href={`${siteMetaData.siteUrl}/blog/category/${category}/page/${pageNumber + 1}`}
        />
      )}
      {pageNumber == 2 && (
        <link
          rel='prev'
          href={`${siteMetaData.siteUrl}/blog/category/${category}`}
        />
      )}

      {pageNumber > 2 && (
        <link
          rel='prev'
          href={`${siteMetaData.siteUrl}/blog/category/${category}/page/${pageNumber - 1}`}
        />
      )}

      <main>
        <BlogGrid
          posts={posts}
          title={decodedCategory}
          baseUrl={`/blog/category/${category}/page`}
          pageNumber={pageNumber}
          total={total}
        />
      </main>
    </>
  );
}

export async function generateStaticParams() {
  const paths = await Promise.all(
    categories.map(async (category) => {
      const posts = await getPostsByCategory({ category });
      const pages = Math.ceil(posts.length / postsPerPage);
      return [...Array(pages)].map((_, i) => ({
        category: categoryToSlugMap[category],
        page: `${i + 1}`,
      }));
    })
  );
  return paths.flat();
}

type Props = {
  params: Promise<{ category: string; pageNumber: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = (await params).category;

  return {
    alternates: {
      canonical: `/blog/category/${category}`,
    },
  };
}
