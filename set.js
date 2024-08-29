
let num = new Set();

num.add(1)
num.add('muthu')
num.add("krish");
num.add("kc");
num.add("mk");
// console.log(num);


num.forEach((n) => {
    console.log(n);
}) 

console.log("to print all keys",  num.keys());

for(n of num){
    console.log(n);
}