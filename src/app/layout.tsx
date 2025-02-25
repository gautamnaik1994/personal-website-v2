import type { Metadata, Viewport } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';
import { Ubuntu } from 'next/font/google';
import 'sanitize.css';
import 'sanitize.css/typography.css';
import 'sanitize.css/forms.css';
import '@/styles/globals.scss';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import OuterLinks from '@/components/OuterLinks';
import siteMetaData from '@/content/staticData/siteMetaData';

const ubuntuFont = Ubuntu({
  variable: '--font-ubuntu',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  applicationName: siteMetaData.title,
  title: {
    default: siteMetaData.title,
    template: `%s | ${siteMetaData.title}`,
  },
  description: siteMetaData.description,
  authors: [{ name: siteMetaData.title }],
  metadataBase: new URL(siteMetaData.siteUrl),
  keywords: siteMetaData.keywords,
  alternates: {
    canonical: `./`,
  },
  category: `Portfolio`,
  robots: `index, follow`,
  formatDetection: {
    telephone: false,
    email: true,
  },
  icons: {
    icon: `/icon-48x48.png`,
    apple: `/icons/icon-192x192.png`,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: `default`,
    title: siteMetaData.title,
    // startUpImage: [],
  },
  openGraph: {
    type: `website`,
    locale: `en_IN`,
    url: siteMetaData.siteUrl,
    siteName: siteMetaData.title,
    title: siteMetaData.title,
    description: siteMetaData.description,
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
    card: `summary_large_image`,
    title: siteMetaData.title,
    description: siteMetaData.description,
    site: `@gautamnaik1994`,
    creator: `@gautamnaik1994`,
    images: [
      {
        url: `${siteMetaData.siteUrl}/img/og-image.png`,
        width: 1200,
        height: 630,
        alt: siteMetaData.title,
      },
    ],
  },
  facebook: {
    appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || ``,
  },
};
export const viewport: Viewport = {
  themeColor: `#2196f3`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta name='googlebot' content='all' />
      </head>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ``} />
      <body className={`${ubuntuFont.variable} toc-not-in-view `}>
        <Navbar />
        <Sidebar />
        {children}
        <OuterLinks />
        <Footer />
      </body>
    </html>
  );
}
