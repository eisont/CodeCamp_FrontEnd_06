/*

    네수

    함수 fourNum에 네 자연수 A, B, C, D가 주어집니다. 
    이때, A와 B를 붙인 수와 C와 D를 붙인 수의 합을 구해 리턴하세요.
    a 와 b를 붙인 수 + c와 d를 붙인 수의 합을 구해 리턴
    1020  +  3040
    4060
    2393+6287   8680
    return AB + CD
    두 수 A와 B를 합치는 것은 A의 뒤에 B를 붙이는 것을 의미합니다. 
    즉, 20과 30을 붙이면 2030이 됩니다.

    (단, 1 ≤ A, B, C, D ≤ 1,000,000)

    입출력 예시
    ------------------------------
    input               output
    ------------------------------
    A   B   C   D
    ------------------------------
    10  20  30  40       4060

*/

function fourNum(A, B, C, D) {
  // 여기에서 작업하세요.
  const aaa = A.toString() + B.toString();
  const bbb = C.toString() + D.toString();

  const ccc = Number(aaa) + Number(bbb);
  return ccc;
}

// (23,93,62,87)  // 8680
// (10,20,30,40)  // 4060

module.exports = fourNum;
