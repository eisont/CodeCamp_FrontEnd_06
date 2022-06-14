// 오늘 본 상품 보여주기

// 1. /pages/quiz06/today/index.tsx 페이지를 만들고 fetchBoards 게시물 목록을 불러와 주세요. ok
// 2. 각 행을 클릭하면 클릭된 데이터를 로컬 스토리지에 저장해 보세요.
// ⇒ 단, 클릭된 날짜와 시간을 "YYYY-MM-DD" 형태의 키로 저장해야 합니다.
// 3. 로컬 스토리지에 저장된 데이터 중, 오늘 날짜에 해당하는 데이터만 뽑아서 페이지 우측에 나타내 보세요.

import { gql, useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { getDate } from '../../src/commons/libraries/utils';

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
`;
const LeftWrapper = styled.div`
  width: 50%;
`;
const RightWrapper = styled.div`
  width: 50%;
`;
const Button = styled.div`
  cursor: pointer;
`;

export default function BasketPage() {
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data);

  const onClickBasket = (el) => () => {
    console.log(el);

    // 1. 기존 장바구니 가져오기
    const baskets = JSON.parse(localStorage.getItem('baskets') || '[]');

    // 2. 이미 담겼는지 확인하기
    const temp = baskets.filter((basketEl) => basketEl._id === el._id);

    // 3. 장바구니에 담기
    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    localStorage.setItem('baskets', JSON.stringify(baskets));

    localStorage.setItem('aaa', JSON.stringify({}));

    // 담은 경우
    if (temp.length === 1) {
      alert('이미 담으신 물품입니다.');
      return;
    }
  };

  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem('baskets') || '[]');
    setBasketItems(baskets);
  }, []);

  return (
    <Wrapper>
      <LeftWrapper>
        {data?.fetchBoards.map((el) => (
          <Button onClick={onClickBasket(el)} key={el._id}>
            <span>{el.writer}</span>
            <span>{el.title}</span>
            <span>{el.contents}</span>
            {/* <button>장바구니 담기</button> */}
            {/* <span>{getDate(el.createdAt)}</span> */}
          </Button>
        ))}
      </LeftWrapper>
      <RightWrapper>
        {basketItems.map((el) => (
          <div key={el._id}>{getDate(el.createdAt)}</div>
        ))}
      </RightWrapper>
    </Wrapper>
  );
}
