// 1. fetchBoard API를 사용해 데이터를 불러오고, 좋아요 버튼을 만들어서 좋아요가 올라가도록 구현해 주세요.
// (좋아요 버튼을 누르면 fetchBoard를 refetch 합니다.)
// 2. 좋아요 버튼을 누를 때, 3G로 속도를 낮춰서 저사양 컴퓨터에서 성능을 확인해 보세요.
// 3. refetch를 삭제하고, optimistic-ui를 사용하여 좋아요 숫자를 올려주세요.
// 4. 다시 한 번 3G로 속도를 낮춰서 저사양 컴퓨터에서 성능을 확인해 보세요.

import { gql, useMutation, useQuery } from '@apollo/client';

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OtimisticUI() {
  //  query로 불러온 LIKE_BOARD를 likeBoard에 담아줍니다.
  const [likeBoard] = useMutation(LIKE_BOARD);

  // FETCH_BOARD 중 특정 하나를 가지고 옵니다.
  const { data } = useQuery(FETCH_BOARD, { variables: { boardId: '6269ed43a8255b002988d65f' } });
  console.log(data);

  const onClicklike1 = () => {
    // query를 담은 likeBoard 를 사용합니다.
    likeBoard({
      variables: { boardId: '6269ed43a8255b002988d65f' },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: '6269ed43a8255b002988d65f' },
        },
      ],
    });
  };
  const onClicklike2 = () => {
    likeBoard({
      variables: { boardId: '6269ed43a8255b002988d65f' },
      optimisticResponse: { likeBoard: (data?.fetchBoard.likeCount || 0) + 1 },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: '6269ed43a8255b002988d65f' },
          data: {
            fetchBoard: {
              _id: '6269ed43a8255b002988d65f',
              __typename: 'Board',
              likeCount: data.likeBoard,
            },
          },
        });
      },
    });
  };

  return (
    <>
      <div>좋아요 수: {data?.fetchBoard.likeCount}</div>
      <button onClick={onClicklike1}>refetchQueries 👍!!!</button>
      <button onClick={onClicklike2}>optimisticResponse 👍!!!</button>
    </>
  );
}
