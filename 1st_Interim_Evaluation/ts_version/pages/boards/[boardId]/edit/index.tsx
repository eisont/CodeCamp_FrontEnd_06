// 수정페이지
import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import BoardWrite from '../../../../src/components/units/board/write/BoardWrite.container';

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      images
      createdAt
    }
  }
`;

export default function BoardsEditPage() {
  // 기능
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  console.log(data);

  return <BoardWrite isEdit={true} data={data} />;
}
