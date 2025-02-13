import { categories, type Category } from '@/service/blog';
import {
  getPaginatedPostsByCategory,
  postsPerPage,
  slugToCategoryMap,
  categoryToSlugMap,
} from '@/service/blog';
import { notFound } from 'next/navigation';
import BlogGrid from '@/components/BlogPageComponents/BlogGrid';

export default async function CategoryHome(props: {
  params: Promise<{ category: Category }>;
}) {
  const params = await props.params;
  const { category } = params;
  const decodedCategory = slugToCategoryMap[category];

  // 404 if the category does not exist
  if (categories.indexOf(decodedCategory as Category) == -1) notFound();

  const { posts, total } = await getPaginatedPostsByCategory({
    category: category as Category,
    page: 1,
    limit: postsPerPage,
  });

  if (!posts || posts.length === 0) {
    return <div>No posts found in this category.</div>;
  }

  return (
    <main>
      <BlogGrid
        posts={posts}
        title={decodedCategory}
        baseUrl={`/blog/category/${category}/page`}
        pageNumber={1}
        total={total}
      />
    </main>
  );
}

export function generateStaticParams() {
  return categories.map((category) => ({
    category: categoryToSlugMap[category],
  }));
}
