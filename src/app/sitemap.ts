import { MetadataRoute } from 'next';
import siteMetaData from '@/content/staticData/siteMetaData';
import { getPosts, slugToCategoryMap } from '@/service/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();
  const baseUrl = siteMetaData.siteUrl;

  const CHANGE_FREQUENCY_MONTHLY = `monthly` as const;

  const links = [
    {
      url: baseUrl, // Replace with your homepage
      lastModified: new Date(),
      changeFrequency: CHANGE_FREQUENCY_MONTHLY,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`, // Replace with your blog page
      lastModified: new Date(),
      changeFrequency: CHANGE_FREQUENCY_MONTHLY,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/page/2`, // Updated for pagination
      lastModified: new Date(),
      changeFrequency: CHANGE_FREQUENCY_MONTHLY,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`, // Replace with your projects page
      lastModified: new Date(),
      changeFrequency: CHANGE_FREQUENCY_MONTHLY,
      priority: 0.8,
    },
  ];

  posts.forEach((post) => {
    links.push({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: (post.updatedDate as unknown as Date) || new Date(),
      changeFrequency: CHANGE_FREQUENCY_MONTHLY,
      priority: 0.9,
    });
  });

  const categories = Object.keys(slugToCategoryMap);
  categories.forEach((category) => {
    links.push({
      url: `${baseUrl}/blog/category/${category}`,
      lastModified: new Date(),
      changeFrequency: CHANGE_FREQUENCY_MONTHLY,
      priority: 0.8,
    });
  });

  return links;
}
