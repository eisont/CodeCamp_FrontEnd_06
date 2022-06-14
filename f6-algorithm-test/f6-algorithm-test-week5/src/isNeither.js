/*

    배수와 약수

    함수 isNeither에 정수 a와 b가 주어집니다.
    a가 b의 약수라면 "factor", 배수라면 "multiple", 
    둘 다 아니라면 "neither"를 출력하세요. 

    input       output
    ------------------
    a   b
    -------------------
    8   16      "factor"

    -> 8은 16의 약수이며, 배수는 아닙니다. 

*/
function isNeither(a, b) {
  // 여기에서 작업하세요

  if (b % a === 0) return 'factor';
  if (a % b === 0) return 'multiple';
  else return 'neither';
}

module.exports = isNeither;
