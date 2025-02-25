// Import the MDX plugin
import createMDX from '@next/mdx';
import remarkMdxTocWithSlugs from '@altano/remark-mdx-toc-with-slugs';
import readingTime from 'remark-reading-time';
import readingMdxTime from 'remark-reading-time/mdx.js';
import rehypeSlug from 'rehype-slug';
import rehypeMdxImportMedia from 'rehype-mdx-import-media';
// import rehypeShiki from '@shikijs/rehype';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import rehypeUnwrapImages from 'rehype-unwrap-images';
import withSerwistInit from '@serwist/next';
import rehypePrettyCode from 'rehype-pretty-code';
import withBundleAnalyzer from '@next/bundle-analyzer';

const withSerwist = withSerwistInit({
  swSrc: 'src/app/sw.ts',
  swDest: 'public/sw.js',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to support MDX
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx', 'md'],
  sassOptions: {
    additionalData: `@use "mixins" as *;`,
    includePaths: ['./src/styles'],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    // ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self' *",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' *",
              "style-src 'self' 'unsafe-inline' *",
              "img-src 'self' data: blob: *",
              "font-src 'self' data: *",
              "connect-src 'self' *",
              "media-src 'self' *",
            ].join('; '),
          },
        ],
      },
      {
        source: '/sw.js',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/javascript; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ];
  },
};

/** @type {import('rehype-pretty-code').Options} */
const rehypePrettyCodeOptions = {
  theme: 'catppuccin-mocha',
  // inline: true,
  // fallbackLanguage: 'plaintext',
  // addLanguageClass: true,
  defaultLang: {
    block: 'plaintext',
    inline: 'plaintext',
  },
  bypassInlineCode: true,
  // grid: false,
};

/** @type {import('rehype-slug').Options} */
const rehypeSlugOptions = {
  prefix: 'c-h-',
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [
      remarkMdxTocWithSlugs,
      readingTime,
      readingMdxTime,
      remarkFrontmatter,
      remarkMdxFrontmatter,
    ],
    rehypePlugins: [
      rehypeUnwrapImages,
      [rehypePrettyCode, rehypePrettyCodeOptions],
      [rehypeSlug, rehypeSlugOptions],
      rehypeMdxImportMedia,
    ],
  },
});

// Use the MDX plugin
export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(withSerwist(withMDX(nextConfig)));
