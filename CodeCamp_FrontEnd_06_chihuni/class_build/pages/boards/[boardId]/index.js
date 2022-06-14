import { useRouter } from 'next/router';
import Head from 'next/head';
import { gql, request } from 'graphql-request';

export default function BoardsDetailPage(props) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta property='og:title' content={props.myboardData?.title} />
        <meta property='og:description' content={props.myboardData?.contents} />
        <meta property='og:image' content={props.myboardData?.images[0]} />
      </Head>

      <div>안녕하세요! 게시글 상세페이지 입니다!!! 게시글 ID는 {router.query.boardId}입니다.</div>
    </>
  );
}

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      title
      contents
      images
    }
  }
`;

// 이건 페이지에서만 사용가능합니다. 이게 있는 페이지만 ssr 입니다.
// 이 페이지는 서버사이드 렌더링 할래!!!
// () 안에 context를 받을 수 있습니다. header 부분에 정보가 담겨 있습니다?
export const getServerSideProps = async (context) => {
  // 데이터를 요청할 것
  // "" === endpoint
  // const {data} = useQuery(FETCH_BOARD) == 이건 안됨
  const result = await request('https://project08.site/graphql', FETCH_BOARD, { boardId: context.query.boardId });

  // const {data} = useQuery (FETCH_BOARD); //  useQuery를 사용하기 위해서는 apollo 세팅이 되야 합니다.

  return {
    props: {
      // fetchBoard 안에 데이터를 꺼내서 저장을 합니다.
      myboardData: {
        titie: result.fetchBoard.title,
        contents: result.fetchBoard.contents,
        images: result.fetchBoard.images,
      },
    },
  };
};
