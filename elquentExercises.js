const range = (start, end, step) => {
    if(!step) {step = 1};
    let arr = []
    for(let i = start; start > end ? i >= end : i <= end; i += step){
        arr.push(i);
    }
    return arr;
    
}

const sum = (arr) => {
    return arr.reduce((a,b) => a+b);
}

// Reversing an array

const reverseInPlace = arr => {
    for(let i =0; i < Math.floor(arr.length/2); i++){
        var tmp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = tmp;
    }
}
//No combinar ES5 y EC6
const arrayToList = arr => {
    let list = {};
    let cursor = list;
    for(let i = 0; i < arr.length; i++) {
        cursor.value = arr[i];
        cursor.rest = i ===  (arr.length - 1)? null : {};
        cursor = cursor.rest;
    }
    return list;
}

Array.prototype.myReverse = () => {
    let newArray = [];
    this.forEach( l => {
        newArray.unshift(l)
    });
    return newArray;
}

Array.prototype.onReverse = () => {
    for(let i =0; i < Math.floor(this.length/2); i++){
        var tmp = this[i];
        this[i] = this[this.length - i - 1];
        this[this.length - i - 1] = tmp;
    }
    return this;
}

const listToArray = list => {
    let arr = [];
    let cursor = list;
    do {
        arr.push(cursor.value);
        cursor = cursor.rest;
    } while(cursor !== null);
    return arr;
}

const deepEqual = (obj1, obj2) => {
    if(obj1 === obj2) return true;
    let prop1 = Object.getOwnPropertyNames(obj1);
    let prop2 = Object.getOwnPropertyNames(obj2);
    if(typeof(obj1) !== typeof(obj2)) { 
        return false; 
    } else {
        for(p of prop1){
            if(obj1[p] !== obj2[p]) return false;
            if(typeof(obj1[p]) ==='object') if(!deepEqual(obj1[p], obj2[p])) return false; 
        }
    }
    return true;
}

const obj1 = {a:"b", c:"r"}
const obj2 = {a:"b", c:"r"}
deepEqual(obj1, obj2);


const obj3 = {a:"b", c:{n: "k"}}
const obj4 = {a:"b", c:{n: "t"}}
deepEqual(obj3, obj4);

const obj5 = {here: {is: "an"}, object: 2};
const obj6 = {here: {is: "an"}, object: 2};
deepEqual(obj5, obj6);