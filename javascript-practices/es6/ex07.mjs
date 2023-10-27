// import 하기

// 1,2 unamed export 모듈에서 import할 때는 반드시 이름을 지정한다.
import myFunction from './ex07-1.mjs';
import myObject from './ex07-2.mjs';

console.log(myFunction(10, 20));
console.log(myObject.add(10, 20), myObject.subtract(10, 20));
// 객체 분해
// const {add, subtract} = myObject;
// console.log(add(10, 20), subtract(10, 20));


// 3.
// 1) named 다수 객체 import 시 객체분해
import {subtract} from  './ex07-3.mjs';
console.log(subtract(10, 20));
// 2) named export는 import 대상이 다수가 될 수 있기 때문에 특정 이름을 지정할 수 없다.
//    대신에 * as (이름) 를 사용할 수 있다.
import * as m from  './ex07-3.mjs';
console.log(m.add(10, 20), m.subtract(10, 20));

// 4.
import math, {add} from './ex07-4.mjs';
console.log(add(10, 20), math.subtract(10, 20));









