// Import the MDX plugin
import createMDX from '@next/mdx';
import path from 'path';
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
import { remarkMermaid } from '@theguild/remark-mermaid';
const currentDir = path.resolve(process.cwd());

console.log(currentDir);

const withSerwist = withSerwistInit({
  swSrc: 'src/app/sw.ts',
  swDest: 'public/sw.js',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to support MDX
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx', 'md'],
  sassOptions: {
    additionalData: `
    @use "/src/styles/mixins.scss" as *;
    `,
    includePaths: ['src/styles'],
  },
  images: {
    qualities: [100, 75],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.d2$/,
      use: [], // no loader → Next.js ignores .d2 files
      type: 'asset/source', // optional, prevents Next from choking
    });

    return config;
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
      remarkMermaid,
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
