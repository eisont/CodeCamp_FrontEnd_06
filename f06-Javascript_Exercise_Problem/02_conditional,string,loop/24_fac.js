/* 

    문제
    
    임의의 수(num)를 입력받아, 해당 수 까지의 팩토리얼을 한 결과값을 리턴하는 함수를 완성하세요
    팩토리얼은 자연수 1부터 num까지의 곱을 계산하는 것입니다.
    fac(1) => 1
    fac(2) => 1 * 2 = 2
    fac(3) => 1 * 2 * 3 = 6
    fac(4) => 1 * 2 * 3 * 4 = 24

*/


function fac(num) {
    // 여기에 코드를 작성하세요
    if (num>0){
        const fff = []
        for (let i =1; i<num+1; i++){
            fff.push(i)
          // console.log(i)
        }
        // console.log(fff)
        const www = []   
        const sss = fff.reduce((acc,cur)=>{
        // console.log(acc , cur)
        console.log(acc*cur)  
        return acc*cur
        })
        www.push(sss)
        return Number(www)
        // console.log(fff.reverse().join('*'))
        // for (let i =0; i< fff.length; i++){
        //   console.log(fff[num-i-1])
        //   // fff[num-i]
        // }
        // return 
        
        // console.log(fff[0])
        // console.log(fff[1])
        // console.log(fff[0]*fff[1]*fff[2])
          // return num
    }else if(num===0) return 1 
    else return "음수는 안되요!!!"
    
}

// 통과
module.exports = fac;