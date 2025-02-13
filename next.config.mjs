// Import the MDX plugin
import createMDX from '@next/mdx';
import remarkMdxTocWithSlugs from '@altano/remark-mdx-toc-with-slugs';
// import rehypePrettyCode from 'rehype-pretty-code';
import readingTime from 'remark-reading-time';
import readingMdxTime from 'remark-reading-time/mdx.js';
import rehypeSlug from 'rehype-slug';
import rehypeMdxImportMedia from 'rehype-mdx-import-media';
import rehypeShiki from '@shikijs/rehype';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to support MDX
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx', 'md'],
  sassOptions: {
    additionalData: `@use "mixins" as *;`,
    includePaths: ['./src/styles'],
  },
};

/** @type {import('rehype-pretty-code').Options} */
const rehypePrettyCodeOptions = {
  theme: 'catppuccin-mocha',
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
      [rehypeShiki, rehypePrettyCodeOptions],
      [rehypeSlug, rehypeSlugOptions],
      rehypeMdxImportMedia,
    ],
  },
});

// Use the MDX plugin
export default withMDX(nextConfig);
