import type { Metadata, Viewport } from 'next';

const description =
  'Here you will find blogs on Web Development, Data Science and Machine Learning.';
const title = 'Gautam Blogs';

export const metadata: Metadata = {
  title: title,
  description: description,
  appleWebApp: {
    title: title,
  },
  openGraph: {
    url: 'https://www.gautamnaik.com/blog',
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
