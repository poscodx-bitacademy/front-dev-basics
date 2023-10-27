/**
 * Arrow Function
 * 
 */

const power = function(x) {
    return x*x;
}

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(n){
    process.stdout.write(`${n}: ${power(n)}\t`);
});


// ex1
console.log("\n--------");
numbers.forEach(function(n){
    // const result = (function(x) {
    //    return x*x;
    // })(n);

    // const result = ((x) => { return x*x;})(n);

    const result = (x => x*x)(n);
    process.stdout.write(`${n}: ${result}\t`);
});

// ex2
console.log("\n--------");
numbers.forEach(function(n){
    process.stdout.write(`${n}: ${(x => x*x)(n)}\t`);
});


// ex2
console.log("\n--------");
numbers.forEach(n => process.stdout.write(`${n}: ${(x => x*x)(n)}\t`));


// ex3 여러행 함수
console.log("\n--------");
[5, 3, 15, 1045, 43, 92].forEach(n => {
    if(n % 5 == 0) {
        process.stdout.write(`${n}: ${(x => x*x)(n)}\t`)
    }
});

// ex4: - this를 어휘적으로 바인딩(Lexical bind)
console.log("\n--------");
const dooly = {
    name: '둘리',
    friends: ['또치', '마이콜', '도우너'],
    printFriends: function() {
        // this: dooly
        this.friends.forEach(friend => console.log(`${this.name}의 친구 ${friend}`));            
    }
};

dooly.printFriends();


