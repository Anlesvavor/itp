/*
arr = [9,9,9,9,9,9,9,9,9] = 1000
(9/9+9)*(9/9+9)*(9/9+9)

Dados nueve nueves, realizar una serie de 
operaciones aritméticas de tal forma
que el resultado sea 1000

 5 ^ 15 permutaciones, no es bueno.

No tengo las herramientas necesarias para
resolver este problema.
*/


/*
function{
    reversePolish(combinacionesDeTodosLosNuevesConTodosLosOperaDore().toPolish()) === 1000
}
*/

var ex3 = (arr, sum) =>{

    /*
        Se hacen 3 conjuntos de 4 piezas
        costo: la cantida de nueves que tiene

        9 9 +
        9 9 -
        9 9 *
        9 9 /

        9 exp +
        9 exp -
        9 exp *
        9 exp /

        exp exp +
        exp exp -
        exp exp *
        exp exp /
    */ 
    let maxCost = arr.length;
    /*
    let pieces = [
       [['9,9,+'], 'f', 2],
       [['9,9,-'], 'f', 2],
       [['9,9,*'], 'f', 2],
       [['9,9,/'], 'f', 2],
       [['9,+'], 's', 1],
       [['9,-'], 's', 1],
       [['9,*'], 's', 1],
       [['9,/'], 's', 1],
       [['+'], 'e', 0],
       [['-'], 'e', 0],
       [['*'], 'e', 0],
       [['/'], 'e', 0],
    ];
*/
    let p = [
        {
            piece: ",9,9,+,",
            cost : 2,
            type: 'f'
        },
        {
            piece: ",9,9,-,",
            cost : 2,
            type: 'f'
        },
        {
            piece: ",9,9,*,",
            cost : 2,
            type: 'f'
        },
        {
            piece: ",9,9,/,",
            cost : 2,
            type: 'f'
        },
        {
            piece: ",9,+,",
            cost : 1,
            type: 's'
        },
        {
            piece: ",9,-,",
            cost : 1,
            type: 's'
        },
        {
            piece: ",9,*,",
            cost : 1,
            type: 's'
        },
        {
            piece: ",9,/,",
            cost : 1,
            type: 's'
        },
        {
            piece: ",+,",
            cost : 0,
            type: 'e'
        },
        {
            piece: ",-,",
            cost : 0,
            type: 'e'
        },
        {
            piece: ",*,",
            cost : 0,
            type: 'e'
        },
        {
            piece: ",/,",
            cost : 0,
            type: 'e'
        },
    ];

    let r = () => Math.floor(Math.random()*12);
    let rr = () => Math.floor(Math.random()*4);
    let possibleStrings
    while(true){
        possibleStrings = [p[rr()].piece
                            ,p[r()].piece
                            ,p[r()].piece
                            ,p[r()].piece
                            ,p[r()].piece
                            ,p[r()].piece
                            ,p[r()].piece
                            ,p[r()].piece
                        ].join('');
        
        if(
            reversePolish(possibleStrings).pop() === 1000
        ) return [possibleStrings, reversePolish(possibleStrings).pop()];
    }

    
}

var reversePolish = (expression) => {
    let exp = JSON.parse(JSON.stringify(expression));
    exp = exp.split(',');
    let exp2 = JSON.parse(JSON.stringify(exp));
    let stack = [];
    for(l of exp) {
        if(isNaN(l) || l === ''){
            switch (l) {
                case '+':
                    exp2.shift();
                    stack = dsum(stack);
                    break;

                case '-':
                    exp2.shift();
                    stack = dsub(stack);
                    break;

                case '*':
                    exp2.shift();
                    stack = dmul(stack);
                    break;

                case '/':
                    exp2.shift();
                    stack = ddiv(stack);
                    break;
                case '':
                    exp2.shift();
                    break;
                default :
                    return null;
            }
        }
        else{
            stack.unshift(exp2.shift());
        }
    }
    return stack;
}
/*
var sum = (a, b) => a + b;
var sub = (a, b) => a - b;
var mul = (a, b) => a * b;
var div = (a, b) => a / b;
*/
var dsum = (s) => {
    s.unshift(parseFloat(s.shift()) + parseFloat(s.shift()));
    return s;
};
var dsub = (s) => {
    s.unshift(parseFloat(s.shift()) - parseFloat(s.shift()));
    return s;
};
var dmul = (s) => {
    s.unshift(parseFloat(s.shift()) * parseFloat(s.shift()));
    return s;
};
var ddiv = (s) => {
    s.unshift(parseFloat(s.shift()) / parseFloat(s.shift()));
    return s;
};
