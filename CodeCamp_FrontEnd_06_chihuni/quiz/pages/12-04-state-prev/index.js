import { useState } from "react";

export default function StatePrevPage() {
  const [state, setState] = useState(0);

  // function sumAll () {
  //   setState(state + 1);
  //   setState(state + 2);
  //   setState(state + 3);
  //   setState(state + 4);
  // };
  // 4씩 오릅니다. 이유는 useState의 작동방식 때문에 그렇습니다.
  // 함수가 끝날때 값을 반영하기 때문에 마지막에 있는 +4를 적용해서 4씩 증가합니다.
  // 추가로 말하면 위에 ()안에 있는 state는 0입니다.
  function sumAll () {
    setState((prev) => prev + 1);
    setState((prev) => prev + 2);
    setState((prev) => prev + 3);
    setState((prev) => prev + 4);
  };

  return (
    <div>
      <div>결과는: {state}</div>
      <button onClick={sumAll}>카운트 올리기!!!</button>
    </div>
  );
}
