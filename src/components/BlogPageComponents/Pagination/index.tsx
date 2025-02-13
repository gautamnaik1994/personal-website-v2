import Link from 'next/link';
import { postsPerPage } from '@/service/blog';

export default function Pagination({
  baseUrl,
  pageNumber,
  total,
}: {
  baseUrl: string;
  pageNumber: number;
  total: number;
}) {
  return (
    <div>
      {pageNumber !== 1 && (
        <>
          <Link href={`${baseUrl}/${pageNumber - 1}`} rel='prev'>
            Previous
          </Link>{' '}
        </>
      )}
      {postsPerPage * pageNumber < total && (
        <Link href={`${baseUrl}/${pageNumber + 1}`} rel='next'>
          Next
        </Link>
      )}
    </div>
  );
}
