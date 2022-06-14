/*

    문제

    임의의 달을 입력받아, 각 달이 며칠로 이루어져 있는 지 알려주는 함수를 완성하세요.
    - 연도는 2016년을 기준으로 합니다.

*/


function countDays(month) {
    // 여기에 코드를 작성하세요
    // const aaa = String(new Date(2016-1))
    const aaa = String(new Date(2016,month,0))
    // console.log(aaa)
    // 공백으로 나누자
    // [2] == 나눈 것에서 일수만 고르자
    // const bbb = aaa.split(' ')[2]
    // 문자열로 반환된 것을 숫자로 바꾸자 
    const bbb = Number(aaa.split(' ')[2])
  	// const bbb = new Date(2016, 0).getFullYear()
  	// console.log(bbb)
    
    return bbb

    // slice를 사용해볼까? 잘 안됨...
    // const ccc = aaa.slice(0, 4)
    // console.log(ccc)
    // const fff = new Date(2016,2-1,6-1)
    // console.log(fff)
    // const ddd = new Date(2016,2-1,6).getDay()
    // console.log(ddd)
    
}

// 통과

module.exports = countDays;