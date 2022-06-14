import styled from '@emotion/styled';

const Input = styled.input``;

export default function Input01(props) {
  return <Input type={props.type} {...props.register} />;
}
