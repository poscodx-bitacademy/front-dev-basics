const myAsyncFn = function(param) {
    return new Promise(function(resolve, reject) {
        //
        // 비동기 코드
        //
        setTimeout(function() {
            if(param === 'data') {
                resolve("ok");
            } else {
                reject(new Error('fail'));
            }    
        }, 2000);
    });
}

// usageII: async ~ await
const ex03 = async function() {
    const result = await myAsyncFn('data');
    console.log(result);    
}

ex03();
console.log('wait....') ;
