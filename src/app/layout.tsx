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

const ubuntuFont = Ubuntu({
  variable: '--font-ubuntu',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

const description =
  'Gautam Naik is a Senior Software Engineer who specializes in Web Development, Data Science and Machine Learning';
const title = 'Gautam Naik';

export const metadata: Metadata = {
  applicationName: title,
  title: { default: 'Gautam Naik', template: '%s | Gautam Naik' },
  description: description,
  authors: [{ name: title }],
  metadataBase: new URL('https://www.gautamnaik.com'),
  alternates: {
    canonical: './',
  },
  category: 'Portfolio',
  robots: 'index, follow',
  formatDetection: {
    telephone: false,
    email: true,
  },
  icons: {
    icon: '/icon-48x48.png',
    apple: '/icons/icon-192x192.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: title,
    // startUpImage: [],
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.gautamnaik.com',
    siteName: title,
    title: title,
    description: description,
    images: [
      {
        url: 'https://www.gautamnaik.com/img/og-image.png',
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    site: '@gautamnaik1994',
    creator: '@gautamnaik1994',
    images: [
      {
        url: 'https://www.gautamnaik.com/img/og-image.png',
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  facebook: {
    appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || '',
  },
};
export const viewport: Viewport = {
  themeColor: '#2196f3',
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
      <GoogleTagManager gtmId='GTM-XYZ' />
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
