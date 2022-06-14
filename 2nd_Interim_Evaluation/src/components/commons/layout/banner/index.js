// 베너 페이지

import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import LoginUserbar from '../loginuserbar';


const Wrapper = styled.div`
  width: 100%;
  height: 157px;
  background: #fff;
  
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
`;
const RBox = styled.img`
  font-size: 30px;
  font-weight: 900;
`;
const LBox = styled.div`
  display: flex;
  algin-items: center;
`;
const Img = styled.img`
  width: 30px;
  margin-right: 10px;
`;
const SellBt = styled.div`
  font-size: 24px;
  font-weight: 900;
  cursor: pointer;
`;


export default function LayoutBanner() {
  const router = useRouter()

  const onClickMain = () =>{
    router.push("/")
  }

  const onClickSell = ()=> {
    router.push("/markets/new")
  }

  return (
    <Wrapper>
        <RBox onClick={onClickMain} src="/image/blacklogo.png"></RBox>
        <LoginUserbar />
        <LBox>
          <Img src="/image/sell.png"/><SellBt onClick={onClickSell}>판매하기</SellBt>
        </LBox>
    </Wrapper>
  );
}
