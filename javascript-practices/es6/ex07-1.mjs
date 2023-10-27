/**
 * unamed export
 * default 키워드를 사용한다.
 * 
 */

// const add = function(a, b) {
//     return a + b;
// }
// export default add;

export default function(a, b) {
    return a + b;
}

// 주의) 에러: 이름없이 export를 하기 때문에 하나만 export 할 수 있다.
// export default function(a, b) {
//     return a - b;
// }
