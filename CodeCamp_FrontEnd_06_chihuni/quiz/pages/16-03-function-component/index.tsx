import { useRouter } from 'next/router';
import { createRef, useEffect, useRef, useState } from 'react';

export default function MyComponent() {
  const router = useRouter();
  const [count, setCount] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log('컴포넌트가 마운트됐습니다~');
    inputRef.current?.focus();
    return () => {
      console.log('컴포넌트가 제거됩니다~');
    };
  }, [count]);

  useEffect(() => {
    console.log('컴포넌트가 변경됐습니다~');
  });

  const onClickButton = () => {
    // setCount((prev) => prev + 1);
    setCount(count + 1);
  };

  const onClickMove = () => {
    router.push('/');
  };

  // 1. 제일 처음에 읽힘
  console.log('마운트 시작');
  return (
    <>
      <input type='password' ref={inputRef} />
      <div>카운트: {count}</div>
      <button onClick={onClickButton}>카운트(+1)</button>
      <button onClick={onClickMove}>이동하기</button>
    </>
  );
}
