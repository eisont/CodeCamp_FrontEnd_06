/*
    사분면 고르기

    1, 2, 3, 4 사분면이 있습니다. 
    양 또는 음의 정수 x와 y의 좌표가 주어질 때 해당되는 사분면을 리턴하세요. 
    1사분면 : x좌표와 y 좌표가 모두 양수
    2사분면 : x좌표가 음수이고 y좌표가 양수
    3사분면 : x좌표와 y 좌표가 모두 음수
    4사분면 : x좌표가 양수이고 y좌표가 음수

    입출력 예시 )
    input       output
    -------------------
    x   y
    12  5          1
    
    제한조건 ) 
    −1000 ≤ x ≤ 1000; x ≠ 0
    −1000 ≤ y ≤ 1000; y ≠ 0
*/

function quadrant(x, y) {
  // 여기에서 작업하세요.
  if (x > 0 && y > 0) {
    return 1; // 1사분면
  } else if (x < 0 && y > 0) {
    return 2; // 2사분면
  } else if (x < 0 && y < 0) {
    return 3; // 3사분면
  } else if (x > 0 && y < 0) {
    return 4; // 4사분면
  }
}

module.exports = quadrant;
