<details>
<summary>▣ 30장: Date</summary>

날짜와 시간(연, 월, 일, 시, 분, 초, 밀리초)을 위한 메서드를 제공하는 빌트인 객체이면서 생성자 함수

- 현재 날짜와 시간은 자바스크립트 코드가 실행된 시스템의 시계에 의해 결정
  - UTC(Coordinated Universal Time) : 국제 표준시
  - KST(Korea Standard Time) : UTC + 9시간

<details>
<summary>30.1 Date 생성자 함수</summary>

- Date 생성자 함수로 생성한 Date 객체는 내부적으로 날짜와 시간을 나타내는 정수값을 가짐
- 해당 정수값을 1970년 1월 1일 00:00:00(UTC)을 기점으로 Date객체가 나타내는 날짜와 시간까지의 밀리초를 나타냄
- Date 생성자 함수로 생성한 Date 객체는 기본적으로 현재 날짜와 시간을 나타내는 정수값을 가짐
- 다른 날짜와 시간을 다루고 싶은 경우 Date 생성자 함수에 명시적으로 해당 날짜와 시간 정보를 인수로 설정해야 함

**Date 생성자 함수로 객체를 생성하는 방법**

<details>
<summary>30.1.1 new Date()</summary>

Date 생성자 함수를 인수없이 new 연산자와 함께 호출하면 현재 날짜와 시간을 가지는 Date 객체를 반환함

Date 객체는 내부적으로는 날짜와 시간을 나타내는 정수값을 갖지만 Date 객체를 콘솔에 출력하면 기본적으로 날짜와 시간 정보를 출력함

```jsx
new Date(); // -> Mon Jul 06 2020 01:03:18 GMT+0900 (대한민국 표준시)
```

Date 생성자 함수를 new 연산자 없이 호출하면 Date 객체를 반환하지 않고 날짜와 시간 정보를 나타내는 문자열 반환

```jsx
Date(); // -> "Mon Jul 06 2020 01:10:47 GMT+0900 (대한민국 표준시)"
```

</details>

<details>
<summary>30.1.2 new Date(milliseconds)</summary>

Date 생성자 함수에 숫자 타입의 밀리초를 인수로 전달하면 1970년 1월 1일 00:00:00을 기점으로 인수로 전달된 밀리초만큼 경과한 날짜와 시간을 나타내는 Date 객체 반환

```jsx
// 한국 표준시 KST는 협정 세계시 UTC에 9시간을 더한 시간이다.
new Date(0); // -> Thu Jan 01 1970 09:00:00 GMT+0900 (대한민국 표준시)

/*
86400000ms는 1day를 의미한다.
1s = 1,000ms
1m = 60s * 1,000ms = 60,000ms
1h = 60m * 60,000ms = 3,600,000ms
1d = 24h * 3,600,000ms = 86,400,000ms
*/
new Date(86400000); // -> Fri Jan 02 1970 09:00:00 GMT+0900 (대한민국 표준시)
```

</details>

<details>
<summary>30.1.3 new Date(dateString)</summary>

Date 생성자 함수에 날짜와 시간을 나타내는 문자열을 인수로 전달하면 지정된 날짜와 시간을 나타내는 Date 객체를 반환함

인수로 전달한 문자열은 Date.parse 메서드에 의해 해석 가능한 형식이어야 함

```jsx
new Date("May 26, 2020 10:00:00");
// -> Tue May 26 2020 10:00:00 GMT+0900 (대한민국 표준시)

new Date("2020/03/26/10:00:00");
// -> Thu Mar 26 2020 10:00:00 GMT+0900 (대한민국 표준시)
```

</details>

<details>
<summary>30.1.4 new Date(year, month, day, hour, minute, second, millisecond)</summary>

Date 생성자 함수에 연, 월, 일, 시, 분, 초, 밀리초를 의미하는 숫자를 인수로 전달하면 지정된 날짜와 시간을 나타내는 Date 객체를 반환함

지정하지 않은 옵션 정보는 0 또는 1로 초기화됨

**인수**

| 인수                              | 내용                                            |
| --------------------------------- | ----------------------------------------------- |
| year                              | 연을 나타내느 1900년 이후의 정수.               |
| 0부터 99는 1900부터 1999로 처리됨 |
| month                             | 월을 나타내는 0~11까지의 정수(주의: 0부터 시작) |
| day                               | 일을 나타내는 1~31까지의 정수                   |
| hour                              | 시를 나타내는 0~23까지의 정수                   |
| minute                            | 분을 나타내는 0~59까지의 정수                   |
| second                            | 초를 나타내는 0~59까지의 정수                   |
| millisecond                       | 밀초를 나타내는 0~999까지의 정수                |

```jsx
// 월을 나타내는 2는 3월을 의미한다. 2020/3/1/00:00:00:00
new Date(2020, 2);
// -> Sun Mar 01 2020 00:00:00 GMT+0900 (대한민국 표준시)

// 월을 나타내는 2는 3월을 의미한다. 2020/3/26/10:00:00:00
new Date(2020, 2, 26, 10, 00, 00, 0);
// -> Thu Mar 26 2020 10:00:00 GMT+0900 (대한민국 표준시)

// 다음처럼 표현하면 가독성이 훨씬 좋다.
new Date("2020/3/26/10:00:00:00");
// -> Thu Mar 26 2020 10:00:00 GMT+0900 (대한민국 표준시)
```

</details>
</details>

<details>
<summary>30.2 Date 메서드</summary>

**1970년 1월 1일 00:00:00을 기점으로 현재 시간까지 경과한 밀리초**를 숫자로 변환

```jsx
const now = Date.now(); // -> 1593971539112

// Date 생성자 함수에 숫자 타입의 밀리초를 인수로 전달하면 1970년 1월 1일 00:00:00(UTC)을
// 기점으로 인수로 전달된 밀리초만큼 경과한 날짜와 시간을 나타내는 Date 객체를 반환한다.
// (30.1.2절 "new Date(milliseconds)" 참고)
new Date(now); // -> Mon Jul 06 2020 02:52:19 GMT+0900 (대한민국 표준시)
```

<details>
<summary>30.2.1 Date.now</summary>

**1970년 1월 1일 00:00:00을 기점으로 현재 시간까지 경과한 밀리초**를 숫자로 변환

```jsx
const now = Date.now(); // -> 1593971539112

// Date 생성자 함수에 숫자 타입의 밀리초를 인수로 전달하면 1970년 1월 1일 00:00:00(UTC)을
// 기점으로 인수로 전달된 밀리초만큼 경과한 날짜와 시간을 나타내는 Date 객체를 반환한다.
// (30.1.2절 "new Date(milliseconds)" 참고)
new Date(now); // -> Mon Jul 06 2020 02:52:19 GMT+0900 (대한민국 표준시)
```

</details>

<details>
<summary>30.2.2 Date.parse</summary>

**1970년 1월 1일 00:00:00을 기점으로 인수로 전달된 지정 시간 (new Date(dateString)의 인수와 동일한 형식)까지**의 밀리초를 숫자로 변환

```jsx
// UTC
Date.parse("Jan 2, 1970 00:00:00 UTC"); // -> 86400000

// KST
Date.parse("Jan 2, 1970 09:00:00"); // -> 86400000

// KST
Date.parse("1970/01/02/09:00:00"); // -> 86400000
```

</details>

<details>
<summary>30.2.3 Date.UTC</summary>

**1970년 1월 1일 00:00:00을 기점으로 인수로 전달된 지정 시간까지**의 밀리초를 숫자로 반환

Date.UTC 메서드는 new Date(year, month…)와 같은 형식의 인수를 사용해야 함

Date.UTC 메서드의 인수는 로컬 타임이 아닌 UTC로 인식됨

```jsx
Date.UTC(1970, 0, 2); // -> 86400000
Date.UTC("1970/1/2"); // -> NaN
```

</details>

<details>
<summary>30.2.4 Date.prototype.getFullYear</summary>

Date 객체의 연도를 나타내는 정수를 반환

```jsx
new Date("2020/07/24").getFullYear(); // -> 2020
```

</details>

<details>
<summary>30.2.5 Date.prototype.setFullYear</summary>

Date 객체에 연도를 나타내는 정수를 설정함

연도 이외에 옵션으로 월, 일도 설정 가능

```jsx
const today = new Date();

// 년도 지정
today.setFullYear(2000);
today.getFullYear(); // -> 2000

// 년도/월/일 지정
today.setFullYear(1900, 0, 1);
today.getFullYear(); // -> 1900
```

</details>

<details>
<summary>30.2.6 Date.prototype.getMonth</summary>

Date 객체의 월을 나타내는 0 ~ 11의 정수를 반환함

```jsx
new Date("2020/07/24").getMonth(); // -> 6
```

</details>

<details>
<summary>30.2.7 Date.prototype.setMonth</summary>

Date 객체에 월을 나타내는 0 ~ 11의 정수를 설정함

월 이외에 옵션으로 일도 설정 가능

```jsx
const today = new Date();

// 월 지정
today.setMonth(0); // 1월
today.getMonth(); // -> 0

// 월/일 지정
today.setMonth(11, 1); // 12월 1일
today.getMonth(); // -> 11
```

</details>

<details>
<summary>30.2.8 Date.prototype.getDate</summary>

Date 객체의 날짜를 나타내는 정수를 반환함

```jsx
new Date("2020/07/24").getDate(); // -> 24
```

</details>

<details>
<summary>30.2.9 Date.prototype.setDate</summary>

Date 객체에 날짜를 나타내는 정수를 설정함

```jsx
const today = new Date();

// 날짜 지정
today.setDate(1);
today.getDate(); // -> 1
```

</details>

<details>
<summary>30.2.10 Date.prototype.getDay</summary>

Date 객체의 요일(0 ~ 6)을 나타내는 정수를 반환함

```jsx
new Date("2020/07/24").getDay(); // -> 5
```

</details>

<details>
<summary>30.2.11 Date.prototype.getHours</summary>

Date 객체의 시간을 나타내는 정수를 반환함

```jsx
new Date("2020/07/24/12:00").getHours(); // -> 12
```

</details>

<details>
<summary>30.2.12 Date.prototype.setHours</summary>

Date 객체의 시간을 나타내는 정수를 설정함

시간 이외에 옵션으로 분, 초, 밀리초도 설정 가능

```jsx
const today = new Date();

// 시간 지정
today.setHours(7);
today.getHours(); // -> 7

// 시간/분/초/밀리초 지정
today.setHours(0, 0, 0, 0); // 00:00:00:00
today.getHours(); // -> 0
```

</details>

<details>
<summary>30.2.13 Date.prototype.getMinutes</summary>

Date 객체의 분을 나타내는 정수를 반환함 

```jsx
new Date('2020/07/24/12:30').getMinutes(); // -> 30
```
</details>

<details>
<summary>30.2.14 Date.prototype.setMinutes</summary>

Date 객체의 분을 나타내는 정수를 설정함 

분 이외에 옵션으로 초, 밀리초도 설정 가능 

```jsx
const today = new Date();

// 분 지정
today.setMinutes(50);
today.getMinutes(); // -> 50

// 분/초/밀리초 지정
today.setMinutes(5, 10, 999); // HH:05:10:999
today.getMinutes(); // -> 5
```
</details>

<details>
<summary>30.2.15 Date.prototype.getSeconds</summary>

Date 객체의 초을 나타내는 정수를 반환함 

```jsx
new Date('2020/07/24/12:30:10').getSeconds(); // -> 10
```
</details>

<details>
<summary>30.2.16 Date.prototype.setSeconds</summary>

Date 객체의 초을 나타내는 정수를 설정함 

초 이외에 옵션으로 밀리초도 설정 가능 

```jsx
const today = new Date();

// 초 지정
today.setSeconds(30);
today.getSeconds(); // -> 30

// 초/밀리초 지정
today.setSeconds(10, 0); // HH:MM:10:000
today.getSeconds(); // -> 10
```
</details>

<details>
<summary>30.2.17 Date.prototype.getMilliseconds</summary>

Date 객체의 밀리초을 나타내는 정수를 반환함 

```jsx
new Date('2020/07/24/12:30:10:150').getMilliseconds(); // -> 150
```
</details>

<details>
<summary>30.2.18 Date.prototype.setMilliseconds</summary>

Date 객체의 밀리초을 나타내는 정수를 설함 

```jsx
const today = new Date();

// 밀리초 지정
today.setMilliseconds(123);
today.getMilliseconds(); // -> 123
```
</details>

<details>
<summary>30.2.19 Date.prototype.getTime</summary>

1970년 1월 1일 00:00:00를 기점으로 Date 객체의 시간까지 경과된 밀리초를 반환함 

```jsx
new Date('2020/07/24/12:30').getTime(); // -> 1595561400000
```
</details>

<details>
<summary>30.2.20 Date.prototype.setTime</summary>

1970년 1월 1일 00:00:00를 기점으로 Date 객체의 시간까지 경과된 밀리초를 설정함 

```jsx
const today = new Date();

// 1970년 1월 1일 00:00:00(UTC)를 기점으로 경과된 밀리초 설정
today.setTime(86400000); // 86400000는 1day를 나타낸다.
console.log(today); // -> Fri Jan 02 1970 09:00:00 GMT+0900 (대한민국 표준시)
```
</details>

<details><summary>30.2.21 Date.prototype.getTimezoneOffset</summary>

UTC와 Date 객체에 지정된 로캘(locale) 시간과의 차이를 분 단위로 반환함 

KST는 UTC와 9시간을 더한 시간임 : UTC = KST - 9h 

```jsx
const today = new Date(); // today의 지정 로캘은 KST다.

//UTC와 today의 지정 로캘 KST와의 차이는 -9시간이다.
today.getTimezoneOffset() / 60; // -9
```
</details>

<details>
<summary>30.2.22 Date.prototype.toDateString</summary>

사람이 읽을 수 있는 형식의 문자열로 Date 객체의 날짜를 반환함 

```jsx
const today = new Date('2020/7/24/12:30');

today.toString();     // -> Fri Jul 24 2020 12:30:00 GMT+0900 (대한민국 표준시)
today.toDateString(); // -> Fri Jul 24 2020
```
</details>

<details>
<summary>30.2.23 Date.prototype.toTimeString</summary>

사람이 읽을 수 있는 형식으로  Date 객체의 시간을 표현한 문자열을 반환함 

```jsx
const today = new Date('2020/7/24/12:30');

today.toString();     // -> Fri Jul 24 2020 12:30:00 GMT+0900 (대한민국 표준시)
today.toTimeString(); // -> 12:30:00 GMT+0900 (대한민국 표준시)
```
</details>

<details>
<summary>30.2.24 Date.prototype.toISOString</summary>

ISO 8601 형식으로 Date 객체의 날짜와 시간을 표현한 문자열을 반환함 

```jsx
const today = new Date('2020/7/24/12:30');

today.toString();    // -> Fri Jul 24 2020 12:30:00 GMT+0900 (대한민국 표준시)
today.toISOString(); // -> 2020-07-24T03:30:00.000Z

today.toISOString().slice(0, 10); // -> 2020-07-24
today.toISOString().slice(0, 10).replace(/-/g, ''); // -> 20200724
```
</details>

<details>
<summary>30.2.25 Date.prototype.toLocaleString</summary>

인수로 전달한 로캘을 기준으로 Date 객체의 날짜와 시간을 표현한 문자열로 반화함 

인수를 생략한 경우 브라우저가 동작 중인 시스템의 로캘을 적용함 

```jsx
const today = new Date('2020/7/24/12:30');

today.toString(); // -> Fri Jul 24 2020 12:30:00 GMT+0900 (대한민국 표준시)
today.toLocaleString(); // -> 2020. 7. 24. 오후 12:30:00
today.toLocaleString('ko-KR'); // -> 2020. 7. 24. 오후 12:30:00
today.toLocaleString('en-US'); // -> 7/24/2020, 12:30:00 PM
today.toLocaleString('ja-JP'); // -> 2020/7/24 12:30:00
```
</details>

<details>
<summary>30.2.26 Date.prototype.toLocaleTimeString</summary>

인수로 전달한 로캘을 기준으로 Date 객체의 시간을 표현한 문자열을 반환함 

인수를 생략한 경우 브라우저가 동작 중인 시스템의 로캘을 적용함 

```jsx
const today = new Date('2020/7/24/12:30');

today.toString(); // -> Fri Jul 24 2020 12:30:00 GMT+0900 (대한민국 표준시)
today.toLocaleTimeString(); // -> 오후 12:30:00
today.toLocaleTimeString('ko-KR'); // -> 오후 12:30:00
today.toLocaleTimeString('en-US'); // -> 12:30:00 PM
today.toLocaleTimeString('ja-JP'); // -> 12:30:00
```
</details>
</details>

<details>
<summary>30.3 Date를 활용한 시계 예제</summary>

```jsx
(function printNow() {
  const today = new Date();

  const dayNames = [
    '(일요일)',
    '(월요일)',
    '(화요일)',
    '(수요일)',
    '(목요일)',
    '(금요일)',
    '(토요일)'
  ];
  // getDay 메서드는 해당 요일(0 ~ 6)을 나타내는 정수를 반환한다.
  const day = dayNames[today.getDay()];

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  const ampm = hour >= 12 ? 'PM' : 'AM';

  // 12시간제로 변경
  hour %= 12;
  hour = hour || 12; // hour가 0이면 12를 재할당

  // 10미만인 분과 초를 2자리로 변경
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;

  const now = `${year}년 ${month}월 ${date}일 ${day} ${hour}:${minute}:${second} ${ampm}`;

  console.log(now);

  // 1초마다 printNow 함수를 재귀 호출한다. 41.2.1절 "setTimeout / clearTimeout" 참고
  setTimeout(printNow, 1000);
}());
```
</details>
</details>
