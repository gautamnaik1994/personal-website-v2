import { MetadataRoute } from 'next';

import { getPosts, slugToCategoryMap } from '@/service/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();
  const baseUrl = 'https://www.gautamnaik.com'; // Replace with your homepage
  const links = [
    {
      url: 'https://www.gautamnaik.com', // Replace with your homepage
      lastModified: new Date(),
      changeFrequency: 'monthly' as 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.gautamnaik.com/blog', // Replace with your blog page
      lastModified: new Date(),
      changeFrequency: 'monthly' as 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.gautamnaik.com/blog/page/2', // Updated for pagination
      lastModified: new Date(),
      changeFrequency: 'monthly' as 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.gautamnaik.com/projects', // Replace with your about page
      lastModified: new Date(),
      changeFrequency: 'monthly' as 'monthly',
      priority: 0.8,
    },
  ];

  posts.forEach((post) => {
    links.push({
      url: baseUrl + `/blog/${post.slug}`,
      lastModified: (post.updatedDate as unknown as Date) || new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    });
  });

  const categories = Object.keys(slugToCategoryMap);
  categories.forEach((category) => {
    links.push({
      url: baseUrl + `/blog/category/${category}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  return links;
}
