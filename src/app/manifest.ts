import type { MetadataRoute } from 'next';
import siteMetaData from '@/content/staticData/siteMetaData';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteMetaData.title,
    short_name: siteMetaData.title,
    start_url: `/`,
    id: `gautamnaik`,
    background_color: `#1c2230`,
    theme_color: `#2196f3`,
    display: `standalone`,
    orientation: `portrait`,
    description: siteMetaData.description,
    shortcuts: [
      {
        name: `Gautam Blogs`,
        short_name: `Gautam Blogs`,
        description: `Gautam Blogs`,
        url: `/blog`,
        icons: [
          {
            src: `/icons/icon-192x192.png`,
            sizes: `192x192`,
          },
        ],
      },
      {
        name: `Projects`,
        short_name: `Projects`,
        description: `Projects`,
        url: `/projects`,
        icons: [
          {
            src: `/icons/icon-192x192.png`,
            sizes: `192x192`,
          },
        ],
      },
    ],
    icons: [
      {
        purpose: `any`,
        src: `/icons/icon-48x48.png`,
        sizes: `48x48`,
        type: `image/png`,
      },
      {
        purpose: `any`,
        src: `/icons/icon-72x72.png`,
        sizes: `72x72`,
        type: `image/png`,
      },
      {
        purpose: `any`,
        src: `/icons/icon-96x96.png`,
        sizes: `96x96`,
        type: `image/png`,
      },
      {
        purpose: `any`,
        src: `/icons/icon-128x128.png`,
        sizes: `128x128`,
        type: `image/png`,
      },
      {
        purpose: `any`,
        src: `/icons/icon-144x144.png`,
        sizes: `144x144`,
        type: `image/png`,
      },
      {
        purpose: `any`,
        src: `/icons/icon-152x152.png`,
        sizes: `152x152`,
        type: `image/png`,
      },
      {
        purpose: `any`,
        src: `/icons/icon-192x192.png`,
        sizes: `192x192`,
        type: `image/png`,
      },
      {
        purpose: `any`,
        src: `/icons/icon-256x256.png`,
        sizes: `256x256`,
        type: `image/png`,
      },
      {
        purpose: `any`,
        src: `/icons/icon-384x384.png`,
        sizes: `384x384`,
        type: `image/png`,
      },
      {
        purpose: `any`,
        src: `/icons/icon-512x512.png`,
        sizes: `512x512`,
        type: `image/png`,
      },
    ],
    screenshots: [
      {
        src: `/img/og-image.png`,
        sizes: `1200x630`,
        type: `image/png`,
        form_factor: `wide`,
        label: `Gautam Naik`,
      },
      {
        src: `/img/screenshot_d2.png`,
        sizes: `1200x630`,
        type: `image/png`,
        form_factor: `wide`,
        label: `Gautam Naik - Projects & Blog`,
      },
      {
        src: `/img/screenshot_m1.png`,
        sizes: `945x1800`,
        type: `image/png`,
        form_factor: `narrow`,
        label: `Gautam Naik`,
      },
      {
        src: `/img/screenshot_m2.png`,
        sizes: `945x1800`,
        type: `image/png`,
        form_factor: `narrow`,
        label: `Gautam Naik - Projects & Blog`,
      },
    ],
  };
}
