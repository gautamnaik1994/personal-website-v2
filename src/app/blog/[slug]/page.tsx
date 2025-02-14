import Image from 'next/image';
import type { Metadata } from 'next';
import { getPostBySlug_v2 } from '@/service/blog';
import { PostContent } from '@/types';
import Link from 'next/link';
import { H1 } from '@/components/MdxComponents/TextC';
import TableOfContents from '@/components/BlogPageComponents/TableOfContents';
import TableOfContentsWrapper from '@/components/BlogPageComponents/TOCWrapper';
import styles from './index.module.scss';
import Container from '@/components/Container';

export const metadata: Metadata = {};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const {
    content: Post,
    frontmatter,
    bannerPath,
    toc,
    nextPost,
    prevPost,
  }: PostContent = await getPostBySlug_v2({ slug });

  metadata['title'] = frontmatter.title;
  metadata['description'] = frontmatter.description;
  metadata['openGraph'] = {
    type: 'article',
    locale: 'en_US',
    url: `https://www.gautamnaik.com/blog/${slug}`,
    siteName: 'Gautam Naik',
    title: frontmatter.title,
    description: frontmatter.description,
    images: [
      {
        url: `https://www.gautamnaik.com${bannerPath.src}`,
        width: 1200,
        height: 630,
        alt: frontmatter.title,
      },
    ],
  };

  return (
    <>
      <article className={styles.article}>
        <H1>{frontmatter.title}</H1>
        <div className={styles.headerImageWrapper}>
          <Image
            className='headerImage'
            src={bannerPath}
            alt={frontmatter.title}
            width={1200}
            height={630}
            placeholder='blur'
          />
        </div>
        <TableOfContents items={toc} />
        <div className={styles.postParent}>
          <Post className='temp' />
        </div>
      </article>
      <Container>
        <div>
          {prevPost && (
            <Link href={`/blog/${prevPost.slug}`} rel='prev'>
              {prevPost.title}
            </Link>
          )}
          {nextPost && (
            <Link href={`/blog/${nextPost.slug}`} rel='next'>
              {nextPost.title}
            </Link>
          )}
        </div>
      </Container>
      <TableOfContentsWrapper items={toc} />
    </>
  );
}

export async function generateStaticParams() {
  const { readdir } = await import('fs/promises');

  const files = await readdir('src/content/blog');
  return files
    .filter((file) => !file.startsWith('.')) // Ignore hidden files like .DS_Store
    .map((file) => ({
      slug: file.replace(/\.mdx?$/, ''), // Remove file extension if applicable
    }));
}
