// 3. 이동된 페이지에서 가격을 선택할 수 있는 선택상자와 [ 충전하기 ] 버튼을 만들어 주세요.
// ⇒ 가격은 500원, 1000원, 2000원, 5000원을 선택 가능합니다.
// 4. 가격을 선택하고 [ 충전하기 ] 버튼을 누르면, 해당 금액으로 아임포트 결제화면을 띄워주세요.
// 5. 실제 결제가 완료되면, /pages/quiz06/payment/complete/index.tsx 페이지로 이동해 주세요.

// import Head from 'next/head';
import { useState } from 'react';
import Script from 'next/script';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import { useRecoilState } from 'recoil';
import { useAmount } from '../../../../src/commons/store';

const Input = styled.input`
  width: 600px;
`;
const Price = styled.div`
  font-weight: 700;
  font-size: 30px;
`;

// imp 타입 지정하기
declare const window: typeof globalThis & {
  IMP: any;
};

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;
export default function PaymentLoadingPage() {
  const router = useRouter();

  const [amount, setAmount] = useRecoilState(useAmount);

  const requestPay = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init('imp48430943'); // 예: imp00000000
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: 'html5_inicis',
        pay_method: 'card',
        merchant_uid: 'ORD20180131-0000011',
        name: '노르웨이 회전 의자',
        amount: amount,
        buyer_email: 'gildong@gmail.com',
        buyer_name: '홍길동',
        buyer_tel: '010-4242-4242',
        buyer_addr: '서울특별시 강남구 신사동',
        buyer_postcode: '01181',
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          console.log(rsp);
          // 결제 성공 시 로직
        } else {
          console.log(rsp);
          router.push('../payment/complete');
          // 결제 실패 시 로직
          alert('결제 실패, 다시 하랏!!!');
        }
      }
    );
  };

  const onChangePrice = (event) => {
    const point = event.target.value;
    setAmount(point);
    // console.log(point);
  };

  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  console.log(data);

  return (
    <>
      {/* <Head> */}
      {/*  jQuery */}
      <Script type='text/javascript' src='https://code.jquery.com/jquery-1.12.4.min.js'></Script>
      {/*  iamport.payment.js  */}
      <Script type='text/javascript' src='https://cdn.iamport.kr/js/iamport.payment-1.2.0.js'></Script>
      {/* </Head> */}
      {/* <input type='numner' onChange={onChangePrice} placeholder='얼마 충전 계획?' /> */}
      {data?.fetchUserLoggedIn.name}님 {amount}원 충전 계획?
      <br />
      <Input type='range' onChange={onChangePrice} id='price' step='500' min='0' max='5000' />
      <Price>{amount}원</Price>
      <button onClick={requestPay}>충전하기</button>
    </>
  );
}
