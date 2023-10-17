/**
 * 변수와 자료형
 * 
 * 기본타입
 * - undefined
 * - number
 * - string
 * - boolean
 * 
 * 객체
 * - object
 * - function
 * 
 * 
 */

console.log("=== 기본타입(undefined, number, string, boolean) ======")
// myVariable;     // reference error
var u = undefined; // var u; 동일, 자바스크립트는 정의와 선언을 구분 하지 않는다.
var i = 10;
var s = 'Hello World';
var b = true;

console.log(u + ":" + typeof(u));
console.log(i + ":" + typeof(i));
console.log(s + ":" + typeof(s));
console.log(b + ":" + typeof(b));

console.log("=== 객체타입(object) ======")
var i2 = new Number(10);
var s2 = new String('hello');
var b2 = new Boolean(true);
var o = new Object();
var a = new Array();
var d = new Date();

console.log(i2 + ":" + typeof(i2) + ":" + (i2 instanceof(Number)));
console.log(s2 + ":" + typeof(s2) + ":" + (s2 instanceof(String)));
console.log(b2 + ":" + typeof(b2) + ":" + (b2 instanceof(Boolean)));
console.log(o + ":" + typeof(o) + ":" + (o instanceof(Object)));
console.log(a + ":" + typeof(a) + ":" + (a instanceof(Array)));
console.log(d + ":" + typeof(d) + ":" + (d instanceof(Date)));
console.log(a + ":" + typeof(a) + ":" + (a instanceof(Array)));
console.log(d + ":" + typeof(d) + ":" + (d instanceof(Date)));

console.log("=== 객체타입(function) ======");


// 유사 객체
console.log("=== 원시 타입도 메소드를 호출 할 수 있다.(유사객체) ======");
console.log(b2.valueOf());
console.log(b.valueOf());   // console.log(new Boolen(b).valueOf())

