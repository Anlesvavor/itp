(function init(){
    console.log('Hello there');
})();


var a, b;

(function(myA, myB){
    a = x
    console.log('hello there', a, b , myA, myB);
})

(function init2(){
    console.log(arguments[0]);
}());

function foo() {
    return {
            foo: "bar"
    }
}

function bar() {
    return 
    {
        foo: 'bar'
    }
}

typeof bar() === typeof foo() //False porque javascript


// todo las cosas en javascript son objetos

// para comprar los hace pasar por numeros, luego strings y luego con objetos
