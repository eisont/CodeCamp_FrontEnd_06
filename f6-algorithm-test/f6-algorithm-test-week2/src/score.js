/*
    시험 성적
    
    시험 점수를 입력받아 90 ~ 100점은 A,
    80 ~ 89점은 B,
    70 ~ 79점은 C,
    60 ~ 69점은 D,
    나머지 점수는 F를 출력하는 함수를 완성하세요.

    단, 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수입니다.
*/

function score(num) {
  // 여기에서 작업하세요.

  if (num <= 100) {
    if (90 <= num) {
      return 'A';
    } else if (80 <= num) {
      return 'B';
    } else if (70 <= num) {
      return 'C';
    } else if (60 <= num) {
      return 'D';
    } else if (0 <= num) {
      return 'F';
    }
  } else {
    return '100이하의 숫자만 입력이 가능합니다.';
  }
}

module.exports = score;
