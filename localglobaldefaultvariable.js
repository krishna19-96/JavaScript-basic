let user = 'muthu' // Global variable

function add(u='smk'){ // default variable
    let usr = 'krish' // Local variable 

    return `hello ${u} ${usr}`
}

let result = add(user)

console.log(result);
