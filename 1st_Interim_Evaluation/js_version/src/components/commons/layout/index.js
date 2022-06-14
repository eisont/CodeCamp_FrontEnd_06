import styled from '@emotion/styled';
import LayoutHeader from './header';
import LayoutBanner from './banner';
import { useRouter } from 'next/router';

const Wrapper = styled.div`
  width: 100%;
  padding: 3vh;
  background: #e5e5e5;
  display: flex;
  justify-content: flex-start;
`;
const RightBox = styled.div`
  width: 83%;
  transform: translate(20%);
`;
const Body = styled.div``;

export default function Layout(props) {
  const router = useRouter();
  console.log(router.query);
  const HIDDEN_HEADERS_2 = [`/boards/${router.query.boardId}/delete`];
  const HIDDEN_HEADERS_3 = ['/boards/new'];
  const HIDDEN_HEADERS_4 = [`/boards/${router.query.boardId}/edit`];
  const isHidden2 = HIDDEN_HEADERS_2.includes(router.asPath);
  const isHidden3 = HIDDEN_HEADERS_3.includes(router.asPath);
  const isHidden4 = HIDDEN_HEADERS_4.includes(router.asPath);
  return (
    <Wrapper>
      <LayoutHeader />
      <RightBox>
        {!isHidden2 && !isHidden3 && !isHidden4 && <LayoutBanner />}
        <Body>{props.children}</Body>
      </RightBox>
    </Wrapper>
  );
}
