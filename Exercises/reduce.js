const users = [{firstName: "muthu1", lastName: "krish1", age: 25},
                {firstName: "muthu2", lastName: "krish2", age: 35},
                {firstName: "muthu3", lastName: "krish3", age: 55},
                {firstName: "muthu4", lastName: "krish4", age: 25},] 


const output = users.reduce((acc, curr) => { 
    if (acc[curr.age]){ 
        acc[curr.age] = ++acc[curr.age]
 
    } 
    else { 
        acc[curr.age] = 1
    } 
    return acc},{}); 
    
    console.log(output)

// let out = users.age
// console.log(out.toString());

// const output = users.reduce((acc,curr) => {
//     if(curr.age<30){
//         acc.push(curr.firstName);
//     }
//     return acc;
// },[])

// console.log(output);
