// 1. 카카오개발자 사이트에 회원가입하고 앱을 만들어 주세요.(이미 앱이 있다면, 새로 만들어 주세요.) ok
// 2. 사이트를 등록(http://localhost:3000)하고, 발급 받은 javascript 키를 복사해 주세요. ok
// 3. /pages/quiz06/map1/index.tsx 페이지를 만들고, 카카오 지도를 그려주세요. ok
// 4. /pages/quiz06/map2/index.tsx 페이지를 만들고, [이동하기] 버튼을 하나 만들어 주세요.
// ⇒ [ 이동하기 ] 버튼을 클릭하면 /pages/quiz06/map1/index.tsx로 router.push 하여 이동해 주세요.
// ⇒ 이 때, 에러가 발생한다면, 발생하지 않도록 수정해 주세요.
// 5. 카카오 지도에 마커를 표시해 주세요.
// ⇒ 마커의 위치는 자신이 좋아하는 장소를 표시하면 됩니다.
// 6. 클릭한 위치에따라 마커가 이동되도록 만들어 주세요.
// 7. 마커의 이미지를 자신이 좋아하는 이미지로 변경해 주세요.

import { useEffect } from 'react';

declare const window: typeof globalThis & {
  kakao: any;
};

export default function HuniMapPage() {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=edd3e5405103bfc5b228cd6fa4b95b87&autoload=false';
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById('map'); // 지도를 표시할 div
        const options = {
          //지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.54699, 127.09598), //지도의 중심좌표.
          level: 3, //지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

        const imageSrc = 'https://w7.pngwing.com/pngs/34/292/png-transparent-sunglasses-thug-life-cool-miscellaneous-angle-white.png', // 마커이미지의 주소입니다
          imageSize = new window.kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
          imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

        // 지도를 클릭했을때 클릭한 위치에 마커를 추가하도록 지도에 클릭이벤트를 등록합니다
        window.kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
          // 클릭한 위치에 마커를 표시합니다
          addMarker(mouseEvent.latLng);
        });

        // 지도에 표시된 마커 객체를 가지고 있을 배열입니다
        var markers = [];

        // 마커 하나를 지도위에 표시합니다
        addMarker(new window.kakao.maps.LatLng(33.450701, 126.570667));

        // 마커를 생성하고 지도위에 표시하는 함수입니다
        function addMarker(position) {
          // 마커를 생성합니다
          var marker = new window.kakao.maps.Marker({
            position: position,
            image: markerImage, // 마커이미지 설정
          });

          // 배열에 추가된 마커들을 지도에 표시하거나 삭제하는 함수입니다
          function setMarkers(map) {
            for (var i = 0; i < markers.length; i++) {
              markers[i].setMap(map);
            }
          }

          // 마커가 지도 위에 표시되도록 설정합니다
          marker.setMap(map);

          // 생성된 마커를 배열에 추가합니다
          markers.push(marker);
        }
      });
    };
  }, []);

  return (
    <>
      <div id='map' style={{ width: 500, height: 400 }}></div>
    </>
  );
}
