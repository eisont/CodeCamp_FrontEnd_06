/* 

    문제
    
    임의의 문자열과 수(num)를 입력받아,
    앞쪽부터 차례대로 num개의 글자를 제거하고 남은 글자만 리턴하는 함수를 완성하세요

    ex) cutOut('abcdefg', 4) => 'efg'
        cutOut('latte is horse', 9) => 'horse'

    ----

    힌트

    자바스크립트 내장 함수 중, 문자열을 다루는 내장 함수(메소드)를 사용할 수 있습니다

*/


function cutOut(str, num) {
    // 여기에 코드를 작성하세요
    
    // 뒤에서부터 추출
    // const aaa = (str)
    // const ccc = aaa.split('')
    // const bbb = ccc.reverse()
    // const ddd = bbb.join('')
    // return ddd.slice(0,num)

    // 앞에 원소를 삭제해서 남은 원소 보여주기  	
    
    const aaa = (str)
    const bbb = aaa.split('')
    // 배열 원소로 나누기
    // console.log(bbb)
    const ccc = bbb.splice(0,num)
    // num만큼 자른 만큼 변수 저장
        // console.log(ccc)
    // 잘리고 남은 원소 변수저장
        // console.log(bbb)
    const ddd = bbb.join('')
    // 남은 원소 하나의 원소로 합치기
    console.log(ddd)
    return ddd
}

// 통과
module.exports = cutOut;