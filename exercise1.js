/*
Boney [4:40 PM]
##### EXCERSICE 1 ######################

Given an array arr[] and an integer K, the task is to find whether the array can be divided into two sub-arrays such that the absolute difference of the sum of the elements of both the sub-arrays is K.

nput: arr[] = {2, 4, 5, 1}, K = 0
Output: Yes
{2, 4} and {5, 1} are the two possible sub-arrays.
|(2 + 4) – (5 + 1)| = |6 – 6| = 0

Input: arr[] = {2, 4, 1, 5}, K = 2
Output: No

*/

function ex1(arr, k){
    let totalSum = arr.reduce((a, b)=>a+b);
    let parcialSum = 0;
    let evaluate = (ps, ts, k) => k == Math.abs(2 * ps - ts)
    for(l of arr) {
        parcialSum = parcialSum + l;
        if(evaluate(parcialSum, totalSum, k)){
            return true;
        } 
    }
    return false;
}