// 1. 카카오개발자 사이트에 회원가입하고 앱을 만들어 주세요.(이미 앱이 있다면, 새로 만들어 주세요.)
// 2. 사이트를 등록(http://localhost:3000)하고, 발급 받은 javascript 키를 복사해 주세요.
// 3. /pages/quiz06/map1/index.tsx 페이지를 만들고, 카카오 지도를 그려주세요.
// 4. /pages/quiz06/map2/index.tsx 페이지를 만들고, [이동하기] 버튼을 하나 만들어 주세요.
// ⇒ [ 이동하기 ] 버튼을 클릭하면 /pages/quiz06/map1/index.tsx로 router.push 하여 이동해 주세요.
// ⇒ 이 때, 에러가 발생한다면, 발생하지 않도록 수정해 주세요.
// 5. 카카오 지도에 마커를 표시해 주세요.
// ⇒ 마커의 위치는 자신이 좋아하는 장소를 표시하면 됩니다.
// 6. 클릭한 위치에따라 마커가 이동되도록 만들어 주세요.
// 7. 마커의 이미지를 자신이 좋아하는 이미지로 변경해 주세요.

import Link from 'next/link';
import { useRouter } from 'next/router';

export default function HuniMapJoinPage() {
  const router = useRouter();

  const onClickWatchMap = () => {
    router.push('../29quiz/map1');
  };

  return (
    <>
      <button onClick={onClickWatchMap}>나랑 지도 보러 갈래?</button>
      <Link href='../29quiz/map1'>
        <a>Link로 이동</a>
      </Link>
    </>
  );
}
