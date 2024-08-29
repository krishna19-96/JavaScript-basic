// we can declear the array in 2 form 1st  
const arr = [1,2,4,5];
// 2nd
const arr1 = new Array('muthu','krish');
arr1[1] ='krishnan'

console.log('Array type in javascript is',  typeof(arr1));
console.log(arr1);

//we can declear any type of the values in the array list
let data = ['Arjun',5,{tech:'JS'}, function(){ console.log('hello world')}]
console.log(data);

// we can call the function with in the array list 
data[3]();