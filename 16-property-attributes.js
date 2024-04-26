// 16.1 내부 슬롯과 내부 메서드
const o = {};

// 내부 슬롯은 자바스크립트 엔진의 내부 로직이므로 직접 접근 불가
// o.[[Prototype]]; // Uncaught SyntaxError: Unexpected token '['

// 일부 내부 슬롯과 내부 메서드에 한하여 간접적 접근 수단 제공
o.__proto__; // Object.prototype
// 콘솔에 아무것도 뜨지 않음

// 16.2.1 property attribute을 간접 확인하는 방법
// const person = {
//   name: "Lee",
// };

// console.log(Object.getOwnPropertyDescriptor(person, "name"));
// {value: 'Lee', writable: true, enumerable: true, configurable: true}

// 16.2.2
// const person = {
//   name: "Lee",
// };

// person.age = 20;

// console.log(Object.getOwnPropertyDescriptors(person));
// {
//      age : {value: 20, writable: true, enumerable: true, configurable: true}
//      name : {value: 'Lee', writable: true, enumerable: true, configurable: true
// }

// 16.3 accessor property
const person = {
  // data property
  firstName: "Umgmo",
  LastName: "Lee",

  // fullName : accessor property
  // getter
  get fullName() {
    return `${this.firstName} ${this.LastName}`;
  },

  // setter
  set fullName(name) {
    [this.firstName, this.LastName] = name.split(" ");
  },
};

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조 
console.log(person.firstName + " " + person.LastName); // Umgmo Lee

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장 
person.fullName = "Heegun Lee";
console.log(person); // {firstName: 'Heegun', LastName: 'Lee'}

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조 
console.log(person.fullName); // Heegun Lee

// firstName은 데이터 프로퍼티 
let descriptor = Object.getOwnPropertyDescriptor(person, "firstName");
console.log(descriptor); // {value: 'Heegun', writable: true, enumerable: true, configurable: true}

// fullName은 접근자 프로퍼티 
descriptor = Object.getOwnPropertyDescriptor(person, "fullName");
console.log(descriptor); // {enumerable: true, configurable: true, get: ƒ, set: ƒ}
