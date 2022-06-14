import { useQuery, gql } from '@apollo/client';
import styled from '@emotion/styled';
import InfiniteScroll from 'react-infinite-scroller';

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
      boardAddress {
        zipcode
        address
        addressDetail
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

const Wrapper = styled.div`
  // background: lightgray;
`;
const MyRow = styled.div`
  display: flex;
`;
const MyColumn = styled.div`
  font-size: 2.5vh;
  width: 33%;
  text-align: center;
  border-bottom: 1px solid lightgray;
`;

export default function MapBoardPage() {
  const { data, fetchMore } = useQuery(FETCH_BOARDS);
  console.log(data);

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards) return { fetchBoards: [...prev.fetchBoards] };
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <Wrapper style={{ height: '700px', overflow: 'auto' }}>
      <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true} useWindow={false}>
        {data?.fetchBoards.map((el) => (
          <MyRow key={el._id}>
            <MyColumn>{el.writer}</MyColumn>
            <MyColumn>{el.title}</MyColumn>
            <MyColumn>{el.contents}</MyColumn>
          </MyRow>
        )) || <div></div>}
      </InfiniteScroll>
    </Wrapper>
  );
}
