/**
 * Function.prototype.bind
 * Function.prototype.apply
 * Function.prototype.call
 * 
 */

var myObject = {
    v: 'me',
    f1: function() {
        console.log(this.v);
    },
    f2: function(param1, param2) {
        console.log(param1 + " " + param2 + " " + this.v);
    }
};


var yourObject = {
    v: 'you'
};

// 일반적인 객체의 함수 호출
myObject.f1();

// apply: 호출되는 함수(myObject.f1)의 this를 파라미터로 전달되는 객체로 바꾼다.
myObject.f1.apply(yourObject);

// call: 호출되는 함수(myObject.f2)의 this를 첫번째 파라미터로 전달되는 객체로 바꾸고 다른 파라미터들도 전달할 수 있다.
myObject.f2.call(yourObject, "hello", "again");

// bind: 호출되기 전에 호출되는 함수의 this를 파라미터로 전달되는 객체로 바꾼다.
var f3 = function() {
    console.log(this.v);
}.bind(myObject);

f3();




