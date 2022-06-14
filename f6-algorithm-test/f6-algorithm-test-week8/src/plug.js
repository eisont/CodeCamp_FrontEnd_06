/*
    출처 : https://www.acmicpc.net/problem/2010

    플러그

    강의실에는 하나의 플러그 밖에 없습니다. n개의 멀티탭(배열의 길이)이 있고, 각 멀티탭마다 꽂을 수 있는
    플러그의 갯수(배열 내 값)가 담겨있는 배열 arr이 주어질 때, 최대 몇대의 컴퓨터를 전원에 연결할 수 있는지 리턴해주세요.

    입출력 예시(5구짜리 멀티탭과 8구짜리 멀티탭 총 2개가 주어질떄.)
    --------------------
    input       output
    --------------------
    arr
    --------------------
    [5, 8]        12
*/

function plug(arr) {
  // 여기에서 작업하세요
  
  if ( arr.length === 2 ){
    const aaa = arr[0]+arr[1]
  	const minus = arr.length-1
    return aaa-minus
  }
  if( arr.length === 3 ){
  const minus = arr.length-1
    const nnn = arr[0]+arr[1]+arr[2]
    return nnn-minus
  }
}

// [1, 1, 1]을 입력받은 경우 1을 리턴해야 합니다   
// 플러그 › [5, 8]을 입력받은 경우 12를 리턴해야 합니다    

// 배열의 모든 원소의 총합 - 배열의 원소 갯수

module.exports = plug;
