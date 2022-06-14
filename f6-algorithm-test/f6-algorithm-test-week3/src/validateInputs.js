/*
    사용자의 입력을 받아 그 값을 저장하고 있는 객체 inputs가 있습니다.
    inputs 객체의 키로는 title, contents, price, writer만 들어갑니다.
    value로는 string, number 타입만 들어갑니다. 

    input[]
    input.key = title, contents, price, writer
    input.value ="", number


    이때, inputs의 value들이 ("" 과 0)이 아니라면 true, 하나의 value라도 ("" 또는 0)이라면 false를 리턴해주세요.
    
    if (input[i] !== "" && input[i] !== 0 ){
      return true
    } else if(input[i] !== "" || input[i] !== "0"){
      return false
    }


    예시 )
    inputs = {title : "", contents : "내용"} 이라면 title의 value가 빈 문자열이기 때문에 false를 리턴합니다.
    inputs = {title : "제목", writer : "작성자", price : 1500} 이라면 빈 문자열이거나 0인 값이 없기 때문에, true를 리턴해주세요.
    
    HINT )
    Object.keys(), Object.values(), Array.filter(), Array.every(), Array.some(), for ... in 등 을 활용할 수 있습니다.
*/

/* 김치훈 풀이 방법
    input[]
    input.key = title, contents, price, writer
    input.value ="", number
    
    if (title !== "" && contents !== "" ){
      return true
    } else {
      return false
    }
    if (title !== 0 && contents !== 0 && writer !== 0 && price !== 0 ){
      return true
    } else {
      return false
    }
  const inputs = { title: '', contents: '내용' };

  if (title !== '' && title !== 0 && contents !== 1 && contents !== 0) {
    return true;
  } else if (title !== '' || title !== 0 || contents !== 1 || contents !== 0) {
    return false;
  }
    */

function validateInputs(inputs) {}

module.exports = validateInputs;
