// import Script from 'next/script';
import { Post } from '@/types';
import siteMetaData from '@/content/staticData/siteMetaData';

interface BlogListLDProps {
  title: string;
  path: string;
  posts: Post[];
}

export default async function JsonLD(props: BlogListLDProps) {
  const data = {
    '@context': `https://schema.org`,
    '@type': `CollectionPage`,
    name: props.title + ` Blogs`,
    url: `${siteMetaData.siteUrl}${props.path}`,
    description: `This page contains blogs from ` + props.title + ` category.`, // Use props description

    author: {
      '@type': `Person`,
      name: siteMetaData.title,
      url: siteMetaData.siteUrl,
    },
    publisher: {
      // Important for branding and authority
      '@type': `Organization`,
      name: siteMetaData.title,
      url: siteMetaData.siteUrl,
      logo: {
        '@type': `ImageObject`,
        url: `${siteMetaData.siteUrl}/img/og-image.png`, // URL of the logo
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
        '@type': `BlogPosting`,
        name: post.title,
        description: post.description,
        url: `${siteMetaData.siteUrl}/blog/${post.slug}`,
        image: {
          '@type': `ImageObject`,
          url: `${siteMetaData.siteUrl}${post.bannerImage}`,
          width: 1200,
          height: 630,
        },
        keywords: post.keywords.join(`, `),
        datePublished: post.date,
        timeRequired: post.readingTime.text,
        genre: post.categories,
      })),
    ],
  };

  return (
    //eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
    <script
      id='blogPostListLD'
      async={true}
      // strategy='beforeInteractive'
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
