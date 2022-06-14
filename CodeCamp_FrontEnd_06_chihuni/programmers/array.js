// break
for (let i = 0; i < 5; i = i+1){
    if ( i === 3) {
        break;
    }
    console.log(1)
}

// continue
for (let i = 0; i < 5; i = i+1){
    if ( i === 3) {
        continue;
    }
    console.log(1)
}



// for...in
// 객체를 반복할 수 있다.
let str = "abc"

for (let aa in str){
    console.log(aa, str[aa])
}

//obj
let obj = {
    name: "철수",
    age: 12
}

for(let aa in obj){
    console.log(aa, obj[aa])
}

// for...of
// 속도가 느리다는 단점이 있다.
let str = "abc";

for (let data of str){
    console.log(data)
}
//같은 코드입돠
let str = "abc";

for (let i =0; i<str.length; i++){
    console.log(str[i])
}


// forEach
const arr = [1,2,3]

arr.forEach(
	function (name){
        console.log(name)
    }
)

const arr = [1,2,3]

arr.forEach(el => {
    console.log(el)
}

// while
let count = 0; // 최초식

while( count !== 5) { // 조건식
	count++; // 증감식
    console.log(count)
}

// while의 조건식을 잘못 하면 무한루프를 탈수 있습니다.




**`문제 설명`**

문자열에서 "a"가 몇 번 등장하는지 횟수를 구하는 함수를 만들려고 합니다.

반복문을 이용해 "a"의 등장 횟수를 변수 "count"에 할당하세요.

**`입력 인자`**

- str은 문자열입니다.

**`주의 사항`**

 - for을 이용해서 문제를 풀어야 합니다.
 - 문자열도 배열입니다.
 - 대문자 "A" 문자열도 "a" 에 포함입니다.

(목) 반복문 : 특정 문자열 세기

Reference Code

jsx
function countLetter(str) {
	let count = 0;

	for( let i = 0; i < str.length; i++) {
		if( str[i] === 'a' || str[i] === 'A' ) {
			count = count + 1;
    }
  }
}


Reference Code ( toLowerCase )

jsx
function countLetter(str) {
	let count = 0;

	str = str.toLowerCase();
	for( let i = 0; i < str.length; i++) {
		if( str[i] === 'a' ) {
			count++;
    }
  }
}

(목) 반복문 : 특정 문자열 세기


function countLetter(str) {
	let count = 0;

	for( let i = 0; i < str.length; i++) {
		if( str[i] === 'a' || str[i] === 'A' ) {
			count = count + 1;
    }
  }
}


function countLetter(str) {
	let count = 0;

	str = str.toLowerCase();
	for( let i = 0; i < str.length; i++) {
		if( str[i] === 'a' ) {
			count++;
    }
  }
}


function makeNumber(num) {
	let str = "";
	for( let i = 1; i <= num; i++) {
		str += i // str = str + i;

    if( i !== num ) {
			str += "-" // str = str + "-"
    }	
	}
}




**`문제 설명`**

num을 입력받아 1부터 num의 값까지 각각의 숫자 사이에 "-"이 들어간 문자열을 만들어야 합니다. 

num이 3일 경우에는 "1-2-3"입니다.

**`입력 인자`**

- num은 숫자열입니다.

**`주의 사항`**

- for을 이용해서 문제를 풀어야 합니다.


(목) 반복문 : 문자열 삽입

function makeNumber(num) {
	let str = "";
	for( let i = 1; i <= num; i++) {
		str += i // str = str + i;

    if( i !== num ) {
			str += "-" // str = str + "-"
    }	
	}
}

(목) 반복문 : 문자열 삽입

function makeNumber(num) {
	let str = "";
	for( let i = 1; i <= num; i++) {
		str += i // str = str + i;

    if( i !== num ) {
			str += "-" // str = str + "-"
    }	
	}
}

(목) 반복문 : 문자열 삽입

Reference Code

function makeNumber(num) {
	let str = "";
	for( let i = 1; i <= num; i++) {
		str += i // str = str + i;

    if( i !== num ) {
			str += "-" // str = str + "-"
    }	
	}
}

(목) 반복문 : 문자열 삽입

Reference Code

function makeNumber(num) {
	let str = "";
	for( let i = 1; i <= num; i++) {
		str += i // str = str + i;

    if( i !== num ) {
			str += "-" // str = str + "-"
    }	
	}
}




**026. 홀수 문자열**

**`문제 설명`**

num을 입력받아 1부터 num까지의 숫자 중 홀수로 구성된 문자열을 만들어야 합니다.

num이 5일 경우에는 "135"입니다.

**`입력 인자`**

- num은 숫자열입니다.

**`주의 사항`**

- for을 이용해서 문제를 풀어야 합니다.
- 짝수를 제외하는 조건을 추가해야 합니다.

(목) 반복문 : 홀수 문자열

function makeOdd(num) {
	let str = '';

	for( let i = 1; i <= num; i++ ) {
		if( i % 2 === 1 ) {
			str++    
		}
	}
}





**`문제 설명`**

str은 무작위 숫자인 문자열입니다.  해당 문자열에서 가장 큰 수를 구하는 함수를 만들어야 합니다.

만약 str에 "12345"가 들어온다면 "5"를 나타내야 합니다. 

**`입력 인자`**

- str은 문자열입니다.

**`주의 사항`**

- str에서 각각의 문자를 숫자로 바꿔서 계산해야 합니다.
- 비교할 수 있는 기준값이 있어야 합니다.
- 최댓값을 저장할 수 있는 변수가 있어야 합니다.

(금) 반복문 : 가장 큰 수 찾기

Reference Code

function bigNum(str) {
	let biggest = 0;

	for( let i = 0; i < str.length; i++ ) {
		if( Number(str[i]) > biggest ) {
			biggest = Number(str[i])
    }
  }
	
	return biggest
}

Reference Code

function bigNum(str) {
	let biggest = Number( str[0] );

	for( let i = 1; i < str.length; i++ ) {
		if( Number(str[i]) > biggest ) {
			biggest = Number(str[i])
    }
  }
	
	return biggest
}

.sort((a,b)=>a>b ? 1 :-1)

.sort((a,b)=>a>b ? 1 :-1)




정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

제한 조건
num은 int 범위의 정수입니다.
0은 짝수입니다.
입출력 예
num	return
3	"Odd"
4	"Even"



function solution (num) {
    return num % 2 === 0 ? "Even" : "Odd";
}