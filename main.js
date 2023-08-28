let str = `
010-1234-5678
dhkcos16@gmail.com
https://github.com/dhkcos16/fastcampus_js_study.git
The quick brown fox jumps over the lazy dog.
동해물과_백두산이 마르고 닳도록
http://localhost:1234
abbcccdddd
d`;

// const regexp = new RegExp("the", "gi");
const regexp = /the/gi;
console.log(regexp.test(str)); // .test()
console.log(str.match(regexp)); // .match()
console.log(str.replace(regexp, "www")); // .replace(), 원본 데이터 수정 X
str = str.replace(regexp, "www"); // let str로 바꾸고, 재할당 하면
console.log(str); // 원본 데이터 변경 O

// **
// 자주 쓰는 정규표현식 메소드
// 1. test: 정규식.test(문자열) -> 일치 여부(Boolean) 반환
// 2. match: 문자열.match(정규식) -> 일치하는 문자열의 배열(Array)을 반환
// 3. replace: 문자열.replace(정규식, 대체문자) -> 일치하는 문자열을 대체하고, 대체된 문자열(String)을 반환
// **

console.log("---------");

// **
// 플래그
// **

const regexp2 = /\.$/gim; // .으로 끝나는 줄을 찾되, 각 줄의 끝(엔터)을 서치
console.log(str.match(regexp2));

console.log("---------");

// **
// 패턴 (표현)
// **

const regexp3 = /h..p/g;
console.log(str.match(regexp3)); // ["http", "http"]

const regexp4 = /fox|dog/g;
console.log(str.match(regexp4)); // ["fox", "dog"]

const regexp5 = /https?/g; // s가 있을 수도 있고, 없을 수도 있다 !
console.log(str.match(regexp5)); // ["https", "http"]

const regexp6 = /\b\w{2,3}\b/g;
// "\w"는 숫자를 포함한 영어 알파벳을 의미한다.
// "\b \b"를 양쪽 끝에 넣어주면, 경계를 만들어 준다.
console.log(str.match(regexp6));

const regexp7 = /[가-힣]{1,}/g;
console.log(str.match(regexp7));

const regexp8 = /[0-9]{1,}/g;
console.log(str.match(regexp8));

const regexp9 = /\bf\w{1,}\b/g;
console.log(str.match(regexp9)); // ["fastcampus_js_study", "fox"]

const h = `  the hello  world   !

`;
const regexp10 = /\s/g;
console.log(h.replace(regexp10, ""));

const regexp11 = /.{1,}(?=@)/g; // 앞쪽 일치
console.log(str.match(regexp11));

const regexp12 = /(?<=@).{1,}/g; // 뒤쪽 일치
console.log(str.match(regexp12));
