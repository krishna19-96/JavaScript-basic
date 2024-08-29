//Destructuring and assign it to another value 
let num = [1,2,3,4,5]
let [a,b,c,d,f] = num;
console.log(a,b,c,d,f);

//Destructuring and assign it to another value and skip one value 
let num1 = [1,2,3,4,5]
let [g,h,,j,k] = num1;
console.log(g,h,j,k);
 
//Swaping two values 
let a1=5;
let b1=2;
[a1,b1] = [b1,a1]
console.log(a1,b1);

// String to array methods, split the string and assign it to variable 
// "...<variable>" this will store all remaining value into one single variable  

let num2= "My name is Muthu Krishnan from shencottai".split(' ');

let [l,m,,...r] = num2;
console.log(r);
 