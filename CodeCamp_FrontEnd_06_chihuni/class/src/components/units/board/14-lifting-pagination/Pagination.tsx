import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
export default function Pagination(props) {
  const [startPage, setStartPage] = useState(1);

  const onClickPage = (event) => {
    props.refetch({ page: Number(event.target.id) });
  };

  const onClickPrevPage = () => {
    // 페이지가 1일때 이전페이지는 실행 불가
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 10 });
  };
  const onClickNextPage = () => {
    // if (startPage + 10 <= lastPage) return;
    if (!(startPage + 10 <= props.lastPage)) return;
    setStartPage((prev) => prev + 10);
    props.refetch({ page: startPage + 10 });
  };

  return (
    <>
      <span onClick={onClickPrevPage}>이전 페이지</span>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= props.lastPage && (
            <span
              key={index + startPage}
              onClick={onClickPage}
              id={String(index + startPage)}
            >
              {" "}
              {index + startPage}
            </span>
          )
      )}
      <span onClick={onClickNextPage}>다음 페이지</span>
    </>
  );
}
