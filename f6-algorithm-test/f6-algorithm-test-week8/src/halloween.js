/*

    할로윈의 사탕

    할로윈데이에는 세준 멘토가 사탕을 나눠줍니다. 
    하지만 사탕을 공정하게 나누어 주지 않으면 서로 싸움이 납니다. 
    세준 멘토는 코캠러들에게 최대한 많은 사탕을 나누어 주기를 원하며 자신에게는 몇개가 남게되는지에 알고 싶어 합니다.
    
    함수 halloween에 사탕의 총 갯수 candies와 코캠러의 인원수 students가 주어집니다. 
    이때 한명이 받을 수 있는 사탕의 갯수와 세준 멘토가 갖게 될 사탕의 갯수를 순서대로 배열에 담아 리턴해주세요. 

    입출력 예시
    ------------------------------
    input                output
    ------------------------------
    candies students
    ------------------------------
    22         3        [ 7, 1 ]
*/

function halloween(candies, students) {
  const result2 = Math.abs(candies % students)
  
  const aaa = candies/students
  const result1 = Math.floor(aaa)
  
  return [result1, result2]
}

halloween(22, 3)   // [7.1]
halloween(101, 5)   // [20.1]
halloween(7, 4)   // [1.3]

module.exports = halloween
