/**
 * Array 객체 함수: Array.prototype.*
 * 
 */

var colors = ['black', 'white', 'yellow'];
var fruits = ['apple', 'mango', 'banana'];

// concat
console.log("=== concat =======");
var a1 = fruits.concat(colors);
console.log(a1);

// pop, push: stack 지원
console.log("=== stack 지원 =======");

var color = colors.pop();
console.log(color);

colors.push('red');
console.log(colors);

// join
console.log("=== join =======");

var str = fruits.join(':');
console.log(str);

// reverse
console.log("=== reverse =======");

fruits.reverse();
console.log(fruits);

// shift
console.log("=== shift =======");

var numbers = [1000, 2000, 3000, 4000, 5000, 6000];
var number = numbers.shift();
console.log(number, numbers);

// slice
console.log("=== slice =======");

var numbers2 = numbers.slice(1, 3);
console.log(numbers2);

// splice1: index에서 count개를 삭제하고 삭제된 요소를 배열로 반환 
console.log("=== splice(index, count) =======");

console.log(fruits);
var fruits2 = fruits.splice(0, 2);
console.log(fruits2, fruits);

// splice2: index에서 count개를 삭제하고 replace로 대체한 후, 삭제된 요소를 배열로 반환 
console.log("=== splice(index, count, replace) =======");

var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1, 3, 10);
console.log(a2, a1);

// splice3: removeAt(2) 처럼 작동
var a3 = [0, 1, 2, 3, 4];
a3.splice(2, 1);
console.log(a3);

// splice4: insertAt(1, 10) 처럼 작동

var a4 = [0, 1, 2, 3, 4];
a4.splice(1, 0, 10);
console.log(a4);