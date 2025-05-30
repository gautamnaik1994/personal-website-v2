import { readdir } from 'fs/promises';
import { Post, PostContent, PostContentLite } from '@/types';

export const categories = [
  `Data Science`,
  `Machine Learning`,
  `Deep Learning`,
  `Software Engineering`,
  `Web Development`,
  `Vim`,
] as const;

export type Category = (typeof categories)[number];

export const slugToCategoryMap: Record<string, Category> = {
  'data-science': `Data Science`,
  'machine-learning': `Machine Learning`,
  'deep-learning': `Deep Learning`,
  'software-engineering': `Software Engineering`,
  'web-development': `Web Development`,
  vim: `Vim`,
};

export const categoryToSlugMap: Record<Category, string> = {
  'Data Science': `data-science`,
  'Machine Learning': `machine-learning`,
  'Deep Learning': `deep-learning`,
  'Software Engineering': `software-engineering`,
  'Web Development': `web-development`,
  Vim: `vim`,
};

export const postsPerPage = 9 as const;

export async function getPosts(): Promise<Post[]> {
  // Retrieve slugs from post routes
  const slugs = (
    await readdir(`./src/content/blog`, { withFileTypes: true })
  ).filter((dirent) => dirent.isDirectory());

  // Retrieve metadata from MDX files
  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { frontmatter, readingTime } = await import(
        `@/content/blog/${name}/index.mdx`
      );
      const bannerModule = await import(
        `@/content/blog/${name}/${frontmatter.bannerImage}`
      );
      const bannerPath = bannerModule.default;
      return {
        ...frontmatter,
        slug: name,
        bannerPath,
        readingTime,
      };
    })
  );

  // Sort posts from newest to oldest
  posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return posts;
}

export async function getPostsByCategory({
  category,
}: {
  category: Category;
}): Promise<Post[]> {
  const allPosts = await getPosts();
  const _category = slugToCategoryMap[category];
  // Filter posts by specified category
  const posts = allPosts.filter(
    (post) => post.categories.indexOf(_category) !== -1
  );

  return posts;
}

export async function getPaginatedPosts({
  page,
  limit,
}: {
  page: number;
  limit: number;
}): Promise<{ posts: Post[]; total: number }> {
  const allPosts = await getPosts();

  // Get a subset of posts pased on page and limit
  const paginatedPosts = allPosts.slice((page - 1) * limit, page * limit);

  return {
    posts: paginatedPosts,
    total: allPosts.length,
  };
}

export async function getPaginatedPostsByCategory({
  page,
  limit,
  category,
}: {
  page: number;
  limit: number;
  category: Category;
}): Promise<{ posts: Post[]; total: number }> {
  // console.log('category', category);
  const allCategoryPosts = await getPostsByCategory({ category });

  // Get a subset of posts pased on page and limit
  const paginatedCategoryPosts = allCategoryPosts.slice(
    (page - 1) * limit,
    page * limit
  );

  return {
    posts: paginatedCategoryPosts,
    total: allCategoryPosts.length,
  };
}

export async function getPostBySlug({
  slug,
}: {
  slug: string;
}): Promise<PostContentLite> {
  const { frontmatter } = await import(`@/content/blog/${slug}/index.mdx`);
  const bannerModule = await import(
    `@/content/blog/${slug}/${frontmatter.bannerImage}`
  );
  const bannerPath = bannerModule.default;
  return {
    frontmatter,
    bannerPath,
  };
}

export async function getPostBySlug_v2({
  slug,
}: {
  slug: string;
}): Promise<PostContent> {
  const allPosts = await getPosts();
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    throw new Error(`Post not found: ${slug}`);
  }

  let nextPost = allPosts[allPosts.indexOf(post) + 1];
  let prevPost = allPosts[allPosts.indexOf(post) - 1];

  if (nextPost == null) {
    nextPost = allPosts[0];
  }

  if (prevPost == null) {
    prevPost = allPosts[allPosts.length - 1];
  }

  const {
    default: content,
    frontmatter,
    toc,
  } = await import(`@/content/blog/${slug}/index.mdx`);
  // const bannerModule = await import(
  //   `@/content/blog/${slug}/${frontmatter.bannerImage}`
  // );
  // const bannerPath = bannerModule.default;

  return {
    content,
    frontmatter,
    bannerPath: post.bannerPath,
    toc,
    readingTime: post.readingTime,
    nextPost: nextPost && { slug: nextPost.slug, title: nextPost.title },
    prevPost: prevPost && { slug: prevPost.slug, title: prevPost.title },
  };
}

export const getFeaturedPosts = async (): Promise<Post[]> => {
  const allPosts = await getPosts();
  return allPosts.filter((post) => post.featuredPost);
};
