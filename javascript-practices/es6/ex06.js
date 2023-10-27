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

const {firstName, lastName} = user;

console.log(firstName, lastName);

if(1==1) {};
function f() {};

const o = {};

{
    no: 10
}

{
    console.log("!!!")
}