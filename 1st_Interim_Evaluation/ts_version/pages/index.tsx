import styled from '@emotion/styled';
import { useRouter } from 'next/router';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background: skyblue;
  // transform: translate(-200px)

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Click = styled.p`
  cursor: pointer;
  height: 10vh;
  color: #fff;
  font-size: 10vh;
  font-weight: 900;
`;
export default function Home() {
  const router = useRouter();
  const aaa = () => {
    router.push('../boards');
  };

  return (
    <Wrapper>
      <Click onClick={aaa}>test</Click>
    </Wrapper>
  );
}
