/**
 * 구조 분해(Destructing)
 * 
 */

// ex1 - basic
const user = {
    firstName: '둘',
    lastName: '리',
    email: 'dooly@gmail.com'
};

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

const {firstName, lastName, email} = user;
console.log(firstName, lastName, email);

// ex2 - default value
const goods = {
    name: 'TV',
    price: 1000,
    countStock: 10
};

const {name, price, discountPrice, countStock=0, countSold=0} = goods;
console.log(name, price, discountPrice, countStock, countSold);

// ex3 - 구조 분해 대상이 되는 객체의 속성 이름과 변수 이름이 다를 경우
const person = {
    n: '마이콜',
    c: 'korea'
}

const {n: fullName, c: country} = person;
console.log(fullName, country);

// ex4 - 내부객체(nested object)의 구조 분해
const student = {
    name: '둘리',
    age: 10,
    score: {
        math: 30,
        korean: 100,
        science: 70
    }    
};

const {
    name: studentName,
    score: {math, korean, science, music=0}
} = student;

console.log(`${studentName}의 점수
국어: ${korean}
수학: ${math}
과학: ${science}
음악: ${music}
`);

//ex5 - 함수 파라미터
const averageScore = ({score: {math, korean, science, music=0}}) => (math + korean + science + music) / 4;
console.log(averageScore(student));

// ex6 - 배열의 구조 분해: 기본
const color = [155, 200, 75];
let [red, green, blue] = color;
console.log(red, green, blue);

// ex7 - 배열의 구조 분해: default value
[red, green, blue, alpha=0] = color;
console.log(red, green, blue, alpha);

// ex8 - 배열의 구조 분해: skip value
const[,,colorOfBlue] = color;
console.log(colorOfBlue);

// ex9 - swap
let x = 10;
let y = 20;
console.log(x, y);

const temp = x;
x = y;
y = temp;
console.log(x, y);

[y, x] = [x, y];
console.log(x, y);

// ex10 - 배열의 구조 분해: ...(array spread operator)
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [firstColor, secondColor, ...otherColors] = colors;
console.log(firstColor, secondColor, otherColors);

// ... 마지막에 사용 가능
// const [firstColor2, secondColor2, ...otherColors2, lastColor] = colors;
// console.log(firstColor, secondColor, otherColors);

// 함수의 파라미터 
console.log('Colors of Rainbow', colors);
console.log('Colors of Rainbow', ...colors);

// ex10 - 배열의 구조 분해: ...를 함수의 파라미터로 사용하기, arguments 대용
// 'red yellow blue'

const f = (...colors) => {
    return colors.join(' ');
};

console.log(f('red', 'yellow', 'blue'));
