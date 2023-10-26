/**
 * const: 블록 범위의 상수
 * 
 */

//1. 블록 범위
try {
    if(true) {
        const num = 10;
    }

    console.log(num);

} catch(e) {
    console.error("error:" + e);
}

//2. 대입(assignment) 에러
try {
    const num = 10;
    num = 20;
} catch(e) {
    console.log("error:" + e);
}