/**
 * let & const
 * 
 */

//let 블록 범위
try {
    if(true) {
        var i = 10;
        let j = 20;
    }

    console.log(i);
    console.log(j);
} catch(e) {
    console.error('error:' + e);
}