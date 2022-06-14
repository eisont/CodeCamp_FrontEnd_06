/*
    특별한 날

    2월 19일은 hoony에게 특별한 날입니다. 
    dayBefore 함수는 매개변수로 월과 일자인 month와 day를 받습니다. 
    해당 월과 일자가 2월 19일보다 이전이면 'Before', 이후라면 'After',
    당일이라면 'Special'을 리턴해주세요. 
    
    단, month는 1에서 12사이, day는 1에서 31사이의 정수입니다. 

    입출력예시
    input       output
    ------------------
    month  day
    --------------------
    2      15   'Before'
*/

function dayBefore(month, day) {
  // 여기에서 작업하세요.

  if (month > 2 || day > 19) return 'After';
  if (month === 2 && day === 19) return 'Special';
  if ((month > 0 && month < 2) || (day > 0 && day < 19)) return 'Before';
  else return '이런 날짜는 없어요.';
}

module.exports = dayBefore;
