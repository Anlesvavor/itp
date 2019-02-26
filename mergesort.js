/*
const mergeSort = (a, p, r) => {

    if(p >= r) {
        return a;
    }else {
        mergeSort(a, p, Math.floor((p+r)/2));
        mergeSort(a, Math.floor((p+r)/2) + 1, r);
        merge(a, p, Math.floor((p+r)/2), r);
    }

}

const merge = (a, p, q, r) => {
    let b = a.slice(p,q+1);
    console.log(b);
    let c = a.slice(q+1, r+1);
    console.log(c);
    for(let k = p; k <= r; k++){
        if(b[0] <= c[0]) {
            a.push(b.shift());
        }else{
            a.push(c.shift());
        }
    }
}
let a = [5,7,2,4,9,0];
let res = mergeSort(a, 0, a.length-1);
console.log(res);
*/

// Split the array into halves and merge them recursively 
function mergeSort (arr) {
    if (arr.length === 1) {
      // return once we hit an array with a single item
      return arr
    }
  
    const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
    const left = arr.slice(0, middle) // items on the left side
    const right = arr.slice(middle) // items on the right side
  
    return merge(
      mergeSort(left),
      mergeSort(right)
    )
  }
  
  // compare the arrays item by item and return the concatenated result
  function merge (left, right) {
    let result = []
    let indexLeft = 0
    let indexRight = 0
  
    while (indexLeft < left.length && indexRight < right.length) {
      if (left[indexLeft] < right[indexRight]) {
        result.push(left[indexLeft])
        indexLeft++
      } else {
        result.push(right[indexRight])
        indexRight++
      }
    }
  
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
  }
  
  const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
  console.log(mergeSort(list)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]