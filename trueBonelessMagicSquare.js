arr = [1,9,2,8,3,7,4,6,20];
n = 45;
function trueBonelessMagicSquare(arr, n){
    let branches = findNumberOfBranches(arr);
    if(branches === -1) return null;
    let length = arr.length;
    let a = [];
    for(let i = 0; i < length; i++){
        for(let j = i + 1; j < length; j++){
            for(let k = j + 1; k < length; k++){
                a.push([arr[i], arr[j], arr[k]]);
            }
        }
    }
    a = a.filter( r => r.reduce( (s, t) => s + t ) == n);
    if(a == 0) return null;
    return findBranches(a, findPivot(a, arr), findNumberOfBranches(arr));
}


function findPivot(matrix, arr){
    let g = {};
    let f = findNumberOfBranches(arr);
    arr.forEach(l => g[l] = 0);
    let m = matrix.reduce((a,b) => a.concat(b));
    for(v of m) {
        if((++g[v]) == f){
            return v; 
        }
    }
}

function findBranches(matrix, pivot, branches){
    let result = [];
    let c = branches;
    for(m of matrix){
        for(l of m){
            if (l === pivot){
                result.push(m);
                if(--branches == 0){
                    return result;
                }
                break;
            }
        }
    }
}


function findNumberOfBranches(arr){
    let length = arr.length;
    return (arr.length - 3) % 2 == 0 ? (arr.length - 1) / 2: - 1;
}

var test1 = {
    arguments:[[3, 6, 9, 12, 15, 18, 21, 24, 27], 45]
};

var test2 = {
    arguments: [[1, 9, 2, 8, 3, 7, 4, 6, 20], 30]
};

var test3 = {
    arguments: [[1, 2, 3, 4, 0], 5]
};

