/* 

    문제
    
    임의의 문자열 3개를 입력받아, 가장 긴 문자열을 리턴하는 함수를 완성하세요
    가장 긴 문자열이 두개 이상일 경우 가장 마지막에 찾은 문자열을 리턴해주세요.

*/


function whatIsLong(str1, str2, str3) {
    // 여기에 코드를 작성하세요
    const aaa = str1.length
    const bbb = str2.length
    const ccc = str3.length
    
    // console.log(aaa)
    // console.log(bbb)
    // console.log(ccc)

    if (aaa>bbb && aaa> ccc) return str1
    if (bbb>aaa && bbb> ccc) return str2
    if (ccc>bbb && ccc> aaa) return str3
    
}

// 통과
module.exports = whatIsLong;