// 상세보기 container
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';
import BoardDetailUI from './BoardDelete.presenter';
import { Modal } from 'antd';
import {
  DELETE_BOARD,
  FETCH_BOARD,
  // CREATE_BOARD_COMMENT,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from './BoardDelete.queries';

export default function BoardDelete() {
  const router = useRouter();
  // console.log(router);
  // 조회
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  console.log(data);
  // 삭제
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onChangePassword = () => {};

  // 목록으로 버튼
  const onClickMoveToBoardList = () => {
    router.push('/boards');
  };
  // 삭제 버튼
  const onClickDelete = async () => {
    try {
      await deleteBoard({
        variables: { boardId: router.query.boardId },
      });
      // console.log(result);
      Modal.success({ content: '게시물이 삭제되었습니다.' });
      router.push('/boards');
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <BoardDetailUI
      // 게시판의 정보를 담은 객체 data
      data={data}
      // 비밀번호 입력
      onChangePassword={onChangePassword}
      // 삭제 버튼
      onClickDelete={onClickDelete}
      // 취소 버튼
      onClickMoveToBoardList={onClickMoveToBoardList}
    />
  );
}
