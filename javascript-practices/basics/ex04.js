/**
 * 변수의 범위(scope)
 * 
 * 1. 자바스크립트는 기본적으로 코드에서 변수의 범위를 알수 있다.(정적 스코프, Lexical Scope)
 * 2. 자바스크립트의 scope
 *    1) 전역 범위
 *    2) ES6 이전(<= ES5)
 *       - 자바와 같은 블록 범위({})를 지원하지 않았다.
 *       - 함수 범위만 지원
 *       - var 키워드를 사용해야 함수범위를 가진다.
 *       - 만일 사용하지만 그 변수는 전역 범위를 가진다(hoisting)
 *    3) ES6 이후(ES6 ~ ES2022)
 *       - 자바와 같은 블록 범위를 가진다.
 *       - let 키워드를 사용해서 블록 범위를 가지게 한다.
 *       - const 키워드는 블록 범위의 상수를 정의할 때 사용한다.
 * 
 *    4) 결론:
 *       const, let만 사용하고 둘 중에 하나를 반드 붙히자!!!!!(안붙히면 전역 범위를 만든다:  hoisting)
 */



var i = 10;
var f = function() {
    var i = 20;
    j = 100;

    console.log(i);
    i = j - i;
}

f();
console.log(i);
console.log(j);

console.log("=== var 키워드는 함수 블록에서만 범위를 만든다");
if(90 + 10 === 100) {
    var k = 10;
}
console.log(k);

{
    let x = 1000;
    const PI = 3.14;

    x = 100;
    // PI = 0;  // assign error
}

// console.log(x);  // reference error
// console.log(PI); // reference error







