import { postsPerPage } from '@/service/blog';
import InternalLinkButton from '@/components/Button/InternalLinkButton';
import styles from './index.module.scss';

export default function Pagination({
  baseUrl,
  pageNumber,
  total,
}: {
  baseUrl: string;
  pageNumber: number;
  total: number;
}) {
  const hasNext = postsPerPage * pageNumber < total;
  const hasPrev = pageNumber !== 1;

  return (
    <div className={styles.PaginationWrapper}>
      <InternalLinkButton
        variant='primary'
        href={`${baseUrl}/${pageNumber - 1}`}
        rel='prev'
        title='Previous'
        className={`${styles.left} ${!hasPrev && styles.disabled}`}
      >
        <i className='icon-arrow-right' />
        <span>&nbsp;Prev</span>
      </InternalLinkButton>

      <InternalLinkButton
        variant='primary'
        href={`${baseUrl}/${pageNumber + 1}`}
        rel='next'
        title='Next'
        className={`${styles.right} ${!hasNext && styles.disabled}`}
      >
        <span>Next&nbsp;</span>
        <i className='icon-arrow-right' />
      </InternalLinkButton>
    </div>
  );
}
