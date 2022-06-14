/*
    직각삼각형

    함수 triangle에 세변의 길이(a, b, c)가 주어집니다. 
    a의 제곱 + b의 제곱이 c의 제곱이면 직각 삼각형입니다. 

    삼각형이 직각삼각형이라면 "right", 아니라면 "wrong"을 리턴하세요.

*/
/* 
a의 제곱 +b의 제곱 = c의 제곱 === 직각 삼각형
직각삼각형 === right

const 직각삼각형===a*a+b*b=c*c

if ( 직각삼각형 === true ) {
  return right
} else if (직각삼각형 === false ) {
  return wrong
}


*/

function triangle(a, b, c) {
  // 여기에서 작업해 주세요.
  const aaa = a * a + b * b;

  if (aaa === c * c) {
    return 'right';
  } else if (aaa !== c * c) {
    return 'wrong';
  }
}

module.exports = triangle;
