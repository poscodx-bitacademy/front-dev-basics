/**
 * named exportI
 * 
 * 1. exports(require) 와 비슷하다.
 * exports.add = ...
 * exports.subtract = ...
 * 
 * 2. destrcting이 가능하다.
 * 
 */

// (참고)
// const add = function(a, b) {
//     return a + b;
// };
// const subtract = function(a, b) {
//     return a - b;
// };
// export {add, subtract};

export const add = function(a, b) {
    return a + b;
}

export const subtract = function(a, b) {
    return a - b;
}


