// 변수 선언의 실행 시점과 호이스팅
console.log(score); // undefined
// if there is no variable
// Uncaught ReferenceError: score is not defined
// if there is a variable
// undefined

var score;

// 값의 할당
var assignment;
assignment = 80;
console.log(assignment); // 80

// 변수선언과 값의 할당의 실행 시점 차이
console.log(implement); // undefined

var implement;
implement = 80;

console.log(implement); // 80

// 예제
console.log(example); // undefined

example = 80;
var example;

console.log(example); // 80
// 이유가 이해가 안됨
