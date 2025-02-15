import Script from 'next/script';
import { Post } from '@/types';

interface BlogListLDProps {
  title: string;
  path: string;
  posts: Post[];
}

export default async function JsonLD(props: BlogListLDProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: props.title + ' Blogs',
    url: `https://www.gautamnaik.com${props.path}`,
    description: 'This page contains blogs from ' + props.title + ' category.', // Use props description

    author: {
      '@type': 'Person',
      name: 'Gautam Naik', // Or your name
      url: 'https://www.gautamnaik.com', // Or your website URL
    },
    publisher: {
      // Important for branding and authority
      '@type': 'Organization',
      name: 'Gautam Naik', // Updated company/organization name
      url: 'https://www.gautamnaik.com', // Or your website URL
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.gautamnaik.com/img/og-image.png', // URL of the logo
      },
    },
    hasPart: [
      // {
      //   '@type': 'BlogPosting',
      //   name: 'Blog Post Title 1',
      //   description: 'Short description of blog post 1.',
      //   url: 'https://yourdomain.com/blog/blog-post-1',
      //   image: {
      //     '@type': 'ImageObject',
      //     url: 'https://yourdomain.com/images/blog-post-1-banner.jpg',
      //     width: 1200,
      //     height: 630,
      //   },
      //   keywords: 'keyword1, keyword2, keyword3', // Optional
      //   datePublished: '2024-11-08',
      //   readingTime: '5 mins', // Or "PT5M" in ISO 8601 format
      //   genre: ['Category 1', 'Category 2'], // Or single category if needed
      // },
      props.posts.map((post) => ({
        '@type': 'BlogPosting',
        name: post.title,
        description: post.description,
        url: `https://www.gautamnaik.com/blog/${post.slug}`,
        image: {
          '@type': 'ImageObject',
          url: `https://www.gautamnaik.com${post.bannerImage}`,
          width: 1200,
          height: 630,
        },
        keywords: post.keywords.join(', '),
        datePublished: post.date,
        timeRequired: post.readingTime.text,
        genre: post.categories,
      })),
    ],
  };

  return (
    <Script
      strategy='beforeInteractive'
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
