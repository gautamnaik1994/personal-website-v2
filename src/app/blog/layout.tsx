import type { Metadata } from 'next';
import siteMetaData from '@/content/staticData/siteMetaData';

const description = `Here you will find blogs on Web Development, Data Science and Machine Learning.`;
const title = `Gautam Blogs`;

export const metadata: Metadata = {
  title: title,
  description: description,
  appleWebApp: {
    title: title,
  },
  openGraph: {
    url: `${siteMetaData.siteUrl}/blog`,
    title: title,
    description: description,
    type: 'website',
    images: [
      {
        url: `${siteMetaData.siteUrl}/img/og-image.png`,
        width: 1200,
        height: 630,
        alt: siteMetaData.title,
      },
    ],
  },
  twitter: {
    title: title,
    description: description,
    images: [
      {
        url: `${siteMetaData.siteUrl}/img/og-image.png`,
        width: 1200,
        height: 630,
        alt: siteMetaData.title,
      },
    ],
  },
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
