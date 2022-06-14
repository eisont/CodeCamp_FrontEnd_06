/*
    팩토리얼
    
    함수 factorial에는 0보다 크거나 같은 정수 num이 주어집니다. 
    이때, num의 팩토리얼을 리턴해주세요.
    팩토리얼은 그 수보다 작거나 같은 모든 양의 정수의 곱을 말합니다.
    예를 들어 3의 경우 (3 * 2 * 1) 이므로 6이 됩니다.
    제한사항 ) 
    정수 num
    (0 ≤ num ≤ 12)
    단, 0의 팩토리얼은 1입니다.
    입출력 예시 )
    input   output
    ---------------
    3       6
    10      3628800
    
*/
// num >= 0
// num <= 12
// num이 주어질 경우
// num= num * num-1
// 1 = 1
// 2 = 2*1
// 3 = 3*2*1
// 4 = 4*3*2*1
// 5 = 5*4*3*2*1
// 6 = 6*5*4*3*2*1
// 7 = 7*6*5*4*3*2*1
// 8 = 8*7*6*5*4*3*2*1
// 9 = 9*8*7*6*5*4*3*2*1
// 10 = 10*9*8*7*6*5*4*3*2*1
// 11 = 11*10*9*8*7*6*5*4*3*2*1
// 12 = 12*11*10*9*8*7*6*5*4*3*2*1

// num = num
// num = num*(num-1)
// num = num*(num-1)*(num-2)
// num = num*(num-1)*(num-2)*(num-3)
// num = num*(num-1)*(num-2)*(num-3)*(num-4)
// num = num*(num-1)*(num-2)*(num-3)*(num-4)*(num-5)
// num = num*(num-1)*(num-2)*(num-3)*(num-4)*(num-5)*(num-6)
// num = num*(num-1)*(num-2)*(num-3)*(num-4)*(num-5)*(num-6)*(num-7)
// num = num*(num-1)*(num-2)*(num-3)*(num-4)*(num-5)*(num-6)*(num-6)*(num-8)
// num = num*(num-1)*(num-2)*(num-3)*(num-4)*(num-5)*(num-6)*(num-6)*(num-8)*(num-9)
// num = num*(num-1)*(num-2)*(num-3)*(num-4)*(num-5)*(num-6)*(num-6)*(num-8)*(num-9)*(num-10)
// num = num*(num-1)*(num-2)*(num-3)*(num-4)*(num-5)*(num-6)*(num-6)*(num-8)*(num-9)*(num-10)*(num-11)
// num = num*(num-1)*(num-2)*(num-3)*(num-4)*(num-5)*(num-6)*(num-6)*(num-8)*(num-9)*(num-10)*(num-11)*(num-12)

// for문???

// 아직도 건들지도 못하겠네요... 얼른 공부해서 잘 풀어보겠습니다.

function factorial(num) {
  // 여기에서 작업하세요
  for (let i = 12; i > 0; i--) {
    console.log(i * (i - 1));
  }
}

module.exports = factorial;
