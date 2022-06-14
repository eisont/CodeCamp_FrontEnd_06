import styled from '@emotion/styled';
import { ISubmitButtonsProps } from './boardWrite.types';

export const Wrapper = styled.div`
  width: 100%;
  // background: #fff;
  display: flex;
  flex-direction: column;
`;
export const Box = styled.div`
  background: #fff;
  border-radius: 10px;
`;
export const Title = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 3vh 0;
  font-size: 3vh;
  font-weight: bold;
  border-bottom: 2px solid #6400ff;
`;

export const InputWrapper = styled.div`
  width: 95%;
  margin: 3vh auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Subject = styled.input`
  width: 80%;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  &:focus {
    outline: 1px solid #6400ff;
  }
`;

export const Contents = styled.textarea`
  width: 80%;
  height: 200px;
  padding-left: 16px;
  padding: 14px;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  &:focus {
    outline: 1px solid #6400ff;
  }
`;

export const ImageWrapper = styled.div`
  width: 95%;
  margin: 3vh auto;
  display: flex;
  align-items: center;
`;
export const ImageTitle = styled.div`
  width: 12%;
  font-weight: 900;
  font-size: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
  color: #fff;
  background: #999;
  font-weight: 700;
  border-radius: 50px;

  background-color: ${(props: ISubmitButtonsProps) => (props.isActive ? '#6400ff' : 'none')};
`;

export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

export const Writer = styled.input`
  width: 400px;
  height: 40px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  &:focus {
    outline: 1px solid #6400ff;
  }
`;

export const Password = styled.input`
  width: 400px;
  height: 40px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  &:focus {
    outline: 1px solid #6400ff;
  }
`;

export const Label = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;
