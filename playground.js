function addBorder(picture) {
    return Array.from([" ", ...picture, " "], (v, i) => {
        if(i === 0 || i === picture.length + 1){ 
            return Array.from(new Array(picture[0].length + 2), x => "*").join('');
        }else{
            return ['*', picture[i - 1], "*"].join('');   
        }
    });
}

let a = [832, 998, 148, 570, 533, 561, 894, 147, 455, 279];
let b = [832, 998, 148, 570, 533, 561, 455, 147, 894, 279];

function areSimilar(a, b){
    let i = 0;
    if(!a.every(v => b.some(w => v===w))) return false;
    if(a.reduce((n,m)=>n+m) !== b.reduce((n,m)=>n+m)) return false;

    for(v of a){
        if(v !== b[i]){
            let j = b.indexOf(v);
            if(j === -1) return false;
            a.splice(j,1);
            b.splice(j,1);
            a.splice(i,1);
            b.splice(i,1);
            break;
        }
        i++;
    }
    i = 0;
    for(v of a){
        if(v !== b[i]){
            return false;
        }
        i++;
    }
    return true;
}

console.log(areSimilar(a, b));

/*
    Data abstraction & encapsulation
    inhheritances
    polymorphism
    constructires, destructors
    Problem: triangule circle and square (area and  perimet)

    MySQL poner unatabla,
    operation, fecha, resultado operacion
    circulo ahorita resultado
*/

function arrayChange(a) {
    var r = a.filter((v, i) => v <= a[i+]);
}