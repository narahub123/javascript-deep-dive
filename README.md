<meta charset="UTF-8">

# javascript-deep-dive

## 참고 자료

### 모던 자바스크립트 Deep Dive

### [모던 자바스크립트 tutorial](https://javascript.info/)

### [MDN](https://developer.mozilla.org/ko/)

<details>
<summary>▣ 04장: 변수(variables)</summary>

<details>
<summary>4.1 변수란 무엇인가? 왜 필요한가?</summary>

메모리 : 데이터를 저장할 수 있는 메모리 셀의 집합

메모리 셀: 하나의 셀은 1바이트(8 비트), 각 셀은 고유의 메모리 주소를 가짐

메모리 주소 : 메모리 공간의 위치를 나타내는 것, 0~ 메모리 공간의 크기 만큼의 정수로 표현

**변수(variable)**

- 하나의 값을 저장하기 위해 확보된 메모리 공간 자체 혹은 그 메모리 공간을 식별하기 위해 붙인 이름
- 값의 위치를 가리키기 위한 상징적인 이름
- 필요성
  - 값이 저장될 메모리 주소는 코드가 실행될 때 메모리의 상황에 따라 임의로 결정됨
  - 동일한 컴퓨터에서 동일한 코드를 실행해도 코드가 실행될 때마다 값이 저장될 메모리 주소는 변경됨
  - 따라서 변수는 기억하고 싶은 값을 메모리에 저장하고 저장된 값을 읽어 들여 재사용하기 위해 사용됨
- 관련 용어
  - 변수명 : 메모리 공간에 저장된 값을 식별할 수 있는 고유한 이름
  - 변수 값 : 변수에 저장된 값
  - 할당(assignment) : 변수에 값을 저장하는 것
  - 참조(reference) : 변수에 저장된 값을 읽어 들이는 것
- 필요성 2
  - 사람이 이해할 수 있는 언어로 명명된 변수 이름을 통해 변수에 저장된 값의 의미를 명확히 알 수 있음

</details>

<details>
<summary>4.2 식별자</summary>

**식별자(identifier)**

- 어떤 값을 구별해서 식별할 수 있는 고유한 이름
- 식별자는 값이 아닌 메모리 주소를 기억하고 있음
</details>

<details>
<summary>4.3 변수 선언</summary>

**변수 선언(variable declaration)**

- 변수를 생성하는 것
- 값을 저장하기 위한 메모리 공간을 확보하고(allocate), 변수 이름과 확보된 메모리 공간의 주소를 연결(name binding)해서 값을 저장할 수 있게 준비하는 것
- 변수 선언에 의해 확보된 메모리 공간은 확보가 해제되기 전까지는 누구도 확보된 메모리 공간을 사용할 수 없도록 보호됨
- 변수를 사용하기 위해서는 반드시 선언이 필요함
- 변수 선언을 할 때에는 **var, let, const 키워드**를 사용함
- 변수 선언 방법
  ```jsx
  var score; // 변수 선언(변수 선언문)
  ```
  - 주의
    - 위의 코드는 아직 변수에 값이 할당되지 않았기 때문에 확보된 메모리 공간은 비어 있을 것 같지만 확보된 메모리 공간에는 자바스크립트 엔진에 의해 undefined라는 값이 암묵적으로 할당되어 초기화됨
- 자바스크립트의 변수 선언 단계
  - 선언 단계 : 이름을 등록해서 변수의 존재를 알림
  - 초기화 단계 : 값을 저장하기 위한 메모리 공간을 확보하고 암묵적으로 초기화해서 undefined를 할당해 초기화함
- 초기화(initialization)
  - 변수가 선언된 이후 최초로 값을 할당하는 것
  - 확보된 메모리 공간에 이전에 다른 애플리케이션이 사용했던 값이 남아 있을 수 있기 때문에 초기화를 통해 쓰레기 값이 나오는 것을 방지함
- 선언하지 않은 식별자에 접근하는 경우
  - ReferenceError 발생함
- 변수를 두 번 선언하는 경우 - SyntaxError 발생함
</details>

<details>
<summary>4.4 변수 선언의 실행 시점과 변수 호이스팅</summary>

**변수선언의 실행 시점**

```jsx
console.log(score); // undefined

var score; // 변수 선언문
```

- 자바스트립트 엔진은 소스코드를 실행하기에 앞서 먼저 소스코드의 평가 과정을 거치면서 소스코드를 실행하기 위한 준비를 함
- 소스코드의 평가 과정에서 자바스크립트 엔진은 모든 선언문을 소스코드에서 찾아내 먼저 실행함
- 자바스크립트 엔진은 변수 선언이 소스코드의 어디에 있든 상관없이 다른 코드보다 먼저 실행된다. 따라서 변수 선언이 소스코드의 어디에 위치하는지와 상관없이 어디서든지 변수를 참조할 수 있음

**변수 호이스팅(variable hoisting)**

- 변수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징
- 변수 호이스팅은 가독성의 저하를 일으키기 때문에 실용적으로 사용되지는 않음
</details>

<details>
<summary>4.5 값의 할당</summary>

**값의 할당**

- 할당 연산자(=)를 사용해 변수에 값을 할당함
- 할당 연산자는 우변의 값을 좌변의 변수에 할당함

```jsx
var score; // 변수 선언
score = 80; // 값의 할당
```

- 변수 선언과 값의 할당을 하나의 문으로 단축 표현 가능

```jsx
var score = 80;
```

- 자바스크립트 엔진은 변수 선언과 값의 할당을 하나의 문으로 단축 표현해도 변수 선언과 값의 할당을 2개의 문으로 나누어 각각 실행함
- 주의 : 변수 선언과 값의 할당의 실행 시점이 다름

  - 변수 선언 : 소스 코드 평가(런타임 이전)
  - 값의 할당 : 런타임

  ```jsx
  console.log(score); // undefined

  var score; // 변수 선언
  score = 80; // 값의 할당

  console.log(score); // 80
  ```

- **변수에 값을 할당할 때는** 이전 값 undefined가 저장되었던 메모리 공간을 지우고 그 메모리 공간에 값을 새롭게 저장하는 것이 아니라 **새로운 메모리 공간을 확보하고 그곳에 할당 값을 저장함**
</details>

<details>
<summary>4.6 값의 재할당</summary>

**값의 재할당**

- 이미 값이 할당되어 있는 변수에 새로운 값을 또다시 할당하는 것
- 재할당이 되면 새로운 메모리 공간을 확보하고 그 메모리 공간에 할당을 값을 저장함
- 변수에 저장되었던 기존 값들은 어떤 식별자와도 연결되어 있지 않게 됨 → 이러한 불필요한 값들은 가비지 콜렉터에 의해 메모리에서 자동으로 해제됨. 단, 메모리에서 언제 해제될지는 예측할 수 없다

**상수**

- 한번 정해지면 변하지 않는 값
- 단 한번만 할당할 수 있는 변수
</details>

<details>
<summary>4.7 식별자 네이밍 규칙</summary>

**식별자 네이밍 규칙**

- 식별자는 특수문자를 제외한 문자, 숫자, 언더스코어(\_), 달러 기호($)를 포함할 수 있음
- 단, 식별자는 특수문자를 제외한 문자, 언더스코어, 달러 기호로 시작되어야 함 → 숫자로 시작하는 것은 허용되지 않음
- 예약어는 식별자로 사용 불가

[자바스크립트 예약어](https://ko.w3hmong.com/js/js_reserved.htm)

**변수의 네이밍 규칙**

- 식별자 네이밍 규칙을 따름
- 변수는 쉼표로 구분해 하나의 문에 여러 개를 한번에 선언 가능
  ```jsx
  var person, $elem, _name, first_name, val1;
  ```
- ES5부터 식별자를 만들 때 유니코드 문자를 허용하므로 알파벳 외의 한글이나 일본어 식별자도 사용 가능 → 권장하지 않음
- 대소문자 구별

**네이밍 컨벤션(naming convention)**

- 하나 이상의 영어 단어로 구성된 식별자를 만들 때 가독성이 좋게 단어를 한눈에 구분하기 위해 규정한 명명 규칙 - 카멜 케이스(camelCase) - 스네이크 케이스(snake_case) - 파스칼 케이스(PascalCase) - 헝가리언 케이스(typeHungarianCase)
</details>
</details>

<details>
<summary> ▣ 05장: 표현식과 문(Expressions and Statements)</summary>

<details>
<summary>5.1 값</summary>

**값(value)**

- 표현식(expression)이 평가(evaluate)되어 생성된 결과

**평가(evaluation)**

- 식을 해석해서 **값을 생성**하거나 **참조**하는 것
</details>
<details>
<summary>5.2 리터럴</summary>

**리터럴(literal)**

- 사람이 이해할 수 있는 문자 또는 약속된 기호를 사용해 값을 생성하는 표기법(notation)
- 자바스크립트 엔진은 코드가 실행되는 시점인 런타임에 리터럴을 평가해 값을 생성함
</details>
<details>
<summary>5.3 표현식</summary>

**표현식(expression)**

- 값으로 평가될 수 있는 문(statement)
- 표현식이 평가되면 새로운 값을 생성하거나 기존 값을 참조함

  - 리터럴

    ```tsx
    var score = 100; // 리터럴

    var score = 50 + 50; // 리터럴과 연산자 조합
    ```

    - 리터럴을 자바스트립트 엔진에 의해 평가되어 값을 생성하므로 표현식

  - 참조
    ```tsx
    score; // 100
    ```
    - 식별자 참조 : 변수 식별자를 참조하면 변수 값으로 평가됨 → 표현식

- 표현식과 표현식이 평가된 값은 동등한 관계이다(동치: equivalent) → 값이 위치한 자리에는 표현식도 위치할 수 있음을 의미
</details>
<details>
<summary>5.4 문</summary>

**문(statement)**

- 프로그램을 구성하는 기본 단위이자 최소 실행 단위
- 문은 여러 개의 토큰으로 구성됨 - **토근(token)** - 문법적인 의미를 가지며, 문법적으로 더 이상 나눌 수 없는 코드의 기본 요소 - 예) 키워드, 식별자, 리터럴, 세미콜론(;), 마침표(.) 등
</details>
<details>
<summary>5.5 세미콜론과 세미콜론 자동 삽입 기능</summary>

**세미콜론(;)**

- 문의 종료를 나타냄
- 자바스크립트 엔진은 세미콜론으로 문의 종료한 위치를 파악하고 순차적으로 하나씩 문을 실행함
- 문이 끝날 때에는 세미클론을 붙여야 함. 단, 0개 이상의 문을 중괄호로 묶는 코드 블록 뒤에는 세미클론을 붙이지 않음 → 자체 종결성을 가짐
- 세미클론 자동 삽입 기능(ASI: Automatic semicolon insertion) : 자바스크립트 엔진이 소스코드를 해석할 때 문의 끝으로 예측되는 지점에 세미콜론을 자동으로 붙여주는 기능
</details>
<details>
<summary>5.6 표현식인 문과 표현식이 아닌 문</summary>

표현식인 문 : 값으로 평가할 수 있는 문

- 예\) 할당문

표현식이 아닌 문 : 값으로 평가할 수 없는 문

- 예\) 선언문
</details>
</details>

<details>
<summary>▣ 06장: 데이터 타입</summary>

데이터 타입(data type)

- 값의 종류를 의미
- 7개의 데이터 타입을 제공함
- 원시 타입(primitive type)과 객체 타입(object type)으로 구분
<details>
<summary>숫자 타입(number)</summary>

**숫자 타입**

- 배밀정도 64비트 부동 소수점 형식
- 모든 수를 실수로 처리
- 정수만 표현하기 위한 데이터 타입이 별도로 존재하지 않음

**특별한 값**

- **Infinity** : 양의 무한대
- **-Infinity** : 음의 무한대
- **NaN**: 산술 연산 불가(Not-A-Number)
</details>
<details>
<summary>문자열 타입(string)</summary>

**문자열 타입**

- 텍스트 데이터
- 0개 이상의 16비트 유니코드 문자의 집합
- 작은 따옴표, 큰 따옴표, 백틱으로 텍스트를 감쌈
</details>
<details>
<summary>템블릿 리터럴(template literal)</summary>

**템플릿 리터럴**

- 런타임에 일반 문자열로 반환
- 백틱을 사용해 표현

**템플릿 리터럴 문자열 처리 기능**

- 6.3.1 멀티라인 문자열
  - 이스케이프 시퀀스를 사용하지 않고도 줄바꿈이 허용되며 모든 공백도 있는 그대로 적용됨
- 6.3.2 표현식 삽입 - ${}으로 표현식을 감싸서 표현 - 표현식의 평가 결과가 문자열이 아니더라도 문자열로 타입이 강제로 변환됨
</details>
<details>
<summary>불리언 타입(boolean)</summary>

**불리언 타입**

- 참과 거짓을 나타내는 true, false만을 값으로 가짐
- 조건문에서 자주 사용됨
</details>
<details>
<summary>undefined 타입</summary>

**undefined**

- 자바스크립트 엔진이 변수를 초기화할 때 사용하는 값
</details>
<details>
<summary>null 타입</summary>

**null**

- 변수에 값이 없다는 것을 의도적으로 명시할 때 사용
- 이전에 할당되어 있던 값에 대한 참조를 의도적으로 제거하는 것을 의미
- 자바스크립트 엔진은 누구도 참조하지 않는 메모리 공간에 대해 가비지 콜렉션을 진행함
- 함수가 유효한 값을 반환할 수 없는 경우 명시적으로 null을 반환하기도 함
</details>
<details>
<summary>심벌 타입(symbol)</summary>

**심벌**

- 변경 불가능한 원시 타입의 값
- 다른 값과 중복이 되지 않는 유일무이한 값
- Symbol 함수를 호출해 생성함
- 생성된 심벌 값은 외부에 노출되지 않으며, 다른 값과는 절대 중복되지 않는 유일무이한 값
</details>
<details>
<summary>객체 타입(object)</summary>

객체 타입

- 자바스크립트를 이루고 있는 거의 모든 것은 객체로 이루어짐
</details>
<details>
<summary>데이터 타입의 필요성 </summary>

<details>
<summary>데이터 타입에 의한 메모리 공간의 확보와 참조</summary>

- 값은 메모리에 저장하고 참조할 수 있어야 함
- 메모리에 값을 저장 혹은 참조 하려면 먼저 확보해야 할 메모리 공간의 크기를 결정해야 함
- 자바스크립트 엔진은 데이터 타입에 따라 확보해야 할 메모리 공간의 크기를 결정함
</details>
<details>
<summary>데이터 타입에 의한 값의 해석</summary>

- 자바스크립트 엔진은 데이터를 메모리 공간에 2진수로 저장함
- 메모리에 저장된 2진수 값은 데이터 타입에 따라 다르게 해석됨
</details>
</details>
<details>
<summary>동적 타이핑</summary>

<details>
<summary>동적 타입 언어와 정적 타입 언어</summary>

**정적 타입 언어(static/strong type)**

- 변수를 선언할 때 변수에 할당할 수 있는 값의 종류를 사전에 선언해야 하는 언어(명시적 타입 선언(explicit type declaration))
- 변수의 타입을 변경할 수 없으며, 변수에 선언한 타입에 맞는 값만 할당할 수 있음
- 컴파일 시점에 타입 체크를 수행함

**동적 타입 언어(dynamic/weak type)**

- 값을 할당하는 시점에 변수의 타입이 동적으로 결정(타입 추론(type inference))되고, 변수의 타입을 재할당에 의해 언제든지 변경(동적 타이핑(dynamic typing))할 수 있는 언어
</details>
<details>
<summary>동적 타입 언어와 변수 </summary>

**동적 타입 언어의 단점**

- 복잡한 프로그램에서 변화하는 변수 값을 추적하기 어려움
- 값을 확인하기 전까지 변수의 타입을 확신할 수 없음
- 개발자와의 의도와 상관없이 자바스크립트 엔진에 의해 암묵적으로 타입이 자동으로 변환될 수 있음 → 신뢰성이 떨어짐

**변수 사용 시 주의 사항**

- 변수는 꼭 필요한 경우에 한해 제한적으로 사용
- 변수의 유효 범위(스코프)는 최대한 좁게 만들어 변수의 부작용을 억제
- 전역 변수의 사용 자제
- 변수보다는 상수를 사용해 값의 변경을 억제
- 변수 이름은 변수의 목적이나 의미를 파악할 수 있도록 네이밍
</details>
</details>
</details>

<details>
<summary>▣ 07장: 연산자</summary>

연산자(operator)

- 하나 이상의 표현식을 대상으로 산술, 할당, 비교, 논리, 타입, 지수 연산 등을 수행하여 하나의 값을 만듦

피연산자(operand)

- 연산의 대상
- 값으로 평가가 될 수 있는 표현식이어야 함

<details>
<summary>7.1 산술 연산자(arithmetic operators)</summary>

피연산자를 대상으로 수학적 계산을 수행해 새로운 숫자 값을 만드는 연산자

연산이 불가능한 경우 NaN을 반환함

<details>
<summary>7.1.1 이항 산술 연산자(binary arithmetic operators)</summary>

| Operator | Description         |
| -------- | ------------------- |
| +        | Addition            |
| -        | Subtraction         |
| \*       | Multiplication      |
| /        | Division            |
| %        | Modulus (Remainder) |

</details>
<details>
<summary>7.1.2 단항 산술 연산자(unary arithmetic operators)</summary>

| Operator | Description | 부수 효과 |
| -------- | ----------- | --------- |
| ++       | Increment   | O         |
| --       | Decrement   | O         |
| +        |             | X         |
| -        |             | X         |

증가/감소(++/--) 연산자는 피연산자의 값을 변경하는 부수 효과가 있음

증가/감소 연산자는 위치에 의미가 있음

- 전위 증가/감소 연산자(prefix increment/decrement operator) : 먼저 피연산자의 값을 증가/감소시킨 후 다른 연산을 수행
- 후위 증가/감소 연산자(postfix increment/decrement operator) : 먼저 다른 연산을 수행한 후, 피연사자의 값을 증가/감소시킴

* 단항 연산자

- 숫자 타입이 아닌 피연산자에 + 단항 연산자를 사용하면 피연산자를 숫자 타입으로 변환하여 반환함

```jsx
+10; // 10
+-10; // -10
```

- 단항 연산자

- 피연산자의 부호를 반전한 값을 반환
- 숫자 타입이 아닌 피연산자에 + 단항 연산자를 사용하면 피연산자를 숫자 타입으로 변환하여 반환함

```jsx
-(-10); // 10
```

</details>
<details>
<summary>7.1.3 문자열 연결 연산자</summary>

- 연산자
</details>
</details>

<details>
<summary>7.2 할당 연산자(assignment operators)</summary>

우항에 있는 피연산자의 평가 결과를 좌항에 있는 변수에 할당함

좌항의 변수에 값을 할당하므로 변수 값이 변하는 부수 효과가 있음

| Operator | Example   | Same As      |
| -------- | --------- | ------------ |
| =        | x = y     | x = y        |
| +=       | x += y    | x = x + y    |
| -=       | x -= y    | x = x - y    |
| \*=      | x \*= y   | x = x \* y   |
| /=       | x /= y    | x = x / y    |
| %=       | x %= y    | x = x % y    |
| \*\*=    | x \*\*= y | x = x \*\* y |

</details>
<details>
<summary>7.3 비교 연산자(comparison operator)</summary>

<details>
<summary>7.3.1 동등/일치 비교 연산자</summary>

동등 비교 연산자(loose equality operator)

- 좌항과 우항의 피연산자를 비교할 때 먼저 암묵적 타입 변환을 통해 타입을 일치시킨 후 같은 값인지 비교

일치 비교 연산자(strict equality operator)

- 좌항과 우항의 피연산자가 타입도 같고 값도 같은 경우에 한하여 true 반환
- NaN : 자신과 일치하지 않는 유일한 값

  ````jsx
  NaN === NaN // false

      Number.isNaN(NaN); // true
      ```

  </details>
  <details>
  <summary>7.3.2 대소 관계 비교 연산자</summary>
  ````

| Operator | Description              |
| -------- | ------------------------ |
| >        | greater than             |
| <        | less than                |
| >=       | greater than or equal to |
| <=       | less than or equal to    |

</details>
</details>
<details>
<summary>7.4 삼항 조건 연산자(ternary operator)</summary>

조건식의 평가 결과에 따라 반환할 값을 결정

```jsx
(조건식) ? (조건식이 true일때 반환할 값) : (조건식이 false일때 반환할 값)
```

</details>
<details>
<summary>7.5 논리 연산자</summary>

| Operator | Example | Same As          |
| -------- | ------- | ---------------- | --- | --- | --- | ----- | --- | ------- |
| &&=      | x &&= y | x = x && (x = y) |
|          |         | =                | x   |     | = y | x = x |     | (x = y) |
| ??=      | x ??= y | x = x ?? (x = y) |

</details>
<details>
<summary>7.6 쉼표 연산자</summary>

왼쪽 피연산자부터 차례대로 피연사자를 평가하고 마지막 피연사자의 평가가 끝나면 마지막 피연산자의 평가 결과를 반환

```jsx
var x, y, z;
(x = 1), (y = 2), (z = 3); // 3
```

</details>
<details>
<summary>7.7 그룹 연산자</summary>

소괄호(’()’)로 피연산자를 감싸서 자신의 피연산자인 표현식을 가장 먼저 평가함

그룹 연산자를 사용하면 연산자의 우선순위를 조절 가능

</details>
<details>
<summary>7.8 typeof 연산자</summary>

피연산자의 데이터 타입을 문자열로 반환

string, number, boolean, undefined, symbol, object, function 반환

```jsx
typeof "John"; // Returns "string"
typeof 3.14; // Returns "number"
typeof NaN; // Returns "number"
typeof false; // Returns "boolean"
typeof [1, 2, 3, 4]; // Returns "object"
typeof { name: "John", age: 34 }; // Returns "object"
typeof new Date(); // Returns "object"
typeof null; // Returns "object"
typeof function () {}; // Returns "function"
typeof myCar; // Returns "undefined" *
```

선언하지 않은 식별자를 typeof 연산자로 보면 ReferenceError가 발생하지 않고 undefined를 반환함

</details>
<details>
<summary>7.9 지수 연산자</summary>

좌항의 피연산자를 밑(base)으로, 우항의 피연산자를 지수(exponent)로 거듭 제곱하여 숫자 값을 반환함

```jsx
console.log(3 ** 4);
// Expected output: 81

console.log(10 ** -2);
// Expected output: 0.01

console.log(2 ** (3 ** 2));
// Expected output: 512

console.log((2 ** 3) ** 2);
// Expected output: 64
```

음수를 거듭제곱의 밑으로 사용하여 계산하려면 괄호로 묶어야 함

```jsx
(-2) ** 2; // 4
```

</details>
<details>
<summary>7.10 그 외의 연산자</summary>

| 연산자     | 개요                                                        |
| ---------- | ----------------------------------------------------------- |
| ?.         | 옵셔널 체이닝 연산자                                        |
| ??         | null 병합 연산자                                            |
| delete     | 프로퍼티 삭제                                               |
| new        | 생성자 함수를 호출할 때 사용하여 인스턴스를 생성            |
| instanceof | 좌변의 객체가 우변의 생성자 함수와 연결된 인스턴스인지 판별 |
| in         | 프로퍼티 존재 확인                                          |

</details>
<details>
<summary>7.11 연산자의 부수 효과</summary>

부수 효과 가 있는 연산자 : 할당 연산자, 증가/감소 연산자, delete 연산자

</details>
<details>
<summary>7.12 연산자 우선순위</summary>

| 우선순위 | 연산자 유형                                                                                                                                                                    | 결합성   | 연산자         |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | -------------- | --- | --- |
| 19       | [그룹](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Grouping)                                                                                      | 없음     | ( … )          |
| 18       | [멤버접근](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Property_accessors#%EC%A0%90_%ED%91%9C%EA%B8%B0%EB%B2%95)                                  | 좌결합성 | … . …          |
|          | [계산된 멤버 접근](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Property_accessors#%EA%B4%84%ED%98%B8_%ED%91%9C%EA%B8%B0%EB%B2%95)                 | 좌결합성 | … [ … ]        |
|          | [new (인자 리스트 제공)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/new)                                                                         | 없음     | new … ( … )    |
|          | [함수 호출](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Functions)                                                                                              | 좌결합성 | … ( … )        |
|          | [옵셔널 체이닝](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining)                                                                    | 좌결합성 | ?.             |
| 17       | [new (인자 리스트 생략)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/new)                                                                         | 우결합성 | new …          |
| 16       | [후위 증가](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Increment)                                                                                | 없음     | … ++           |
|          | [후위 감소](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Decrement)                                                                                |          | … --           |
| 15       | [논리 NOT](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Logical_NOT)                                                                               | 우결합성 | ! …            |
|          | [비트 NOT](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT)                                                                               |          | ~ …            |
|          | [단항 양부호](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Unary_plus)                                                                             |          | + …            |
|          | [단항 부정](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Unary_negation)                                                                           |          | - …            |
|          | [전위 증가](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Increment)                                                                                |          | ++ …           |
|          | [전위 감소](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Decrement)                                                                                |          | -- …           |
|          | [typeof](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/typeof)                                                                                      |          | typeof …       |
|          | [void](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/void)                                                                                          |          | void …         |
|          | [delete](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/deletehttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) |          | delete …       |
|          | [await](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/await)                                                                                        |          | await …        |
| 14       | [거듭제곱](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Exponentiation)                                                                            | 우결합성 | … \*\* …       |
| 13       | [곱하기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Multiplication)                                                                              | 좌결합성 | … \* …         |
|          | [나누기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Division)                                                                                    |          | … / …          |
|          | [나머지](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Remainder)                                                                                   |          | … % …          |
| 12       | [더하기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Addition)                                                                                    | 좌결합성 | … + …          |
|          | [빼기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Subtraction)                                                                                   |          | … - …          |
| 11       | [비트 왼쪽 시프트](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Left_shift)                                                                        | 좌결합성 | … << …         |
|          | [비트 오른쪽 시프트](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift)                                                                  |          | … >> …         |
|          | [비트 부호 없는 오른쪽 시프트](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)                                               |          | … >>> …        |
| 10       | [미만](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than)                                                                                  | 좌결합성 | … < …          |
|          | [이하](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)                                                                         |          | … <= …         |
|          | [초과](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than)                                                                               |          | … > …          |
|          | [이상](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)                                                                      |          | … >= …         |
|          | [in](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/in)                                                                                              |          | … in …         |
|          | [instanceof](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/instanceof)                                                                              |          | … instanceof … |
| 9        | [동등](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Equality)                                                                                      | 좌결합성 | … == …         |
|          | [부등](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Inequality)                                                                                    |          | … != …         |
|          | [일치](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)                                                                            |          | … === …        |
|          | [불일치](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality)                                                                        |          | … !== …        |
| 7        | [비트 AND](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)                                                                               | 좌결합성 | … & …          |
| 7        | [비트 XOR](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR)                                                                            | 좌결합성 | … ^ …          |
| 6        | [비트 OR](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)                                                                              | 좌결합성 | …              | …   |
| 5        | [논리 AND](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Logical_AND)                                                                               | 좌결합성 | … && …         |
| 4        | [논리 OR](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Logical_OR)                                                                                 | 좌결합성 | …              |     | …   |
|          | [널 병합 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)                                                                  | 좌결합성 | … ?? …         |
| 3        | [조건(삼항)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_operator)                                                                    | 우결합성 | … ? … : …      |
| 2        | [할당](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Assignment_operators)                                                                       | 우결합성 | … = …          |
|          |                                                                                                                                                                                |          | … += …         |
|          |                                                                                                                                                                                |          | … -= …         |
|          |                                                                                                                                                                                |          | … \*\*= …      |
|          |                                                                                                                                                                                |          | … \*= …        |
|          |                                                                                                                                                                                |          | … /= …         |
|          |                                                                                                                                                                                |          | … %= …         |
|          |                                                                                                                                                                                |          | … <<= …        |
|          |                                                                                                                                                                                |          | … >>= …        |
|          |                                                                                                                                                                                |          | … >>>= …       |
|          |                                                                                                                                                                                |          | … &= …         |
|          |                                                                                                                                                                                |          | … ^= …         |
|          |                                                                                                                                                                                |          | …              | = … |
|          |                                                                                                                                                                                |          | … &&= …        |
|          |                                                                                                                                                                                |          | …              |     | = … |
|          |                                                                                                                                                                                |          | … ??= …        |
|          | [yield](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/yield)                                                                                        | 우결합성 | yield …        |
|          | [yield\*](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/yield*)                                                                                     |          | yield\* …      |
| 1        | [쉼표/시컨스](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Comma_operator)                                                                         | 좌결합성 | … , …          |

</details>
<details>
<summary>7.13 연산자 결합 순서</summary>

</details>
</details>

<details>
<summary>▣ 08장: 제어문</summary>

<details>
<summary>8.1 블록문</summary>

**블록문(block statement), 코드 블록, 블록**

- 0개 이상의 문을 중괄호로 묶은 것
- 자체 종결성을 갖고 있어서 블록문 끝에 세미콜론을 붙이지 않음
</details>
<details>
<summary>8.2 조건문</summary>

**조건문(conditional statement)**

- 조건식의 평가 결과에 따라 코드 블록을 실행을 결정하는 문
- 조건식(conditional expression) : 블리언 값으로 평가될 수 있는 표현식

<details>
<summary>8.2.1 if...else 문</summary>

```jsx
if (조건식) {
  // 조건식이 참이면 실행
} else if (조건식2) {
  // 조건식2가 참이면 실행
} else {
  // 조건식과 조건식2가 모두 거짓이면 실행
}
```

</details>
<details>
<summary>8.2.2 switch 문</summary>

```jsx
switch (표현식) {
  case 표현식1:
    // 실행문
    break;
  case 표현식2:
    // 실행문
    break;
  case 표현식3:
    // 실행문
    break;
  default:
  // 실행문
}
```

</details>
</details>
<details>
<summary>8.3 반복문</summary>

**반복문(loop statement)**

- 조건식의 평가 결과가 참인 경우 코드 블록을 실행
- 그 후 조건식을 다시 평가하여 여전히 참인 경우 코드 블록 다시 실행
- 조건식이 거짓이 될 때까지 반복함
<details>
<summary>8.3.1 for 문</summary>

```jsx
for(변수 선언문 or 할당문; 조건식; 증감식){
	// 조건식이 참인 경우 실행될 문
}
```

</details>
<details>
<summary>8.3.2 while 문</summary>

```jsx
변수 선언문

while(조건식){
	// 조건식이 참인 경우 실행될 문
	// 증감식
}
```

</details>
<details>
<summary>8.3.3 do...while 문</summary>

```jsx
변수 선언문

do{
	// 조건식이 참인 경우 실행될 문
	// 증감식
}while(조건식)
```

</details>
</details>
<details>
<summary>8.4 break 문</summary>

**break 문**

- 레이블 문, 반복문, switch 문의 코드 블록에서 탈출하게 하는 문
</details>
<details>
<summary>8.5 continue 문</summary>

**continue 문**

반복문의 코드 블록 실행을 현 지점에서 중단하고 반복문의 증감식으로 실행 흐름을 이동시키는 문

</details>
<details>
<summary>추가 lable 문</summary>

**lable 문** ([참조](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/label))

- 식별자가 붙은 문
- break나 continue와 함께 사용 가능

```jsx
label: statement;
```

- for문에서 레이블 continue 사용

  ```jsx
  var i, j;

  loop1: for (i = 0; i < 3; i++) {
    //첫번째 for문은 "loop1" 레이블을 붙였다.
    loop2: for (j = 0; j < 3; j++) {
      //두번째 for문은 "loop2" 레이블을 붙였다.
      if (i === 1 && j === 1) {
        continue loop1;
      }
      console.log("i = " + i + ", j = " + j);
    }
  }

  // 출력 결과:
  //   "i = 0, j = 0"
  //   "i = 0, j = 1"
  //   "i = 0, j = 2"
  //   "i = 1, j = 0"
  //   "i = 2, j = 0"
  //   "i = 2, j = 1"
  //   "i = 2, j = 2"
  // 다음 두 경우를 어떻게 스킵하는지 주목 : "i = 1, j = 1", "i = 1, j = 2"
  ```

- for문에 레이블 break문 사용하기
  ```jsx
  var i, j;

      loop1: for (i = 0; i < 3; i++) {
        //The first for statement is labeled "loop1"
        loop2: for (j = 0; j < 3; j++) {
          //The second for statement is labeled "loop2"
          if (i === 1 && j === 1) {
            break loop1;
          }
          console.log("i = " + i + ", j = " + j);
        }
      }

      // Output is:
      //   "i = 0, j = 0"
      //   "i = 0, j = 1"
      //   "i = 0, j = 2"
      //   "i = 1, j = 0"
      // Notice the difference with the previous continue example

      ```

  </details>
  </details>

<details>
<summary>▣ 09장: 타입 변환과 단축 평가</summary>


</details>

### 9.2 암묵적 타입 변환

#### 9.2.1 문자열 타입으로 변환

#### 9.2.2 숫자 타입으로 변환

#### 9.2.3 불리언 타입으로 변환

### 9.3 명시적 타입 변환

#### 9.3.1 문자열 타입으로 변환

#### 9.3.2 숫자 타입으로 변환

#### 9.3.3 불리언 타입으로 변환

### 9.4 단축 평가

#### 9.4.1 논리 연산자를 사용한 단축 평가

#### 9.4.2 옵셔널 체이닝 연산자

#### 9.4.3 null 병합 연산자

## ▣ 10장: 객체 리터럴

### 10.1 객체란?

### 10.2 객체 리터럴에 의한 객체 생성

### 10.3 프로퍼티

### 10.4 메서드

### 10.5 프로퍼티 접근

### 10.6 프로퍼티 값 갱신

### 10.7 프로퍼티 동적 생성

### 10.8 프로퍼티 삭제

### 10.9 ES6에서 추가된 객체 리터럴의 확장 기능

#### 10.9.1 프로퍼티 축약 표현

#### 10.9.2 계산된 프로퍼티 이름

#### 10.9.3 메서드 축약 표현

## ▣ 11장: 원시 값과 객체의 비교

### 11.1 원시 값

#### 11.1.1 변경 불가능한 값

#### 11.1.2 문자열과 불변성

#### 11.1.3 값에 의한 전달

### 11.2 객체

#### 11.2.1 변경 가능한 값

#### 11.2.2 참조에 의한 전달

## ▣ 12장: 함수

### 12.1 함수란?

### 12.2 함수를 사용하는 이유

### 12.3 함수 리터럴

### 12.4 함수 정의

#### 12.4.1 함수 선언문

#### 12.4.2 함수 표현식

#### 12.4.3 함수 생성 시점과 함수 호이스팅

#### 12.4.4 Function 생성자 함수

#### 12.4.5 화살표 함수

### 12.5 함수 호출

#### 12.5.1 매개변수와 인수

#### 12.5.2 인수 확인

#### 12.5.3 매개변수의 최대 개수

#### 12.5.4 반환문

### 12.6 참조에 의한 전달과 외부 상태의 변경

### 12.7 다양한 함수의 형태

#### 12.7.1 즉시 실행 함수

#### 12.7.2 재귀 함수

#### 12.7.3 중첩 함수

#### 12.7.4 콜백 함수

#### 12.7.5 순수 함수와 비순수 함수

## ▣ 13장: 스코프

### 13.1 스코프란?

### 13.2 스코프의 종류

#### 13.2.1 전역과 전역 스코프

#### 13.2.2 지역과 지역 스코프

### 13.3 스코프 체인

#### 13.3.1 스코프 체인에 의한 변수 검색

#### 13.3.2 스코프 체인에 의한 함수 검색

### 13.4 함수 레벨 스코프

### 13.5 렉시컬 스코프

## ▣ 14장: 전역 변수의 문제점

### 14.1 변수의 생명 주기

#### 14.1.1 지역 변수의 생명 주기

#### 14.1.2 전역 변수의 생명 주기

### 14.2 전역 변수의 문제점

### 14.3 전역 변수의 사용을 억제하는 방법

#### 14.3.1 즉시 실행 함수

#### 14.3.2 네임스페이스 객체

#### 14.3.3 모듈 패턴

#### 14.3.4 ES6 모듈

## ▣ 15장: let, const 키워드와 블록 레벨 스코프

### 15.1 var 키워드로 선언한 변수의 문제점

#### 15.1.1 변수 중복 선언 허용

#### 15.1.2 함수 레벨 스코프

#### 15.1.3 변수 호이스팅

### 15.2 let 키워드

#### 15.2.1 변수 중복 선언 금지

#### 15.2.2 블록 레벨 스코프

#### 15.2.3 변수 호이스팅

#### 15.2.4 전역 객체와 let

### 15.3 const 키워드

#### 15.3.1 선언과 초기화

#### 15.3.2 재할당 금지

#### 15.3.3 상수

#### 15.3.4 const 키워드와 객체

### 15.4 var vs. let vs. const

## ▣ 16장: 프로퍼티 어트리뷰트

### 16.1 내부 슬롯과 내부 메서드

### 16.2 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체

### 16.3 데이터 프로퍼티와 접근자 프로퍼티

#### 16.3.1 데이터 프로퍼티

#### 16.3.2 접근자 프로퍼티

### 16.4 프로퍼티 정의

### 16.5 객체 변경 방지

#### 16.5.1 객체 확장 금지

#### 16.5.2 객체 밀봉

#### 16.5.3 객체 동결

#### 16.5.4 불변 객체

## ▣ 17장: 생성자 함수에 의한 객체 생성

### 17.1 Object 생성자 함수

### 17.2 생성자 함수

#### 17.2.1 객체 리터럴에 의한 객체 생성 방식의 문제점

#### 17.2.2 생성자 함수에 의한 객체 생성 방식의 장점

#### 17.2.3 생성자 함수의 인스턴스 생성 과정

#### 17.2.4 내부 메서드 \[\[Call\]\]과 \[\[Construct\]\]

#### 17.2.5 constructor와 non-constructor의 구분

#### 17.2.6 new 연산자

#### 17.2.7 new.target

## ▣ 18장: 함수와 일급 객체

### 18.1 일급 객체

### 18.2 함수 객체의 프로퍼티

#### 18.2.1 arguments 프로퍼티

#### 18.2.2 caller 프로퍼티

#### 18.2.3 length 프로퍼티

#### 18.2.4 name 프로퍼티

#### 18.2.5 **proto** 접근자 프로퍼티

#### 18.2.6 prototype 프로퍼티

## ▣ 19장: 프로토타입

### 19.1 객체지향 프로그래밍

### 19.2 상속과 프로토타입

### 19.3 프로토타입 객체

#### 19.3.1 **proto** 접근자 프로퍼티

#### 19.3.2 함수 객체의 prototype 프로퍼티

#### 19.3.3 프로토타입의 constructor 프로퍼티와 생성자 함수

### 19.4 리터럴 표기법에 의해 생성된 객체의 생성자 함수와 프로토타입

### 19.5 프로토타입의 생성 시점

#### 19.5.1 사용자 정의 생성자 함수와 프로토타입 생성 시점

#### 19.5.2 빌트인 생성자 함수와 프로토타입 생성 시점

### 19.6 객체 생성 방식과 프로토타입의 결정

#### 19.6.1 객체 리터럴에 의해 생성된 객체의 프로토타입

#### 19.6.2 Object 생성자 함수에 의해 생성된 객체의 프로토타입

#### 19.6.3 생성자 함수에 의해 생성된 객체의 프로토타입

### 19.7 프로토타입 체인

### 19.8 오버라이딩과 프로퍼티 섀도잉

### 19.9 프로토타입의 교체

#### 19.9.1 생성자 함수에 의한 프로토타입의 교체

#### 19.9.2 인스턴스에 의한 프로토타입의 교체

### 19.10 instanceof 연산자

### 19.11 직접 상속

#### 19.11.1 Object.create에 의한 직접 상속

#### 19.11.2 객체 리터럴 내부에서 **proto**에 의한 직접 상속

### 19.12 정적 프로퍼티/메서드

### 19.13 프로퍼티 존재 확인

#### 19.13.1 in 연산자

#### 19.13.2 Object.prototype.hasOwnProperty 메서드

### 19.14 프로퍼티 열거

#### 19.14.1 for...in 문

#### 19.14.2 Object.keys/values/entries 메서드

## ▣ 20장: strict mode

### 20.1 strict mode란?

### 20.2 strict mode의 적용

### 20.3 전역에 strict mode를 적용하는 것은 피하자

### 20.4 함수 단위로 strict mode를 적용하는 것도 피하자

### 20.5 strict mode가 발생시키는 에러

#### 20.5.1 암묵적 전역

#### 20.5.2 변수, 함수, 매개변수의 삭제

#### 20.5.3 매개변수 이름의 중복

#### 20.5.4 with 문의 사용

### 20.6 strict mode 적용에 의한 변화

#### 20.6.1 일반 함수의 this

#### 20.6.2 arguments 객체

## ▣ 21장: 빌트인 객체

### 21.1 자바스크립트 객체의 분류

### 21.2 표준 빌트인 객체

### 21.3 원시값과 래퍼 객체

### 21.4 전역 객체

#### 21.4.1 빌트인 전역 프로퍼티

#### 21.4.2 빌트인 전역 함수

#### 21.4.3 암묵적 전역

## ▣ 22장: this

### 22.1 this 키워드

### 22.2 함수 호출 방식과 this 바인딩

#### 22.2.1 일반 함수 호출

#### 22.2.2 메서드 호출

#### 22.2.3 생성자 함수 호출

#### 22.2.4 Function.prototype.apply/call/bind 메서드에 의한 간접 호출

## ▣ 23장: 실행 컨텍스트

### 23.1 소스코드의 타입

### 23.2 소스코드의 평가와 실행

### 23.3 실행 컨텍스트의 역할

### 23.4 실행 컨텍스트 스택

### 23.5 렉시컬 환경

### 23.6 실행 컨텍스트의 생성과 식별자 검색 과정

#### 23.6.1 전역 객체 생성

#### 23.6.2 전역 코드 평가

#### 23.6.3 전역 코드 실행

#### 23.6.4 foo 함수 코드 평가

#### 23.6.5 foo 함수 코드 실행

#### 23.6.6 bar 함수 코드 평가

#### 23.6.7 bar 함수 코드 실행

#### 23.6.8 bar 함수 코드 실행 종료

#### 23.6.9 foo 함수 코드 실행 종료

#### 23.6.10 전역 코드 실행 종료

### 23.7 실행 컨텍스트와 블록 레벨 스코프

## ▣ 24장: 클로저

### 24.1 렉시컬 스코프

### 24.2 함수 객체의 내부 슬롯 [[Environment]]

### 24.3 클로저와 렉시컬 환경

### 24.4 클로저의 활용

### 24.5 캡슐화와 정보 은닉

### 24.6 자주 발생하는 실수

## ▣ 25장: 클래스

### 25.1 클래스는 프로토타입의 문법적 설탕인가?

### 25.2 클래스 정의

### 25.3 클래스 호이스팅

### 25.4 인스턴스 생성

### 25.5 메서드

#### 25.5.1 constructor

#### 25.5.2 프로토타입 메서드

#### 25.5.3 정적 메서드

#### 25.5.4 정적 메서드와 프로토타입 메서드의 차이

#### 25.5.5 클래스에서 정의한 메서드의 특징

### 25.6 클래스의 인스턴스 생성 과정

### 25.7 프로퍼티

#### 25.7.1 인스턴스 프로퍼티

#### 25.7.2 접근자 프로퍼티

#### 25.7.3 클래스 필드 정의 제안

#### 25.7.4 private 필드 정의 제안

#### 25.7.5 static 필드 정의 제안

### 25.8 상속에 의한 클래스 확장

#### 25.8.1 클래스 상속과 생성자 함수 상속

#### 25.8.2 extends 키워드

#### 25.8.3 동적 상속

#### 25.8.4 서브클래스의 constructor

#### 25.8.5 super 키워드

#### 25.8.6 상속 클래스의 인스턴스 생성 과정

#### 25.8.7 표준 빌트인 생성자 함수 확장

## ▣ 26장: ES6 함수의 추가 기능

### 26.1 함수의 구분

### 26.2 메서드

### 26.3 화살표 함수

#### 26.3.1 화살표 함수 정의

#### 26.3.2 화살표 함수와 일반 함수의 차이

#### 26.3.3 this

#### 26.3.4 super

#### 26.3.5 arguments

### 26.4 Rest 파라미터

#### 26.4.1 기본 문법

#### 26.4.2 Rest 파라미터와 arguments 객체

### 26.5 매개변수 기본값

## ▣ 27장: 배열

### 27.1 배열이란?

### 27.2 자바스크립트 배열은 배열이 아니다

### 27.3 length 프로퍼티와 희소 배열

### 27.4 배열 생성

#### 27.4.1 배열 리터럴

#### 27.4.2 Array 생성자 함수

#### 27.4.3 Array.of

#### 27.4.4 Array.from

### 27.5 배열 요소의 참조

### 27.6 배열 요소의 추가와 갱신

### 27.7 배열 요소의 삭제

### 27.8 배열 메서드

#### 27.8.1 Array.isArray

#### 27.8.2 Array.prototype.indexOf

#### 27.8.3 Array.prototype.push

#### 27.8.4 Array.prototype.pop

#### 27.8.5 Array.prototype.unshift

#### 27.8.6 Array.prototype.shift

#### 27.8.7 Array.prototype.concat

#### 27.8.8 Array.prototype.splice

#### 27.8.9 Array.prototype.slice

#### 27.8.10 Array.prototype.join

#### 27.8.11 Array.prototype.reverse

#### 27.8.12 Array.prototype.fill

#### 27.8.13 Array.prototype.includes

#### 27.8.14 Array.prototype.flat

### 27.9 배열 고차 함수

#### 27.9.1 Array.prototype.sort

#### 27.9.2 Array.prototype.forEach

#### 27.9.3 Array.prototype.map

#### 27.9.4 Array.prototype.filter

#### 27.9.5 Array.prototype.reduce

#### 27.9.6 Array.prototype.some

#### 27.9.7 Array.prototype.every

#### 27.9.8 Array.prototype.find

#### 27.9.9 Array.prototype.findIndex

#### 27.9.10 Array.prototype.flatMap

## ▣ 28장: Number

### 28.1 Number 생성자 함수

### 28.2 Number 프로퍼티

#### 28.2.1 Number.EPSILON

#### 28.2.2 Number.MAX_VALUE

#### 28.2.3 Number.MIN_VALUE

#### 28.2.4 Number.MAX_SAFE_INTEGER

#### 28.2.5 Number.MIN_SAFE_INTEGER

#### 28.2.6 Number.POSITIVE_INFINITY

#### 28.2.7 Number.NEGATIVE_INFINITY

#### 28.2.8 Number.NaN

### 28.3 Number 메서드

#### 28.3.1 Number.isFinite

#### 28.3.2 Number.isInteger

#### 28.3.3 Number.isNaN

#### 28.3.4 Number.isSafeInteger

#### 28.3.5 Number.prototype.toExponential

#### 28.3.6 Number.prototype.toFixed

#### 28.3.7 Number.prototype.toPrecision

#### 28.3.8 Number.prototype.toString

## ▣ 29장: Math

### 29.1 Math 프로퍼티

#### 29.1.1 Math.PI

### 29.2 Math 메서드

#### 29.2.1 Math.abs

#### 29.2.2 Math.round

#### 29.2.3 Math.ceil

#### 29.2.4 Math.floor

#### 29.2.5 Math.sqrt

#### 29.2.6 Math.random

#### 29.2.7 Math.pow

#### 29.2.8 Math.max

#### 29.2.9 Math.min

## ▣ 30장: Date

### 30.1 Date 생성자 함수

#### 30.1.1 new Date()

#### 30.1.2 new Date(milliseconds)

#### 30.1.3 new Date(dateString)

#### 30.1.4 new Date(year, month, day, hour, minute, second, millisecond)

### 30.2 Date 메서드

#### 30.2.1 Date.now

#### 30.2.2 Date.parse

#### 30.2.3 Date.UTC

#### 30.2.4 Date.prototype.getFullYear

#### 30.2.5 Date.prototype.setFullYear

#### 30.2.6 Date.prototype.getMonth

#### 30.2.7 Date.prototype.setMonth

#### 30.2.8 Date.prototype.getDate

#### 30.2.9 Date.prototype.setDate

#### 30.2.10 Date.prototype.getDay

#### 30.2.11 Date.prototype.getHours

#### 30.2.12 Date.prototype.setHours

#### 30.2.13 Date.prototype.getMinutes

#### 30.2.14 Date.prototype.setMinutes

#### 30.2.15 Date.prototype.getSeconds

#### 30.2.16 Date.prototype.setSeconds

#### 30.2.17 Date.prototype.getMilliseconds

#### 30.2.18 Date.prototype.setMilliseconds

#### 30.2.19 Date.prototype.getTime

#### 30.2.20 Date.prototype.setTime

#### 30.2.21 Date.prototype.getTimezoneOffset

#### 30.2.22 Date.prototype.toDateString

#### 30.2.23 Date.prototype.toTimeString

#### 30.2.24 Date.prototype.toISOString

#### 30.2.25 Date.prototype.toLocaleString

#### 30.2.26 Date.prototype.toLocaleTimeString

### 30.3 Date를 활용한 시계 예제

## ▣ 31장: RegExp

### 31.1 정규 표현식이란?

### 31.2 정규 표현식의 생성

### 31.3 RegExp 메서드

#### 31.3.1 RegExp.prototype.exec

#### 31.3.2 RegExp.prototype.test

#### 31.3.3 String.prototype.match

### 31.4 플래그

### 31.5 패턴

#### 31.5.1 문자열 검색

#### 31.5.2 임의의 문자열 검색

#### 31.5.3 반복 검색

#### 31.5.4 OR 검색

#### 31.5.5 NOT 검색

#### 31.5.6 시작 위치로 검색

#### 31.5.7 마지막 위치로 검색

### 31.6 자주 사용하는 정규표현식

#### 31.6.1 특정 단어로 시작하는지 검사

#### 31.6.2 특정 단어로 끝나는지 검사

#### 31.6.3 숫자로만 이루어진 문자열인지 검사

#### 31.6.4 하나 이상의 공백으로 시작하는지 검사

#### 31.6.5 아이디로 사용 가능한지 검사

#### 31.6.6 메일 주소 형식에 맞는지 검사

#### 31.6.7 핸드폰 번호 형식에 맞는지 검사

#### 31.6.8 특수 문자 포함 여부 검사

## ▣ 32장: String

### 32.1 String 생성자 함수

### 32.2 length 프로퍼티

### 32.3 String 메서드

#### 32.3.1 String.prototype.indexOf

#### 32.3.2 String.prototype.search

#### 32.3.3 String.prototype.includes

#### 32.3.4 String.prototype.startsWith

#### 32.3.5 String.prototype.endsWith

#### 32.3.6 String.prototype.charAt

#### 32.3.7 String.prototype.substring

#### 32.3.8 String.prototype.slice

#### 32.3.9 String.prototype.toUpperCase

#### 32.3.10 String.prototype.toLowerCase

#### 32.3.11 String.prototype.trim

#### 32.3.12 String.prototype.repeat

#### 32.3.13 String.prototype.replace

#### 32.3.14 String.prototype.split

## ▣ 33장: 7번째 데이터 타입 Symbol

### 33.1 심벌이란?

### 33.2 심벌 값의 생성

#### 33.2.1 Symbol 함수

#### 33.2.2 Symbol.for / Symbol.keyFor 메서드

### 33.3 심벌과 상수

### 33.4 심벌과 프로퍼티 키

### 33.5 심벌과 프로퍼티 은닉

### 33.6 심벌과 표준 빌트인 객체 확장

### 33.7 Well-known Symbol

## ▣ 34장: 이터러블

### 34.1 이터레이션 프로토콜

#### 34.1.1 이터러블

#### 34.1.2 이터레이터

### 34.2 빌트인 이터러블

### 34.3 for...of 문

### 34.4 이터러블과 유사 배열 객체

### 34.5 이터레이션 프로토콜의 필요성

### 34.6 사용자 정의 이터러블

#### 34.6.1 사용자 정의 이터러블 구현

#### 34.6.2 이터러블을 생성하는 함수

#### 34.6.3 이터러블이면서 이터레이터인 객체를 생성하는 함수

#### 34.6.4 무한 이터러블과 지연 평가

## ▣ 35장: 스프레드 문법

### 35.1 함수 호출문의 인수 목록에서 사용하는 경우

### 35.2 배열 리터럴 내부에서 사용하는 경우

#### 35.2.1 concat

#### 35.2.2 splice

#### 35.2.3 배열 복사

#### 35.2.4 이터러블을 배열로 변환

### 35.3 객체 리터럴 내부에서 사용하는 경우

## ▣ 36장: 디스트럭처링 할당

### 36.1 배열 디스트럭처링 할당

### 36.2 객체 디스트럭처링 할당

## ▣ 37장: Set과 Map

### 37.1 Set

#### 37.1.1 Set 객체의 생성

#### 37.1.2 요소 개수 확인

#### 37.1.3 요소 추가

#### 37.1.4 요소 존재 여부 확인

#### 37.1.5 요소 삭제

#### 37.1.6 요소 일괄 삭제

#### 37.1.7 요소 순회

#### 37.1.8 집합 연산

### 37.2 Map

#### 37.2.1 Map 객체의 생성

#### 37.2.2 요소 개수 확인

#### 37.2.3 요소 추가

#### 37.2.4 요소 취득

#### 37.2.5 요소 존재 여부 확인

#### 37.2.6 요소 삭제

#### 37.2.7 요소 일괄 삭제

#### 37.2.8 요소 순회

## ▣ 38장: 브라우저의 렌더링 과정

### 38.1 요청과 응답

### 38.2 HTTP 1.1과 HTTP 2.0

### 38.3 HTML 파싱과 DOM 생성

### 38.4 CSS 파싱과 CSSOM 생성

### 38.5 렌더 트리 생성

### 38.6 자바스크립트 파싱과 실행

### 38.7 리플로우와 리페인트

### 38.8 자바스크립트 파싱에 의한 HTML 파싱 중단

### 38.9 script 태그의 async/defer 어트리뷰트

## ▣ 39장: DOM

### 39.1 노드

#### 39.1.1 HTML 요소와 노드 객체

#### 39.1.2 노드 객체의 타입

#### 39.1.3 노드 객체의 상속 구조

### 39.2 요소 노드 취득

#### 39.2.1 id를 이용한 요소 노드 취득

#### 39.2.2 태그 이름을 이용한 요소 노드 취득

#### 39.2.3 class를 이용한 요소 노드 취득

#### 39.2.4 CSS 선택자를 이용한 요소 노드 취득

#### 39.2.5 특정 요소 노드를 취득할 수 있는지 확인

#### 39.2.6 HTMLCollection과 NodeList

### 39.3 노드 탐색

#### 39.3.1 공백 텍스트 노드

#### 39.3.2 자식 노드 탐색

#### 39.3.3 자식 노드 존재 확인

#### 39.3.4 요소 노드의 텍스트 노드 탐색

#### 39.3.5 부모 노드 탐색

#### 39.3.6 형제 노드 탐색

### 39.4 노드 정보 취득

### 39.5 요소 노드의 텍스트 조작

#### 39.5.1 nodeValue

#### 39.5.2 textContent

### 39.6 DOM 조작

#### 39.6.1 innerHTML

#### 39.6.2 insertAdjacentHTML 메서드

#### 39.6.3 노드 생성과 추가

#### 39.6.4 복수의 노드 생성과 추가

#### 39.6.5 노드 삽입

#### 39.6.6 노드 이동

#### 39.6.7 노드 복사

#### 39.6.8 노드 교체

#### 39.6.9 노드 삭제

### 39.7 어트리뷰트

#### 39.7.1 어트리뷰트 노드와 attributes 프로퍼티

#### 39.7.2 HTML 어트리뷰트 조작

#### 39.7.3 HTML 어트리뷰트 vs. DOM 프로퍼티

#### 39.7.4 data 어트리뷰트와 dataset 프로퍼티

### 39.8 스타일

#### 39.8.1 인라인 스타일 조작

#### 39.8.2 클래스 조작

#### 39.8.3 요소에 적용되어 있는 CSS 스타일 참조

### 39.9 DOM 표준

## ▣ 40장: 이벤트

### 40.1 이벤트 드리븐 프로그래밍

### 40.2 이벤트 타입

#### 40.2.1 마우스 이벤트

#### 40.2.2 키보드 이벤트

#### 40.2.3 포커스 이벤트

#### 40.2.4 폼 이벤트

#### 40.2.5 값 변경 이벤트

#### 40.2.6 DOM 뮤테이션 이벤트

#### 40.2.7 뷰 이벤트

#### 40.2.8 리소스 이벤트

### 40.3 이벤트 핸들러 등록

#### 40.3.1 이벤트 핸들러 어트리뷰트 방식

#### 40.3.2 이벤트 핸들러 프로퍼티 방식

#### 40.3.3 addEventListener 메서드 방식

### 40.4 이벤트 핸들러 제거

### 40.5 이벤트 객체

#### 40.5.1 이벤트 객체의 상속 구조

#### 40.5.2 이벤트 객체의 공통 프로퍼티

#### 40.5.3 마우스 정보 취득

#### 40.5.4 키보드 정보 취득

### 40.6 이벤트 전파

### 40.7 이벤트 위임

### 40.8 DOM 요소의 기본 동작의 조작

#### 40.8.1 DOM 요소의 기본 동작 중단

#### 40.8.2 이벤트 전파 방지

### 40.9 이벤트 핸들러 내부의 this

#### 40.9.1 이벤트 핸들러 어트리뷰트 방식

#### 40.9.2 이벤트 핸들러 프로퍼티 방식과 addEventListener 메서드 방식

### 40.10 이벤트 핸들러에 인수 전달

### 40.11 커스텀 이벤트

#### 40.11.1 커스텀 이벤트 생성

#### 40.11.2 커스텀 이벤트 디스패치

## ▣ 41장: 타이머

### 41.1 호출 스케줄링

### 41.2 타이머 함수

#### 41.2.1 setTimeout / clearTimeout

#### 41.2.2 setInterval / clearInterval

### 41.3 디바운스와 스로틀

#### 41.3.1 디바운스

#### 41.3.2 스로틀

## ▣ 42장: 비동기 프로그래밍

### 42.1 동기 처리와 비동기 처리

### 42.2 이벤트 루프와 태스크 큐

## ▣ 43장: Ajax

### 43.1 Ajax란?

### 43.2 JSON

#### 43.2.1 JSON 표기 방식

#### 43.2.2 JSON.stringify

#### 43.2.3 JSON.parse

### 43.3 XMLHttpRequest

#### 43.3.1 XMLHttpRequest 객체 생성

#### 43.3.2 XMLHttpRequest 객체의 프로퍼티와 메서드

#### 43.3.3 HTTP 요청 전송

#### 43.3.4 HTTP 응답 처리

## ▣ 44장: REST API

### 44.1 REST API의 구성

### 44.2 REST API 설계 원칙

### 44.3 JSON Server를 이용한 REST API 실습

#### 44.3.1 JSON Server 설치

#### 44.3.2 db.json 파일 생성

#### 44.3.3 JSON Server 실행

#### 44.3.4 GET 요청

#### 44.3.5 POST 요청

#### 44.3.6 PUT 요청

#### 44.3.7 PATCH 요청

#### 44.3.8 DELETE 요청

## ▣ 45장: 프로미스

### 45.1 비동기 처리를 위한 콜백 패턴의 단점

#### 45.1.1 콜백 헬

#### 45.1.2 에러 처리의 한계

### 45.2 프로미스의 생성

### 45.3 프로미스의 후속 처리 메서드

#### 45.3.1 Promise.prototype.then

#### 45.3.2 Promise.prototype.catch

#### 45.3.3 Promise.prototype.finally

### 45.4 프로미스의 에러 처리

### 45.5 프로미스 체이닝

### 45.6 프로미스의 정적 메서드

#### 45.6.1 Promise.resolve / Promise.reject

#### 45.6.2 Promise.all

#### 45.6.3 Promise.race

#### 45.6.4 Promise.allSettled

### 45.7 마이크로태스크 큐

### 45.8 fetch

## ▣ 46장: 제너레이터와 async/await

### 46.1 제너레이터란?

### 46.2 제너레이터 함수의 정의

### 46.3 제너레이터 객체

### 46.4 제너레이터의 일시 중지와 재개

### 46.5 제너레이터의 활용

#### 46.5.1 이터러블의 구현

#### 46.5.2 비동기 처리

### 46.6 async/await

#### 46.6.1 async 함수

#### 46.6.2 await 키워드

#### 46.6.3 에러 처리

## ▣ 47장: 에러 처리

### 47.1 에러 처리의 필요성

### 47.2 try...catch...finally 문

### 47.3 Error 객체

### 47.4 throw 문

### 47.5 에러의 전파

## ▣ 48장: 모듈

### 48.1 모듈의 일반적 의미

### 48.2 자바스크립트와 모듈

### 48.3 ES6 모듈(ESM)

#### 48.3.1 모듈 스코프

#### 48.3.2 export 키워드

#### 48.3.3 import 키워드

## ▣ 49장: Babel과 Webpack을 이용한 ES6+/ES.NEXT 개발 환경 구축

### 49.1 Babel

#### 49.1.1 Babel 설치

#### 49.1.2 Babel 프리셋 설치와 babel.config.json 설정 파일 작성

#### 49.1.3 트랜스파일링

#### 49.1.4 Babel 플러그인 설치

#### 49.1.5 브라우저에서 모듈 로딩 테스트

### 49.2 Webpack

#### 49.2.1 Webpack 설치

#### 49.2.2 babel-loader 설치

#### 49.2.3 webpack.config.js 설정 파일 작성

#### 49.2.4 babel-polyfill 설치
