// 상세보기 container
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import BoardDetailUI from './BoardDetail.presenter';
import { FETCH_BOARD } from './BoardDetail.queries';

export default function BoardDetail() {
  const router = useRouter();
  // 조회
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  console.log(data);

  // 목록으로 버튼
  const onClickMoveToBoardList = () => {
    router.push('/boards');
  };
  // 수정하기로 버튼
  const onClickMoveToBoardEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };
  // 삭제 버튼
  const onClickDelete = async () => {
    router.push(`/boards/${router.query.boardId}/delete`);
  };

  return (
    <BoardDetailUI
      // 게시판의 정보를 담은 객체 data
      data={data}
      // 목록으로 버튼
      onClickMoveToBoardList={onClickMoveToBoardList}
      // 수정하기로 버튼
      onClickMoveToBoardEdit={onClickMoveToBoardEdit}
      // 삭제 버튼
      onClickDelete={onClickDelete}
    />
  );
}
