/* eslint-disable @next/next/no-img-element */
// 1. 사이즈(가로: 500px, 세로: 500px)인 이미지 10개를 세로로 렌더링 하고, LazyLoad를 적용해 주세요.
// ⇒ 스크롤을 내릴 때 마다 이미지를 조금씩 다운로드 받아와야 합니다.(네트워크 탭을 켜고 확인해 주세요.)
// 2. 아래처럼 [ 이미지 보여주기 ] 버튼을 만들고, 이 버튼을 눌렀을 때 PreLoad 된 이미지를 보여주세요
// ⇒ 이미지가 나타날 때, 네트워크 탭에서 새롭게 이미지를 다운로드 받지 않아야 합니다.

import { useEffect, useRef, useState } from 'react';
import LazyLoad from 'react-lazy-load';

export default function LazyLoadPreLoadPage() {
  const [imgTag, setImgTag] = useState<HTMLImageElement>();
  const divRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = 'https://mypetlife.co.kr/9989/kakaotalk_20180720_165306472/';
    img.onload = () => {
      setImgTag(img);
    };
  });

  const onClickWatchImg = () => {
    if (imgTag) divRef.current?.appendChild(imgTag);
  };

  return (
    <>
      <button onClick={onClickWatchImg}>이미지 보여주기</button>
      <div ref={divRef}></div>
      <div>
        <div className='filler' />
        <div>1번사진</div>
        <LazyLoad height={500} offsetVertical={300}>
          <img style={{ width: 500, height: 500 }} src='http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg' alt='' />
        </LazyLoad>
        <div>2번사진</div>
        <div className='filler' />
        <LazyLoad height={500} offsetVertical={400}>
          <img style={{ width: 500, height: 500 }} src='https://interbalance.org/wp-content/uploads/2021/08/flouffy-VBkIK3qj3QE-unsplash-scaled-e1631077364762.jpg' alt='' />
        </LazyLoad>
        <div>3번사진</div>
        <div className='filler' />
        <LazyLoad height={500} offsetVertical={500}>
          <img style={{ width: 500, height: 500 }} src='https://cdn.mkhealth.co.kr/news/photo/202108/54607_56591_5215.jpg' alt='' />
        </LazyLoad>
        <div>4번사진</div>
        <div className='filler' />
        <LazyLoad height={500} offsetVertical={600}>
          <img style={{ width: 500, height: 500 }} src='https://cdnweb01.wikitree.co.kr/webdata/editor/202103/02/img_20210302105652_f4642f08.webp' alt='' />
        </LazyLoad>
        <div>5번사진</div>
        <div className='filler' />
        <LazyLoad height={500} offsetVertical={700}>
          <img style={{ width: 500, height: 500 }} src='https://tgzzmmgvheix1905536.cdn.ntruss.com/2020/09/0b71aa9aa67c4a1092e26afed3175b66' alt='' />
        </LazyLoad>
        <div>6번사진</div>
        <div className='filler' />
        <LazyLoad height={500} offsetVertical={800}>
          <img style={{ width: 500, height: 500 }} src='https://img.animalplanet.co.kr/news/2020/07/15/700/e05t9x1o0e3trklpwrr3.jpg' alt='' />
        </LazyLoad>
        <div>7번사진</div>
        <div className='filler' />
        <LazyLoad height={500} offsetVertical={900}>
          <img style={{ width: 500, height: 500 }} src='https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201901/20/28017477-0365-4a43-b546-008b603da621.jpg' alt='' />
        </LazyLoad>
        <div>8번사진</div>
        <div className='filler' />
        <LazyLoad height={500} offsetVertical={1000}>
          <img style={{ width: 500, height: 500 }} src='https://file.mk.co.kr/mkde/N0/2021/11/20211111_5012821_1636609089.jpeg' alt='' />
        </LazyLoad>
        <div>9번사진</div>
        <div className='filler' />
        <LazyLoad height={500} offsetVertical={1100}>
          <img style={{ width: 500, height: 500 }} src='https://cdn.imweb.me/thumbnail/20170922/59c4da84ac052.jpg' alt='' />
        </LazyLoad>
        <div>10번사진</div>
        <div className='filler' />
        <LazyLoad height={500} offsetVertical={1200}>
          <img style={{ width: 500, height: 500 }} src='http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg' alt='' />
        </LazyLoad>
      </div>
      <div className='filler' />
    </>
  );
}
