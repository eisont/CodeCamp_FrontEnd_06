/*

    광고

    광고 효과가 주어졌을 때, 광고를 해야할지 말아야할지 결정하는 프로그램을 작성해주세요.
    함수 advertise에 3개의 정수 r, e, c가 주어집니다. 
    r은 광고를 하지 않았을 때 수익, 
    e는 광고를 했을 때의 수익, 
    c는 광고 비용입니다. 

    입출력 예시
    r    e   c    
    0, 100, 70      r+c <e     advertise
    50, 130, 30     r+c <e     advertise
    -100, -70, 40   r+c > e    do not advertise
    110, 150, 10    r+c < e    advertise
    100, 130, 30    r+c = e    does not matter
*/

function advertise(r, e, c) {
  if (r + c < e) return 'advertise';
  else if (r + c > e) return 'do not advertise';
  else if (r + c === e) return 'does not matter';
}

module.exports = advertise;
