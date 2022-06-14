import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ComponentLifecycle() {
  // 1. isChange 라는 state를 만들어 주세요. 초기값은 false로 합니다.
  const [isChange, setIsChange] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // 6. 변경 버튼을 클릭하면 경고메시지로 "Changed!!"를 표시해 주세요.⇒ 단, useEffect의 의존성 배열을 활용해 주세요.
    alert('Changed!!!!');
  }, [isChange]);

  useEffect(() => {
    // 5. 컴포넌트가 렌더링이 되고난 이후에 경고메시지로 "Rendered!"를 표시해 주세요.
    alert('Rendered!');
    // 7. 이동 버튼을 클릭하면 경고메시지로 "Bye!!" 를 표시해 주세요.⇒ 단, 경고메시지는 useEffect에서 작성되어야 합니다.
    return () => {
      alert('Bye!!!');
    };
  }, []);

  const onClickChange = () => {
    // 3. [변경] 버튼을 누르면 isChange를 true로 변경해 주세요.
    setIsChange((prev) => !prev);
    // setIsChange(true);
    console.log(isChange);
  };
  const onClickMove = () => {
    // 4. 이동 버튼을 누르면 '/' 페이지로 이동시켜 주세요.
    router.push('/');
  };

  return (
    <>
      {/* 2. [변경], [이동] 2개의 버튼을 만들어 주세요. */}
      <button onClick={onClickChange}>변경</button>
      <button onClick={onClickMove}>이동</button>
    </>
  );
}
