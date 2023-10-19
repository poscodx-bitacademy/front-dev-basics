/**
 * 자바스크립트 함수: function 타입의 객체
 * 
 */

console.log("===함수를 생성하는 방법1: 함수 리터럴 =========");
function f1(a, b) {
    return a + b;
}
console.log(typeof(f1), f1 instanceof Function, f1(10, 20));

console.log("===함수를 생성하는 방법2: 함수 리터럴 =========");
var f2 = function(a, b) {
    return a + b;
}
console.log(typeof(f2), f2 instanceof Function, f2(10, 20));

console.log("===함수를 생성하는 방법3: 화살표 함수(es6) =========");
var f4 = (a,b) => a + b;
f4(10, 20);
console.log(typeof(f4), f4 instanceof Function, f4(10, 20));

console.log("===함수를 생성하는 방법4: new 와 함께 Function 생성자 함수를 사용하는 방법 =========");
var f3 = new Function('a', 'b', 'return a + b;');
console.log(typeof(f3), f3 instanceof Function, f3(10, 20));

console.log("===함수를 생성하는 방법5: 익명(anonymous) 함수 =========");
setTimeout(function() {
    console.log('time out!');
}, 10);

console.log("===익명 함수의 또 다른 예: 함수 정의 후, 즉시 실행을 한번 만 하는 함수=========");
var r = (function(a, b) {
    var m = 10;
    return a / m + b / m;
})(10, 20);

console.log(r);

// 가변 파라미터














