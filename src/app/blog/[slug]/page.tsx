import Image from 'next/image';
import type { Metadata, ResolvingMetadata } from 'next';
import { getPostBySlug_v2, getPostBySlug } from '@/service/blog';
import { PostContent, PostContentLite } from '@/types';
import Link from 'next/link';
import { H1 } from '@/components/MdxComponents/TextC';
import TableOfContents from '@/components/BlogPageComponents/TableOfContents';
import TableOfContentsWrapper from '@/components/BlogPageComponents/TOCWrapper';
import styles from './index.module.scss';
import Container from '@/components/Container';
import BlogPostLD from '@/components/JsonLD/blogPostLD';

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
    readingTime,
    toc,
    nextPost,
    prevPost,
  }: PostContent = await getPostBySlug_v2({ slug });

  return (
    <>
      <BlogPostLD
        title={frontmatter.title}
        description={frontmatter.description}
        banner={bannerPath.src}
        slug={slug}
        date={frontmatter.date}
        headings={toc.map((item) => item.value)}
        keywords={frontmatter.keywords || []}
        categories={frontmatter.categories || []}
        readingTime={readingTime.text}
      />
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
        <div className={styles.meta}>
          <span>{frontmatter.date}</span>
          <span>•</span>
          <span>{readingTime.text}</span>
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

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const { frontmatter, bannerPath }: PostContentLite = await getPostBySlug({
    slug,
  });

  return {
    title: `${frontmatter.title} | Gautam Naik`,
    description: frontmatter.description,
    keywords: frontmatter.keywords || [],
    openGraph: {
      type: 'article',
      locale: 'en_IN',
      url: `https://www.gautamnaik.com/blog/${slug}`,
      siteName: 'Gautam Naik',
      title: `${frontmatter.title} | Gautam Naik`,
      description: frontmatter.description,
      publishedTime: frontmatter.date,
      modifiedTime: frontmatter.updatedDate,
      section: frontmatter.categories.join(', '),
      images: [
        {
          url: `https://www.gautamnaik.com${bannerPath.src}`,
          width: 1200,
          height: 630,
          alt: frontmatter.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${frontmatter.title} | Gautam Naik`,
      description: frontmatter.description,
      images: [
        {
          url: `https://www.gautamnaik.com${bannerPath.src}`,
          width: 1200,
          height: 630,
          alt: frontmatter.title,
        },
      ],
    },
  };
}
