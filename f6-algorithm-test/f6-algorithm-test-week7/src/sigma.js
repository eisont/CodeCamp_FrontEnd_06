/*

    시그마

    두 정수 A와 B가 주어졌을 때, 두 정수 사이에 있는 수의 합을 구해 리턴해주세요. 
    사이에 있는 수들은 A와 B도 포함됩니다.

    입출력 예시
    ------------------
    input       output
    ------------------
    A   B
    ------------------
    1   3         6

*/

function sigma(A, B) {
  // 여기에서 작업하세요
  let a = 0;
  for (let i = A; i <= B; i++) {
    a += i;
  }
  return a;
}

sigma(1, 3); // 6
sigma(1, 10); // 55
sigma(34, 78); // 2520

module.exports = sigma;
