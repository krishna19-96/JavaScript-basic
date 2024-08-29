// Given an integer array nums, return true if any value appears at least twice in the array, 
// and return false if every element is distinct.

/* Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 */

let a = [1,2,3,1]
let b=0
for(j=0;j<a)
for(i=1;i<a.length;i++){
    if(a[b]==a[i]){
        console.log('true');
    }
    else{console.log('false');}
}
b++;


