import { getPaintings } from '@/service/paintings';
import { Painting } from '@/types';
import Container from '@/components/Container';
import HeroFn from '@/components/HeroBanner';
import PaintingList from './PaintingList'; // Client component wrapper
import styles from './index.module.scss';
import { Metadata } from 'next';
import siteMetaData from '@/content/staticData/siteMetaData';

export const metadata: Metadata = {
  title: `Digital Paintings`,
  description: `A collection of my digital paintings and artwork.`,
  openGraph: {
    url: `${siteMetaData.siteUrl}/paintings`,
    title: `Digital Paintings`,
    description: `A collection of my digital paintings and artwork.`,
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

export default async function PaintingsPage() {
  const paintings: Painting[] = await getPaintings();

  return (
    <>
      <HeroFn title='Digital Paintings' />
      <Container className={styles.container}>
        <PaintingList paintings={paintings} />
      </Container>
    </>
  );
}
