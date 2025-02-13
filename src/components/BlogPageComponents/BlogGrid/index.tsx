import { type Post } from '@/types';
import PostItemMain from '@/components/BlogPageComponents/PostItem';
import styles from './index.module.scss';
import Container from '@/components/Container';
import HeroBanner from '@/components/HeroBanner';
import CategoryList from '../CategoryList';
import Pagination from '../Pagination';

export default function BlogGrid({
  posts,
  title = 'Gautam Blogs',
  baseUrl,
  pageNumber,
  total,
}: {
  posts: Post[];
  title?: string;
  baseUrl: string;
  pageNumber: number;
  total: number;
}) {
  return (
    <>
      <HeroBanner title={title} />
      <Container>
        <CategoryList activeCategory={title} />
        <div className={styles.Grid}>
          {posts.map(
            ({
              slug,
              title,
              date,
              categories,
              bannerPath,
              readingTime,
              description,
            }) => (
              <PostItemMain
                key={slug}
                link={slug}
                title={title}
                date={date}
                excerpt={description}
                categories={categories}
                readTime={readingTime.text}
                banner={bannerPath}
              />
            )
          )}
        </div>
        <Pagination baseUrl={baseUrl} pageNumber={pageNumber} total={total} />
      </Container>
    </>
  );
}
