/*

    배수 찾기

    함수 isMultiple에 정수 n과 정수가 담긴 배열 arr이 주어졌을 때, 
    배열에 들어있는 수가 n의 배수면 true, 아니라면 false를 배열에 담아 리턴하세요. 

    단 정수 n과 배열에 담긴 정수는 0보다 크고 1000보다 작습니다. 

    입출력 예시
    -------------------------------------------------------------
    input                       output
    -------------------------------------------------------------
    n           arr
    -------------------------------------------------------------
    3   [1, 7, 99, 321, 777]    [false, false, true, true, true]





    n 으로 나눌때 소수점이 없다면 배수
    소수점이 있다면 배수 아님

    for 문으로 배열 하나하나 % n
    includes 사용해서 
    * includes는 배열만 검사할 수 있습니다.
    .(점) 있다면 false
    .(점) 없다면 true

    for 문으로 배열 하나하나 % n
    1 이면 true
    0 이면 false

    3, [1, 7, 99, 321, 777]) [false, false, true, true, true]
    4, [26, 58, 34, 89, 687] [false, false, false, false, false]
    */

function isMultiple(n, arr) {
  for (let i = 0; i < arr.length; i++) {
    const aaa = arr[i] % n;
    // if (aaa[i]===0)return false
    // else if (aaa[i]===1)return true
  }
  // aaa 배열에서 1은 true 0은 false
  // aaa 배열에서 1은 true 0은 false
}

module.exports = isMultiple;
