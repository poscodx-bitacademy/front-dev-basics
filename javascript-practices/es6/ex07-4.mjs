/**
 * named export + unnamed export
 * 
 * 
 */

const add = function(a, b) {
    return a + b;
};
const subtract = function(a, b) {
    return a - b;
};

export {add, subtract};
export default {add, subtract};