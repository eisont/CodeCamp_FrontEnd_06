/*
    이진수

    함수 binary에 양의 정수 n이 주어집니다.
    n을 이진수로 나타냈을 때 1을 모두 합해서 리턴해주세요. 

    예를들어 10진수 13은 2진수로 나타냈을 때 1101입니다.
    따라서 1 + 1 + 1의 결과인 3을 리턴해주세요. 
*/
function binary(n) {
  // 여기에서 작업하세요
  const num = n.toString(2)
  const zero = /0/gi
  const ccc = num.replace(zero,"")
  return ccc.length
}


module.exports = binary;
