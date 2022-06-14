import styled from "@emotion/styled";
export const TopTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
`;
export const Wrapper = styled.div`
  width: 500px;
  margin: 100px auto;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 700;
  background-color: lightgray;
  text-align: center;
  height: 30px;
`;
export const TitleLabel = styled.div`
  width: 300px;
`;
export const WriterLabel = styled.div`
  width: 100px;
`;
export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid lightgray;
  height: 30px;
`;
export const Title = styled.div`
  width: 300px;
`;
export const Writer = styled.div`
  width: 100px;
`;
interface IProps {
  isAdded: boolean;
}
export const Button = styled.button`
  width: 100px;
  background-color: ${(props: IProps) =>
    props.isAdded ? "gray" : "lightgray"};
`;
