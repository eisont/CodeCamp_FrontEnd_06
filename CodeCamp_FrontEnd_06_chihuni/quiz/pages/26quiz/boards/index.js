// 1. /pages/quiz06/boards/index.tsx 페이지를 만들고 fetchBoards 게시물 목록을 불러와 주세요. ok
// 2. 각 행의 오른쪽 마지막 부분에 [ 게시물담기 ] 버튼을 만들어 주세요.ok
// 3. [ 게시물담기 ] 버튼이 눌린 데이터를 로컬스토리지에 객체 형태로 저장해 보세요. ok
// ⇒ 또한, [ 게시물담기 ] 버튼을 [ 담기취소 ] 버튼으로 변경해 주세요.
// 4. [ 담기취소 ] 버튼이 눌린 데이터를 로컬스토리지에서 제외해 보세요. ok
// 5. /pages/quiz06/main/index.tsx 페이지를 만들고 로그인 화면을 만들어 주세요.
// 6. 로그인 완료시, 로컬스토리지에 게시물 장바구니 데이터가 있으면 "비회원으로 담긴 게시물 장바구니가 존재합니다. 이동하시겠습니까?" 라는 메시지를 띄워주세요.
// 7. [ 이동하기 ] 버튼을 누르면 /pages/quiz06/basket/index.tsx로 이동해 주세요.
// 8. 이동된 페이지에서 로컬스토리지에 저장된 데이터를 목록 형태로 화면에 나타내 보세요.

import { gql, useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { getDate } from '../../../src/commons/libraries/utils';

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
export default function BoardPage() {
  const [state, setState] = useState(false);
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data);

  const onClickSaveLocal = (el) => () => {
    // 기존 장바구니 가져오기
    const baskets = JSON.parse(localStorage.getItem('baskets') || '[]');
    // 중복되는 상품 확인하기
    const temp = baskets.filter((basketEl) => basketEl._id === el._id);
    if (temp.length === 1) {
      alert('이미 담으신 물품입니다.');
      return;
    }
    // 장바구니에 담기
    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    localStorage.setItem('baskets', JSON.stringify(baskets));
  };
  const onClickDeleteLocal = (el) => () => {
    // 기존 장바구니 가져오기
    const baskets = JSON.parse(localStorage.getItem('baskets') || '[]');
    // 중복되는 상품 확인하기
    const temp = baskets.filter((basketEl) => basketEl._id === el._id);
    if (temp.length === 1) {
      localStorage.removeItem('baskets', ' _id');
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
          <div key={el._id}>
            <span>{el.writer}</span>
            <span>{el.title}</span>
            <button onClick={onClickSaveLocal(el)}>게시물담기</button>
            <button onClick={onClickDeleteLocal(el)}>담기취소</button>
          </div>
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
