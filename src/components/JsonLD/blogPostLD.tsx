// import Script from 'next/script';
import siteMetaData from '@/content/staticData/siteMetaData';

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
    '@context': `https://schema.org`,
    '@type': `BlogPosting`,
    headline: props.title, // Use props title
    name: props.title, // Use props title
    url: `${siteMetaData.siteUrl}/blog/${props.slug}`,
    dateCreated: props.date, // YYYY-MM-DD format
    datePublished: props.date, // YYYY-MM-DD format
    dateModified: props.date, // YYYY-MM-DD format
    description: props.description, // Use props description

    author: {
      '@type': `Person`,
      name: siteMetaData.title,
      url: siteMetaData.siteUrl,
    },
    image: {
      // Recommended: Add image information
      '@type': `ImageObject`,
      url: `${siteMetaData.siteUrl}${props.banner}`,
      width: 1200, // Width in pixels
      height: 630, // Height in pixels (aspect ratio important for some rich results)
    },
    mainEntityOfPage: {
      // Helps search engines understand the context
      '@type': `WebPage`,
      url: `${siteMetaData.siteUrl}/blog/${props.slug}`,
    },
    publisher: {
      // Important for branding and authority
      '@type': `Organization`,
      name: siteMetaData.title,
      url: siteMetaData.siteUrl,
      logo: {
        '@type': `ImageObject`,
        url: `${siteMetaData.siteUrl}/img/og-image.png`,
      },
    },
    keywords: props.keywords,
    articleSection: props.headings,
    genre: props.categories,
    timeRequired: props.readingTime,
  };

  return (
    //eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
    <script
      id='blogPostLD'
      async={true}
      // strategy='beforeInteractive'
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
