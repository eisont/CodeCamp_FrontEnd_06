// 목록 페이지
import BoardListUI from './BoardList.presenter';
import { useQuery } from '@apollo/client';
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from './BoardList.queries';
import { useRouter } from 'next/router';

export default function BoardList() {
  const router = useRouter();

  const { data, refetch, fetchMore } = useQuery(FETCH_BOARDS);
  console.log(data);
  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery(FETCH_BOARDS_COUNT);

  const onClickMoveToBoardNew = () => {
    router.push('/boards/new');
  };
  const onClickMoveToBoardDetail = (event) => {
    router.push(`/boards/${event.target.id}`);
  };

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        // 받아올 데이터가 없을 경우 return(기존 데이터 보여줘)
        if (!fetchMoreResult?.fetchBoards) return { fetchBoardComments: [...prev.fetchBoards] };
        return {
          fetchBoards: [
            // 이전 뎃글 보여줘
            ...prev.fetchBoards,
            // 다음 댓글 보여줘
            ...fetchMoreResult.fetchBoards,
          ],
        };
      },
    });
  };

  return (
    <BoardListUI
      data={data}
      onLoadMore={onLoadMore}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      refetch={refetch}
      refetchBoardsCount={refetchBoardsCount}
    />
  );
}
