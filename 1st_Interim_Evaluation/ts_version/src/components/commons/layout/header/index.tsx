import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { CommentOutlined, MenuOutlined, MessageOutlined } from '@ant-design/icons';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 15%;
  height: 90vh;
  position: fixed;
  background: green;
  font-family: 'nomal';
  background: #fff;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 15px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: start;
`;
const Home = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  &:hover {
    color: #6400ff;
  }
`;
const HomeIcon = styled(CommentOutlined)`
  color: #999;
  font-size: 4vh;
  color: #6400ff;
  transition: 0.5s;
  &: hover {
    transform: rotate(1turn);
  }
`;
const HomeBt = styled.div`
  margin-left: 5px;
  font-size: 3vh;
  font-weight: 900;
  cursor: pointer;
`;
const Hr = styled.div`
  width: 100%;
  border-bottom: 1px solid #999;
`;
const TotalTextIcon = styled(MenuOutlined)`
  color: #6400ff;
`;
const NewContent = styled(MessageOutlined)`
  color: #6400ff;
`;
const Box1 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    color: #6400ff;
    border-bottom: 1px solid #6400ff;
  }
`;
const Box2 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    color: #6400ff;
    border-bottom: 1px solid #6400ff;
  }
`;
const Login = styled.div`
  margin-left: 5px;
  font-size: 2vh;
  font-weight: 700;
`;

export default function LayoutHeader() {
  const router = useRouter();

  const onClickHome = () => {
    router.push('../');
  };
  const onClickLogin = () => {
    router.push('../boards/');
  };
  const onClickJoin = () => {
    router.push('../boards/new');
  };

  return (
    <Wrapper>
      <Home>
        <HomeIcon />
        <HomeBt onClick={onClickHome}>TALKR</HomeBt>
      </Home>
      <Hr></Hr>
      <Box1>
        <TotalTextIcon />
        <Login onClick={onClickLogin}>전체 글 보기</Login>
      </Box1>
      <Box2>
        <NewContent />
        <Login onClick={onClickJoin}>새글 작성</Login>
      </Box2>
    </Wrapper>
  );
}
