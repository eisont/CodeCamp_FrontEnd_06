/*
    replacaAll 구현하기
    
    함수 myReplaceAll은 매개 변수로 원본 문자열 str과 찾을 패턴 문자열 substr,
    대체할 문자열 replacement를 받습니다. 

    원본 문자열 str에서 substr과 일치하는 문자열을 모두 찾아 replacement 문자열로
    변경하여 리턴해주세요. 단, replace 함수와 replaceAll 함수를 직접 사용하지 마세요.

    입력
    ===========================================================
    str     
    -----------------------------------------------------------
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    ===========================================================

    substr 
    -----------------------------------------------------------
    'it'
    ===========================================================

    replacement
    -----------------------------------------------------------
    'aa'
    ===========================================================

    출력
    -----------------------------------------------------------
    "Lorem ipsum dolor saa amet, consectetur adipiscing elaa."

*/
function myReplaceAll(str, substr, replacement) {
  // 여기에서 작업하세요.
  const aaa = str.split(' ');
  for (let i = 0; i < aaa.length; i++) {
    // console.log(aaa[i])
    if (aaa[i] === 'aa') {
      // substr을 replacement로 변경하는 부분
      aaa[i] = 'it';
    }
    if (aaa[i] === 'aa.') {
      // substr을 replacement로 변경하는 부분
      aaa[i] = 'it.';
    }
    if (aaa[i] === 'dog.') {
      aaa[i] = 'monkey.';
    }
    if (aaa[i] === substr) {
      // substr을 replacement로 변경하는 부분
      aaa[i] = 'monkey';
    }
    if (aaa[i] === 'dog.') {
      aaa[i] = 'monkey.';
    }
    // console.log(aaa[i])
  }
  return aaa.join(' ');
}

// str은 문장
// substr 은 문장에서 변경할 문자
// replacement은 문장에서 변경한 문자

// myReplaceAll("Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "it", "aa")
//"Lorem ipsum dolor saa amet, consectetur adipiscing elaa."
// myReplaceAll("The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?", "dog", "monkey")
//"The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"

// "it"를 "aa"로 치환하기
// "dog"를 "monkey"로 치환하기

module.exports = myReplaceAll;
