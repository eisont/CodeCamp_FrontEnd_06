import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  width: 100%;
  padding: 0 20%;
  border-bottom: 1px solid #bdbdbd;
  height: 6vh;
  background: #fff;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const PageBt = styled.div`
  font-size: 2vh;
  font-weight: 700;
  cursor: pointer;
`;

export default function LayoutNavigation() {
  const router = useRouter();

  const onClickBoardNew = () => {
    router.push("/boards/new");
  };
  const onClickBoard = () => {
    router.push("/boards");
  };
  const onClickMarket = () => {};
  const onClickMypage = () => {
    router.push("/boards/mypage");
  };

  return (
    <Wrapper>
      <>
        <PageBt onClick={onClickBoard}>BoardList</PageBt>
        <PageBt onClick={onClickBoardNew}>FreeBoard</PageBt>
        <PageBt onClick={onClickMarket}>Used Market</PageBt>
        <PageBt onClick={onClickMypage}>My-Page</PageBt>
      </>
    </Wrapper>
  );
}
