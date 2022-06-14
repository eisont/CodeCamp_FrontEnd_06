// 1. count 변수를 let과 state로 각각 선언하고, 각각의 카운트를 증가시키는 버튼과 함수를 만들어 주세요.
// 2. 각각의 버튼을 클릭하고, 어떤 변수를 증가시켰을 때 다시 랜더링 되는지 console.log를 작성하여 확인해 주세요.
// 3. 자식 컴포넌트를 하나 만들고 자식 컴포넌트가 랜더링 될 때마다 console.log를 활용하여 표시해 주세요.
// 4. 부모 컴포넌트가 변경되더라도 자식 컴포넌트가 변경되지 않도록 자식 컴포넌트에 memo를 적용시켜 주세요.
// 5. 위에서 적용한 내용들이 정말로 잘 반영되는지 Profiler를 활용해 보세요.

// 6. 부모 컴포넌트에 선언되어 있는 let count가 다시 생성되지 않도록 useMemo를 적용해 주세요.

// 7. 부모 컴포넌트에 선언되어 있는 함수들이 모두 다시 생성되지 않도록 useCallback을 적용해 주세요.
// 8. useCallback이 적용된 함수는 state까지 기억을 해버립니다. state를 기억하지 못하도록 prev를 사용하여 기억시켜 주세요.
// 9. useMemo를 활용하여 함수를 기억하도록 만들 수도 있습니다. 위 8번에서 만든 함수를 useMemo를 사용해서 변경해 보세요.
// 10. 위에서 만든 state 변경 함수를 JSX 에서 직접 작성하도록 변경해 보세요.
// `(작성은 간편하지만 useCallback을 사용해서 기억할 순 없겠죠?)`

import styled from '@emotion/styled';
import { useCallback, useMemo, useState } from 'react';
import MemoizationPR from './presenter';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  width: 200px;
`;

export default function MemoizationCT() {
  let countLet = 0;
  const [countState, setCountState] = useState(0);

  const onClickCountLet1 = () => {
    const bbb = (countLet += 1); // countLet = countLet + 1
    console.log(bbb);
  };
  const onClickCountLet2 = useMemo(() => {
    return () => {
      const bbb = (countLet += 1); // countLet = countLet + 1
      console.log(bbb);
    };
  }, []);

  const onClickCountCallback = useCallback(() => {
    // 7번
    console.log(countState + 1);
    console.log('3번 자식 렌더링되는지 확인완료');
    setCountState((prev) => prev + 1); //8번
  }, []);

  const onClickCountUseMemo = useMemo(() => {
    // 9번
    return () => {
      console.log(countState + 1);
      console.log('3번 자식 렌더링되는지 확인완료');
      setCountState((prev) => prev + 1);
    };
  }, []);
  return (
    <Wrapper>
      <Button onClick={onClickCountLet1}>카운트(let) +1 올리기!!!</Button>
      <Button onClick={onClickCountLet2}>(useMemo사용) 카운트(let) +1 올리기!!!</Button>
      <Button onClick={onClickCountCallback}>8번 문제</Button>
      <Button onClick={onClickCountUseMemo}>9번 문제</Button>

      <MemoizationPR />
    </Wrapper>
  );
}
