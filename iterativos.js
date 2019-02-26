const math = require('mathjs');

async function factorialRecursive(n) {
    if(n === 1) {
        return await 1;
    }else{
        return n * factorialRecursive(n-1);
    }
}

async function factorialIterative(n){
    let res = n;
    for( let i = n-1; i > 0; i--){
        res *= i; 
    }
    return res;
}


async function factorialMathJs(n) {
    return math.factorial(n);
}

function test(n) {
    let t1 = Date.now();

    for(let i = 0; i < 50000; i++){
        factorialIterative(n);
    }
    let res = await Date.now() - t1;

    console.log("iterativo:" + res);

    

    t1 = Date.now();

    for(let i = 0; i < 50000; i++){
        factorialMathJs(n);
    }
    res = await Date.now() - t1;

    console.log("MathzJs:" + res);



    t1 = Date.now();

    for(let i = 0; i < 50000; i++){
        factorialRecursive(n);
    }
    res = await Date.now() - t1;

    console.log("Recursive:" + res);
}

test(10000);
