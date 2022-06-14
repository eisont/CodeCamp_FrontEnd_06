// 1. Playground를 참고하여, 게시글 목록(fetchBoards) API를 요청해 주세요.


// 2. 위에서 요청한 게시글 목록 데이터를 화면에 간단한 표 형태로 출력해 주세요.
// ⇒ 힌트) map을 활용해 보세요.

// 3. 표 하단에 page를 10개 나열해 보세요.
// ⇒ 힌트) 10개의 임의 배열을 만든 후, map을 활용해 보세요.

// 1. 해당 page를 클릭하면, page에 맞는 데이터를 불러오도록 만들어 보세요.

// 1. 현재 클릭된 page의 버튼 색을 변경해 보세요.

// 1. 페이지 번호에 이전("<") 버튼과 다음(">") 버튼을 만들고, 이전을 클릭하면 10개 이전 페이지로, 다음을 클릭하면 10개 이후의 페이지로 이동해 보세요. 
// 물론, 페이지 이동시 해당 페이지에 맞는 데이터를 불러와야 합니다.

// 1. 페이지 10개 중, 마지막 페이지가 77 페이지라면, 나머지 78 79 80 페이지는 화면에 보이지 않도록 만들어 주세요.

// 1. 이전("<") 버튼과 다음(">") 버튼을 클릭했을 때 더이상 이동할 수 있는 페이지가 없다면 무시하도록 만들어 주세요. 추가로, 버튼에 비활성화 표시를 적용해 주세요.
// 힌트) Emotion에 props로 isActive를 전달합니다.

import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int){
    fetchBoards(page: $page){
      _id
      writer
      title
      contents
    }
  }
`
const MyRow = styled.div`
  width: 2000px;
  display: flex;

  background: red;
`;
const MyColumn = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  background: skyblue;
`;
const Pagenation = styled.div`
  display: flex;
  justify-content: space-around;
  background: green;
`;
const Sspan = styled.div`
  &: hover {
    color: #fff;
  }
`;

export default function LiftingStateUpPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) });
  };



  return (
    <>
    {data?.fetchBoards.map((el) => (
      <MyRow key={el._id}>
        <MyColumn>{el.writer}</MyColumn>
        <MyColumn>{el.title}</MyColumn>
      </MyRow>
    ))}
    <Pagenation>
      {new Array(10).fill(1).map((_, index) => (
        <Sspan key={index + 1} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </Sspan>  
      ))}
    </Pagenation>
    </>
  );
}
