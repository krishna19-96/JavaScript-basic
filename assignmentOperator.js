let num = 5

x = num++ // Post increment, it will assign the value 1st and the increment 

y = ++num // Pre increment, it will increment the value 1st then assign it  

console.log(x,y, num)


// math.pow

let num1 = 4

let result = num1 * num1 * num1

console.log(result)

result = Math.pow(num1,3)
console.log(result)

num1 = 4
let result1 = num1 ** 3
console.log(result1)


// floor -> reach the lesser whole number
result = Math.floor(4.9)
console.log(result)

// ceil -> reach the greater whole number
result = Math.ceil(4.9)
console.log(result)

// min
result = Math.min(1,2,3,4,5)
console.log(result)

// max
result = Math.max(1,2,3,4,5)
console.log(result)

let JavaScript = 1 
console.log(JavaScript)


// Equal to operator 
let x1 = "1"
let y1 = 1

data = x1 == y1

console.log(data)

// Strict equality operator

let x2 = "1"
let y2 = 1

data = x2 === y2

console.log(data)