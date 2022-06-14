import { memo } from 'react';

function MemoizationPR() {
  console.log('프리젠터 렌더링');

  return (
    <>
      <div>==========================</div>
      <h1>프리젠터 입니다.</h1>
      <div>==========================</div>
    </>
  );
}

export default memo(MemoizationPR); // 4번 문제
