import * as S from "./Headerstyles";
import Script from "next/script";
import LoginUserbar from "../loginuserbar";

export default function LayoutHeaderUI(props: any) {
  return (
    <>
      <Script
        type="text/javascript"
        src="https://code.jquery.com/jquery-1.12.4.min.js"
      ></Script>
      {/* <!-- iamport.payment.js --> */}
      <Script
        type="text/javascript"
        src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
      ></Script>

      <S.Wrapper>
        <LoginUserbar />
        <S.HomeBt onClick={props.onClickHome}></S.HomeBt>
        {props.loggedIn?.fetchUserLoggedIn._id ? (
          <>
            <S.Point>
              <S.Text>
                {props.loggedIn?.fetchUserLoggedIn?.name} 님의 포인트{" "}
                <u>{props.loggedIn?.fetchUserLoggedIn?.userPoint?.amount}</u>P
              </S.Text>
            </S.Point>
            <S.Menu>
              <S.MenuBt onClick={props.onClickPoint}>충전</S.MenuBt>
            </S.Menu>
            <S.Menu>
              <S.MenuBt onClick={props.onClickLogout}>로그아웃</S.MenuBt>
            </S.Menu>
          </>
        ) : (
          <>
            <S.Menu>
              <S.MenuBt onClick={props.onClickLogin}>로그인</S.MenuBt>
            </S.Menu>
            <S.Menu>
              <S.MenuBt onClick={props.onClickJoin}>회원가입</S.MenuBt>
            </S.Menu>
          </>
        )}
        <S.MenuBasketBt>
          찜<S.BasketNum>{props.data?.fetchUseditemsCountIPicked}</S.BasketNum>
        </S.MenuBasketBt>
        <S.MenuBasketBt>
          장바구니<S.BasketNum>{props.basketCount}</S.BasketNum>
        </S.MenuBasketBt>
      </S.Wrapper>
    </>
  );
}
