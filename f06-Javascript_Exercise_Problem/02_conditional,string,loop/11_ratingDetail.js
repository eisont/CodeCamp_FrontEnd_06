/*

    문제

    점수를 입력받아 점수에 맞는 등급을 자세히 알려주는 함수를 완성하세요.
    점수가 0점 미만이거나 100점을 초과할 경우 '잘못된 입력입니다'를 리턴해야 합니다.

    > 등급 영역
        - 0점 미만 또는 100 점 초과 : '잘못된 입력입니다'
        - 90점 ~ 100점 : 'A'
        - 80점 ~ 89점 : 'B'
        - 70점 ~ 79점 : 'C'
        - 60점 ~ 69점 : 'D'
        - 0점 ~ 59점 : '등급 미달'

    > 세부 등급
        - 각 점수 등급 중 일의 자리 점수에 따라 세부 등급을 기존 등급 뒤에 붙여 표시해야 합니다. 
        - 7~9점대는 +
        - 4~6점대는 0
        - 0~3점대는 -

        ex) 72점 => C-
            89점 => B+
            100점 => A+
*/


function ratingDetail(num) {
    // 여기에 코드를 작성하세요
    
    if (num<=100 && num>=97) return 'A+'
    if (num<=96 && num>=94) return 'A'
    if (num<=93 && num>=90) return 'A-'
    if (num<=90 && num>=87) return 'B+'
    if (num<=86 && num>=84) return 'B'
    if (num<=83 && num>=80) return 'B-'
    if (num<=79 && num>=77) return 'C+'
    if (num<=76 && num>=74) return 'C'
    if (num<=73 && num>=70) return 'C-'
    if (num<=69 && num>=67) return 'D+'
    if (num<=66 && num>=64) return 'D'
    if (num<=63 && num>=60) return 'D-'
    if (num<=59 && num>=0) return '등급 미달'
    
    else return '잘못된 입력입니다'

}


// 통과
module.exports = ratingDetail;