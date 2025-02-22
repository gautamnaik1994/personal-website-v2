import BlogPostLD from '@/components/JsonLD/blogPostLD';
import { getPostBySlug_v2 } from '@/service/blog';
import { PostContent } from '@/types';

interface BlogLayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export default async function BlogLayout({
  children,
  params,
}: BlogLayoutProps) {
  const { slug } = await params;
  const { frontmatter, bannerPath, readingTime, toc }: PostContent =
    await getPostBySlug_v2({ slug });

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
      {children}
    </>
  );
}
