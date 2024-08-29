let arr = new Array();

// arr.push(1)

for(a=1; a<=5;a++){
    arr.push(a); //push() method adds a new element to an array (at the end)
}
console.log(arr.toString()); //toString() converts an array to a string of (comma separated) array values.

console.log("Total array length is" , arr.length);
console.log(arr.at(0)); //act same as arr[1]  -> arr.at(1) -> returns same values  
console.log(arr.toString());

console.log(arr.join('-')); // join() method also joins all array elements into a string. It behaves just like toString(), but in addition you can specify the separator

console.log(arr.pop()); //pop() method removes the last element from an array
console.log(arr.toString());

console.log(arr.shift()); // method removes the first array element and "shifts" all other elements to a lower index.
console.log(arr.toString());

console.log(arr.unshift('Muthu')); //unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
console.log(arr.toString());

arr[arr.length] = 'krish'; //length property provides an easy way to append a new element to an array
console.log(arr.toString());

arr1 = ['Apple', 'Orange']
arr2 = ['Kiwi', 'Strawberry']


console.log(arr.concat(arr1)); // concat() method does not change the existing arrays. It always returns a new array.

console.log(arr1.concat('Banana'));
console.log(arr.concat(arr1,arr2));
console.log(arr.toString());
console.log(arr.push(1,4,5));
console.log(arr.toString());
console.log(arr.copyWithin(4,1,2));
let arr3 = [[1,2],[3,4],[5,6]]
new_arr3 = arr3.flat() //Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.
console.log(new_arr3);

arr.splice(2,1,"Muthu","Krish"); // add new element and remove 1 element next to the addition
console.log(arr.toString());

arr.splice(2,0,"Muthu","Krish"); // add new element without removing the new element 
console.log(arr.toString());

arr.splice(2,1) //  you can use splice() to remove elements without leaving "holes" in the array
console.log("remove one value -> ",arr.toString());

new_Spliced= arr.toSpliced(0,2);
console.log("toSpliced method--> " , new_Spliced.toString());

console.log(arr.toString());
arr_slice= arr.slice(3) //Slice out a part of an array starting from array element declare here 3
console.log("sliced method--> " , arr_slice.toString());


console.log(arr.toString());
arr_slice1= arr.slice(1,4) //method then selects elements from the start argument, and up to (but not including) the end argument
console.log("sliced method--> " , arr_slice1.toString());


arr.splice(2); // add new element and remove 1 element next to the addition
console.log(arr.toString());




