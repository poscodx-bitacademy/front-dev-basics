/**
 * 자바스크립트 객체4: prototype 기반의 상속과 오버라이딩: 자바스크립트 객체 지향 프로그래밍
 * 
 */

var MyObject = function(name, age) {
    this.name = name;
    this.age = age;
};

MyObject.prototype.school = 'bitacademy';
MyObject.prototype.course = 'java fullstack';
MyObject.prototype.info = function() {
    console.log(this.name, this.age, this.school, this.course);
};


// MyObject 인스탄스 생성1
var o1 = new MyObject("마이콜", 20);
o1.info();
o1.school = 'poscodx';
o1.info();

// MyObject 인스탄스 생성2
var o2 = new MyObject("둘리", 10);
o2.info = function() {
    console.log('안 알라쥼~');
}
o2.info();


