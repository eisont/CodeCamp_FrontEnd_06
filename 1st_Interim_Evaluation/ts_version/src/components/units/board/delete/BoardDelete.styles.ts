import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  // background: #ff0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Box = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 15px;
`;
export const Header = styled.div`
  width: 95%;
  margin: 0 auto;
  border-bottom: 2px solid #6400ff;
`;
export const SectionText = styled.div`
  font-weight: 900;
  font-size: 36px;
`;
export const InputBox = styled.div`
  width: 100%;
  text-align: center;
  padding: 210px;
`;
export const MenuButtons = styled.div`
  display: flex;
`;
export const PasswordInput = styled.input`
  margin: 0 2vh;
  padding: 0 2vh;
  width: 300px;
  height: 5vh;
  border-radius: 15px;
  &: focus {
    outline: 2px solid #6400ff;
  }
`;
export const Button = styled.button`
  width: 180px;
  height: 45px;
  margin: 87px 12px;
  font-size: 16px;
  font-weight: 700;
  border: 1px solid #bdbdbd;
  color: #fff;
  background: #999;
  border-radius: 50px;
  &:hover {
    background-color: #6400ff;
  }
`;
