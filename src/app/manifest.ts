import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Gautam Naik',
    short_name: 'Gautam Naik',
    start_url: '/',
    id: 'gautamnaik',
    background_color: '#212738',
    theme_color: '#4BACFE',
    display: 'standalone',
    orientation: 'portrait',
    description:
      'Gautam Naik is a Senior Software Engineer who specializes in Web Development, Data Science and Machine Learning.',
    shortcuts: [
      {
        name: 'Gautam Blogs',
        short_name: 'Gautam Blogs',
        description: 'Gautam Blogs',
        url: '/blog',
        icons: [
          {
            src: '/icons/icon-192x192.png',
            sizes: '192x192',
          },
        ],
      },
      {
        name: 'Projects',
        short_name: 'Projects',
        description: 'Projects',
        url: '/projects',
        icons: [
          {
            src: '/icons/icon-192x192.png',
            sizes: '192x192',
          },
        ],
      },
    ],
    icons: [
      {
        purpose: 'any',
        src: '/icons/icon-48x48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        purpose: 'any',
        src: '/icons/icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
      },
      {
        purpose: 'any',
        src: '/icons/icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        purpose: 'any',
        src: '/icons/icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        purpose: 'any',
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        purpose: 'any',
        src: '/icons/icon-256x256.png',
        sizes: '256x256',
        type: 'image/png',
      },
      {
        purpose: 'any',
        src: '/icons/icon-384x384.png',
        sizes: '384x384',
        type: 'image/png',
      },
      {
        purpose: 'any',
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    screenshots: [
      {
        src: '/img/og-image.png',
        sizes: '1200x630',
        type: 'image/png',
        form_factor: 'wide',
        label: 'Who is Gautam Naik?',
      },
      {
        src: '/img/mobile_screenshot.png',
        sizes: '1170X2532',
        type: 'image/png',
        form_factor: 'narrow',
        label: 'Who is Gautam Naik?',
      },
    ],
  };
}
