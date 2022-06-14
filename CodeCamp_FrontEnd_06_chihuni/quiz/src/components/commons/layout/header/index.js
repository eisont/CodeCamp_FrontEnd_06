import styled from '@emotion/styled';
// import React, { Component } from "react";
import Slider from 'react-slick';
// import { baseUrl } from "./config";

export default function LayoutHeader() {
  const Wrapper = styled.div`
    height: 30vh;
    // background: skyblue;
  `;
  const AAA = styled(Slider)``;
  const DogImg = styled.img`
    margin: 0 auto;
    height: 30vh;
  `;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <AAA {...settings}>
        <div>
          <DogImg src='https://ogq-sticker-global-cdn-z01.afreecatv.com/sticker/16f23ab61b41ea6/17.png' />
        </div>
        <div>
          <DogImg src='https://item.kakaocdn.net/do/4cb6137f62fae4d0a81f079dcdecb55f8f324a0b9c48f77dbce3a43bd11ce785' />
        </div>
        <div>
          <DogImg src='https://item.kakaocdn.net/do/db942e086491ef04167bc5b2f5d086d6f43ad912ad8dd55b04db6a64cddaf76d' />
        </div>
        <div>
          <DogImg src='https://item.kakaocdn.net/do/46a396d66a435ff4417cc497961b6cb6960f4ab09fe6e38bae8c63030c9b37f9' />
        </div>
        <div>
          <DogImg src='https://ogq-sticker-global-cdn-z01.afreecatv.com/sticker/170bcf50b750020/main.png' />
        </div>
        <div>
          <DogImg src='https://item.kakaocdn.net/do/c2aaca7f5d4831890f44f7fbb00845fd82f3bd8c9735553d03f6f982e10ebe70' />
        </div>
      </AAA>
    </Wrapper>
  );
}
