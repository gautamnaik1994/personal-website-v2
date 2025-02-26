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
  },
  twitter: {
    title: title,
    description: description,
  },
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
