let answer = 0; //이동 횟수
let current = 1; // 로봇의 현재 위치

answer = answer + 1;
current = current + 2;

if (current !== 100) {
  current = current + 1
  answer = answer + 1
}

let answer = 0; // 이동 횟수
const limit = 100; // 이동할 층

for (let i = 1; i < limit; i = i + 2) {
  answer = answer + 1;
}



//가독성, 효율성 최고 코드
const limit = 100; // 이동할 층

const answer = Math.floor(limit / 2)
//소수점을 없애주는 역할 === Math