// 헤더 styles

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100px;
  background: #fff;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const HomeBt = styled.div`
  background: #fff;
  background: url("https://yt3.ggpht.com/ytc/AKedOLRxuIQKDj32NILJWQ-eJoeWCCjXs7pCkevkZrlmtg=s900-c-k-c0x00ffffff-no-rj");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 10vh;
  height: 10vh;
  cursor: pointer;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: #6400ff;
    border-bottom: 1px solid #6400ff;
  }
`;
export const MenuBt = styled.div`
  margin: 0 20px;
  font-size: 14px;
  font-weight: 700;
`;
export const Point = styled.div`
  margin: 0 20px;
  font-size: 14px;
  font-weight: 700;
`;
export const Text = styled.div`
  margin: 0 20px;
  font-size: 14px;
  font-weight: 700;
  cursor: default;
`;
export const MenuBasketBt = styled.div`
  margin: 0 20px;
  font-size: 14px;
  font-weight: 700;
  display: flex;
`;
export const BasketNum = styled.div`
  margin-left: 5px;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  font-weight: 900;
  color: #f00;
  background: yellow;
  border-radius: 50%;
`;
