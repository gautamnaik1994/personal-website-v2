import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';
import 'sanitize.css';
import 'sanitize.css/typography.css';
import 'sanitize.css/forms.css';
import '@/styles/globals.scss';
import Navbar from '@/components/Navbar';

const ubuntuFont = Ubuntu({
  variable: '--font-ubuntu',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Gautam Naik',
  description: 'A personal project by Gautam Naik',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.gautamnaik.com',
    siteName: 'Gautam Naik',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${ubuntuFont.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
