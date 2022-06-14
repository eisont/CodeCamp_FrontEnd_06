import styled from '@emotion/styled';
import Slider from 'react-slick';

import { RestOutlined, SmileOutlined, TrophyOutlined } from '@ant-design/icons';
// import { baseUrl } from "./config";

export default function LayoutBanner() {
  const Wrapper = styled.div`
    width: 100%;
    padding: 0;
    margin: 0;
    height: 30vh;
    overflow: hidden;
    background: #6400ff;
    border-radius: 15px;

    display: flex;
    justify-content: center;
  `;
  const Slick = styled(Slider)`
    width: 60%;
    height: 100%;
    color: #fff;
    line-height: 30vh;
    text-align: center;

    margin: 0 auto;
  `;
  const Ttext = styled.div`
    margin: 0 auto;
    height: 50vh;
    font-size: 10vh;
  `;
  const settings = {
    // 리스트 모양 보여주기
    dots: false,
    // 무제한으로 돌릴꺼야?
    infinite: true,
    // 넘어가는 속도
    speed: 1000,
    // 사진 몇개 보여줄꺼야?
    slidesToShow: 1,
    // 몇 개씩 넘길꺼야?
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 0o0,
    // cssEase: 'ease',
  };

  return (
    <Wrapper>
      <Slick {...settings}>
        <Ttext>
          Corousel
          <RestOutlined />
        </Ttext>
        <Ttext>
          Corousel
          <SmileOutlined />
        </Ttext>
        <Ttext>
          Corousel
          <TrophyOutlined />
        </Ttext>
      </Slick>
    </Wrapper>
  );
}
