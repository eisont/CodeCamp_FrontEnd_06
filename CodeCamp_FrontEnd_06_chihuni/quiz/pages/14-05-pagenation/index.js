import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

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
const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;
const Pagenation = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
`;
const Sspan = styled.button`
  font-weight: 700;
  color: ${(props) => (props.changeColor === props.id ? "yellow" : "#000")};
`;
const SSspan = styled.button`
  padding: 10px 30px;
  font-weight: 700;
  color: #000;
`;
const MyRow = styled.div`
  width: 100%;
  display: flex;
`;
const MyColumn = styled.div`
  width: 50%;
  height: 4vh;
  font-size: 2vh;
  border: 2px solid #fff;
  display: flex;
  justify-content: space-around;
  background: skyblue;
  &: hover {
    border: 2px solid #000;
  }
`;

export default function LiftingStateUpPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const [startPage, setStartPage] = useState(1);
  const [active, setAtctive] = useState("")
  const [aactive, setAatctive] = useState("")
  const [current, setCurrent] = useState(1)
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) });
    setAtctive(event.target.id)
    console.log(active)
    setCurrent(Number(event.target.id))
  };

// 이전 페이지 버튼
  const onClickPrevPage = (event) => {
    if (startPage === 1) return;
    setAatctive(event.target)
    console.log(aactive)
    setStartPage((prev) => prev - 10);
    refetch({ page: startPage - 10 });
  };
  // 다음 페이지 버튼
  const onClickNextPage = () => {
    if (!(startPage + 10 <= lastPage)) return;
    setStartPage((prev) => prev + 10);
    refetch({ page: startPage + 10 });
  };

  return (
    <Wrapper>
      <Pagenation>
        <SSspan onClick={onClickPrevPage} disabled={startPage===1 && true} >⬅</SSspan>
        {new Array(10).fill(1).map((_, index) =>
        index + startPage <= lastPage && (
        <Sspan
          key={index + startPage}
          onClick={onClickPage}
          id={index + startPage}
          // current ={startPage+index === active}
          changeColor ={current}
        >
          {index + startPage}
        </Sspan>
      ))}
        <SSspan onClick={onClickNextPage} 
        disabled={startPage+10>lastPage ? true:false }
        >➡</SSspan>
      </Pagenation>
      {data?.fetchBoards.map((el) => (
      <MyRow key={el._id}> 
      <MyColumn> {el.writer} </MyColumn> 
      <MyColumn> {el.title} </MyColumn> 
      </MyRow> 
      ))}
    </Wrapper>
  );
}