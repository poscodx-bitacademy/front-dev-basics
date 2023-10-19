/**
 * Date 객체 함수: Date.prototype.*
 * 
 */

// 현재 시간
var now = new Date();
console.log(now);

// 2023년 10월 19일
var d1 = new Date(2023, 9/*10-1*/, 19);
console.log(d1);

// 2023년 10월 19일 22:22:22
var d2 = new Date(2023, 9, 19, 22, 22, 22);
console.log(d2);

//객체 함수
console.log(
`
년: ${now.getFullYear()}
월: ${now.getMonth() + 1}
일: ${now.getDate()}
시: ${now.getHours()}
분: ${now.getMinutes()}
초: ${now.getSeconds()}
`);
