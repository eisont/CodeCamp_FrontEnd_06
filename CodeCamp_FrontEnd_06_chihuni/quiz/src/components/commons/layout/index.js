import styled from '@emotion/styled';
import LayoutHeader from './header';
import LayoutBanner from './banner';
import LayoutNavigation from './navigation';
import LayoutFooter from './footer';

const Wrapper = styled.div`
  // position: fixed;
  width: 100%;
  // height: 100vh;
  overflow: hidden;
`;

const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const Section = styled.div`
  width: 80%;
  // height: 40vh;
  overflow: hidden;
`;

const LayoutSidebar = styled.div`
  width: 20%;
  height: 40vh;
  font-size: 3vh;
  background: orange;
`;

export default function Layout(props) {
  return (
    <Wrapper>
      {/* 페이지네이션 */}
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <BodyWrapper>
        {/* Slider 부분 */}
        <LayoutSidebar>Slider</LayoutSidebar>
        <Section>{props.children}</Section>
      </BodyWrapper>
      <LayoutFooter />
    </Wrapper>
  );
}
