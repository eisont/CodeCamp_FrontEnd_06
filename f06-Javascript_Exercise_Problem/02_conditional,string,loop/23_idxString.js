/* 

    문제
    
    임의의 수(num)를 입력받아, 0부터 해당 num까지의 인덱스를 적은 문자열을 반환하는 함수를 완성하세요
    
    ex) idxString(3) => '0123'
        idxString(0) => '0'
        idxString(9) => '0123456789'
        idxString(-2) => '0-1-2'

*/

function idxString(num) {
    // 여기에 코드를 작성하세요
    // 양수 음수를 뜻하는 내장함수가 있을까?
    // const aaa = String(Number())

    // console.log(fff)

    if (num >= 0){
        const fff = []
    
        for (let i=0; i<num+1; i++){
            // const aaa = [i].concat()
            fff.push(i)
        }
        return fff.join('')
        // const bbb = fff.slice(0,num+1)
        // return bbb.join('')  
    } 
    else if (num < 0) {
        const fff = []
        
        for (let i=0; i<-num+1; i++){
            // const aaa = [i].concat()
            fff.push(i)
        }
        return fff.join('-')
    // const ccc = aaa.split('')
    // console.log(ccc)
    // const ddd = ccc.join('-')
    // console.log(ddd) 
    // aaa.join('-')
    // aaa.split('')
    // aaa.split('').join('-')
    // aaa.split('').join('-').slice(0,num)
    // aaa.split('').slice(0,-num+1)
    // return aaa.split('').slice(0,-num+1).join('-')
    // console.log(fff)
    // const ggg = fff.reverse()
    // const ggg = fff.slice(-num, num)
    // return fff
    // return ggg
    // return ggg.join('')
    }
}

// 통과

module.exports = idxString;