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
    let other = [];
    arr.forEach(l => {
        l % 5 == 0 ? div5.push(l) : l % 3 == 0 ? div3.push(l) : other.push(l);
    });
    return [div3, div5, other];
}