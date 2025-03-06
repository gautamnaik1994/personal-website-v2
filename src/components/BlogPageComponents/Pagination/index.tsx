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

  const previousPageUrl =
    pageNumber - 1 == 1
      ? `${baseUrl.replace('/page', '')}`
      : `${baseUrl}/${pageNumber - 1}`;

  // const previousPageUrl = altBaseUrl
  //   ? `${baseUrl}/${pageNumber - 1}`
  //   : `${baseUrl}/${pageNumber - 1}`;

  return (
    <div className={styles.PaginationWrapper}>
      {hasPrev ? (
        <InternalLinkButton
          variant='primary'
          href={previousPageUrl}
          rel='prev'
          title='Previous'
          className={`${styles.left}`}
        >
          <i className='icon-arrow-right' />
          <span>&nbsp;Prev</span>
        </InternalLinkButton>
      ) : (
        <div></div>
      )}

      {hasNext ? (
        <InternalLinkButton
          variant='primary'
          href={`${baseUrl}/${pageNumber + 1}`}
          rel='next'
          title='Next'
          className={`${styles.right}`}
        >
          <span>Next&nbsp;</span>
          <i className='icon-arrow-right' />
        </InternalLinkButton>
      ) : (
        <div></div>
      )}
    </div>
  );
}
