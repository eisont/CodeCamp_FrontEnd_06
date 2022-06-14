// 1. 마음에 드는 이미지를 한 장 선택하여, 확장자를 webp로 변경해 주세요.
// 변경된 webp확장자의 이미지를 <img />태그를 사용해서 화면에 나타내 보세요.
/* eslint-disable @next/next/no-img-element */
// 1. 사이즈(가로: 500px, 세로: 500px)인 이미지 10개를 세로로 렌더링 하고, LazyLoad를 적용해 주세요.
// ⇒ 스크롤을 내릴 때 마다 이미지를 조금씩 다운로드 받아와야 합니다.(네트워크 탭을 켜고 확인해 주세요.)
// 2. 아래처럼 [ 이미지 보여주기 ] 버튼을 만들고, 이 버튼을 눌렀을 때 PreLoad 된 이미지를 보여주세요
// ⇒ 이미지가 나타날 때, 네트워크 탭에서 새롭게 이미지를 다운로드 받지 않아야 합니다.

import { useEffect, useRef, useState } from 'react';

export default function LazyLoadPreLoadPage() {
  const [imgTag, setImgTag] = useState<HTMLImageElement>();
  const divRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = '/02.webp';
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
    </>
  );
}
