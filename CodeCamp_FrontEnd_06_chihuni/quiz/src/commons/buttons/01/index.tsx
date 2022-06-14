import styled from '@emotion/styled';

interface IProps {
  isActive: boolean;
}

const CreateBt = styled.button`
  background-color: ${(props: IProps) => (props.isActive ? 'yellow' : '')};
`;

export default function Button01(props) {
  return <CreateBt isActive={props.isActive}>{props.title}</CreateBt>;
}
