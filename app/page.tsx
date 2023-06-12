import { getList } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Pagination from '@/components/Pagination';
import ArticleList from '@/components/ArticleList';
import Link from 'next/link';

export const revalidate = 0;

export default async function Page() {
  const data = await getList({
    limit: LIMIT,
  });
  return (
    <>
      <p>本サイトはmicroCMSテンプレートで作成したサンプルです。</p>
      <Link href="https://times.girataro.com">オリジナル版はこちら</Link>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} />
    </>
  );
}
