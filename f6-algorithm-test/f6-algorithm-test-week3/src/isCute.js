/*
    isCute
    
    세준 멘토는 멘토팀에서 귀여움을 담당하고 있다고 생각하고 있습니다.
    하지만 아라 멘토가 볼 때 그 의견은 뭔가 좀 잘못된 것 같습니다.
    그렇기에 설문조사를 하여 세준이 귀여운지 아닌지 알아보기로 했습니다.
    
    함수 isCute에는 수강생들이 설문 조사에 어떤 의견을 표명했는지를 나타내는 정수가 담긴 배열 array가 주어집니다. 
    0은 세준이 귀엽지 않다고 했다는 뜻이고, 1은 세준이 귀엽다고 했다는 뜻입니다.
    세준이 귀엽지 않다는 의견이 더 많을 경우 "Junny is not cute!"를 리턴하고 
    귀엽다는 의견이 많을 경우 "Junny is cute!"를 리턴해주세요.

    입출력 예시 )
    input           output
    ----------------------------------
    [1, 0, 0]   "Junny is not cute!"
    [0, 0, 0]   "Junny is not cute!"
    [1, 1, 0]   "Junny is cute!"
    [1, 1, 1]   "Junny is cute!"

    제한사항 )
    설문조사를 한 사람의 수, 즉 배열 array의 길이는 홀수이면서
    1보다 크거나 같고, 11보다 작거나 같습니다. 
*/
// [1, 0, 0]   "Junny is not cute!"
// [0, 0, 0]   "Junny is not cute!"
// [1, 1, 0]   "Junny is cute!"
// [1, 1, 1]   "Junny is cute!"

/* 김치훈 풀이 방법

function isCute(array) {
  const response_1 = 0 || 1;
  const response_2 = 0 || 1;
  const response_3 = 0 || 1;

  const array = [response_1, response_2, response_3];

  if (response_1 === 0 && response_2 === 0 && response_3 === 0) {
    return 'Junny is not cute!!!';
  }
  array[(0, 0, 0)];
}

// or

function isCute(array) {
  const array = [(value_1 = 'aaa'), (value_2 = 'bbb'), (value_3 = 'ccc')];

  if ('aaa' === 0 && 'bbb' === 0 && 'ccc' === 0) {
    return 'junny is not cute!';
  } else {
    return 'junny is cute!!!';
  }
  array[(1, 2, 3)];
}

module.exports = isCute;

