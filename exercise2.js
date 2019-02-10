/*
####### EXERSICE 2 ##################
Split the array into equal sum parts according to given conditions
Given an integer array arr[], the task is to check if the input array can be split in two sub-arrays such that:

- Sum of both the sub-arrays is equal.
- All the elements which are divisible by 5 should be in the same group.
- All the elements which are divisible by 3 (but not divisible by 5) should be in the other group.
- Elements which are neither divisible by 5 nor by 3 can be put in any group.

Examples:

Input: arr[] = {1, 2}
Output: No
The elements cannot be divided in groups such that there sum is equal.

Input: arr[] = {1, 4, 3}
Output: Yes
{1, 3} and {4} are the groups satisfying the given condition.
*/


function ex2(arr){
    let div3 = [];
    let div5 = [];
    let other = ['x'];
    arr.forEach(l => {s
        l % 5 == 0 ? div5.push(l) : l % 3 == 0 ? div3.push(l) : other.push(l);
    });
    other = heapsMethod(other);
    for(p in other){
        if(
            div3.concat(p.slice(0,p.indexOf('x'))).reduce((a,b)=>a+b) ===
            div5.concat(p.slice(p.indexOf('x')+1)).reduce((a,b)=>a+b)
        ){
            return true;
        }
    }
    return false;
}

/*
> console.log(arr.map(l=> [   [ l[0], l[1] ], [ l[2], l[3] ]   ]   ));
[ [ [ 1, 2 ], [ 3, 4 ] ],
  [ [ 5, 6 ], [ 7, 8 ] ],
  [ [ 9, 10 ], [ 11, 12 ] ] ]

*/

/*
> [1,2,3,4].slice(0,[1,2,3,4].indexOf(3))
[ 1, 2 ]
> [1,2,3,4].slice([1,2,3,4].indexOf(3))
[ 3, 4 ]

*/


//Este algoritmo lo adapté del que se muestra en wikipedia https://en.wikipedia.org/wiki/Heap%27s_algorithm
function heapsMethod(arr){
    const length = arr.length;
    let c = [];
    let result = [];
    for(let i = 0; i < length; i++) {
        c[i] = 0;
    }

    //Es necesario hacer una copia profunda
    result.push(JSON.parse(JSON.stringify(arr)));
    let i = 0;
    while(i < length){
        if (c[i] < i) {
            if(i % 2 === 0) {
                let t = arr[0];
                arr[0] = arr[i];
                arr[i] = t;
            } else {
                let t = arr[c[i]];
                arr[c[i]] = arr[i];
                arr[i] = t;
            }
            result.push(JSON.parse(JSON.stringify(arr)));
            c[i]++;
            i = 0;
        }else{
            c[i] = 0;
            i++;
        }
    } 
    return result;
}