// 16.1 내부 슬롯과 내부 메서드
const o = {};

// 내부 슬롯은 자바스크립트 엔진의 내부 로직이므로 직접 접근 불가
// o.[[Prototype]]; // Uncaught SyntaxError: Unexpected token '['

// 일부 내부 슬롯과 내부 메서드에 한하여 간접적 접근 수단 제공
o.__proto__; // Object.prototype
// 콘솔에 아무것도 뜨지 않음 
