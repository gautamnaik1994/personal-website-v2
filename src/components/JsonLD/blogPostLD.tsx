import Script from 'next/script';

interface BlogPostLDProps {
  title: string;
  description: string;
  banner: string;
  slug: string;
  date: string;
  headings: string[];
  keywords: string[];
  categories: string[];
  readingTime: string;
}

export default async function JsonLD(props: BlogPostLDProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: props.title, // Use props title
    name: props.title, // Use props title
    url: `https://www.gautamnaik.com/blog/${props.slug}`, // Use props slug
    dateCreated: props.date, // YYYY-MM-DD format
    datePublished: props.date, // YYYY-MM-DD format
    dateModified: props.date, // YYYY-MM-DD format
    description: props.description, // Use props description

    author: {
      '@type': 'Person',
      name: 'Gautam Naik', // Or your name
      url: 'https://www.gautamnaik.com', // Or your website URL
    },
    image: {
      // Recommended: Add image information
      '@type': 'ImageObject',
      url: `https://www.gautamnaik.com${props.banner}`, // URL of the featured image
      width: 1200, // Width in pixels
      height: 630, // Height in pixels (aspect ratio important for some rich results)
    },
    mainEntityOfPage: {
      // Helps search engines understand the context
      '@type': 'WebPage',
      url: `https://www.gautamnaik.com/blog/${props.slug}`, // Same as the blog post URL
    },
    publisher: {
      // Important for branding and authority
      '@type': 'Organization',
      name: 'Gautam Naik', // Updated company/organization name
      url: 'https://www.gautamnaik.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.gautamnaik.com/img/og-image.png', // URL of the logo
      },
    },
    keywords: props.keywords, // Use props keywords
    articleSection: props.headings,
    genre: props.categories,
    timeRequired: props.readingTime,
  };

  return (
    <Script
      strategy='beforeInteractive'
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
