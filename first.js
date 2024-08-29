const { u } = require("tar")

// Create let variable 
let userName = 'Muthu'

// Create const variable 
const userpass = 1234

// Execute the variable 
console.log(userName)
console.log(userpass)

// change the let variable value here
userName = 'krish'

console.log(userName)



// Number
// decimal
let num = 1.6

// Hex decimal number 
let num1 = 0xf

// Exponential value
let num2 = 1.5e12

// You can differentitate 
let num3 = 100_00_000

// Infinity 
let num4 = 5/0

//Bigger integer
let num5 = 12500000000045454545212121n

// Execute the num
console.log(num)
console.log(num1)
console.log(num2)
console.log(num3)
console.log(num4)

// BigInt can't mixed with other data type they only mixed with -  
//-BigInt that's y we used n at the end of console log below
console.log(num5 + 2n)

// Maximum value in javascript
console.log(Number.MAX_VALUE)

// Execute the variable type
console.log(typeof num)


// String variable 
let firstName = 'mut\nhu'
let sencondName = "krishnan \"krish\""
let thridName = "sha\vnmu\tgam"
// \t - > horizontal line, \v -> vertical line , \n -> new line, 

console.log(firstName + sencondName + thridName)

 

//boolean

let bool = 5>6

console.log(typeof bool + " " + bool)



// null
let user = null
console.log(typeof user)


// undefined

let sample

console.log(typeof sample)


//NAN

let samples = 5

console.log(samples / "a")


// Conversion - > Convert number into string

let num6 = String(6)

console.log(num6, typeof num6)

// Convert string to number 

let num7 = Number("123")

console.log(num7, typeof num7)


// coercion

let num8
console.log(num8, typeof num8)

num8 = 8
console.log(num8, typeof num8)

num8 = num8 + "" // In coercion if you perform number + string, it will take a string 
console.log(num8, typeof num8)

num8 = num8 - 2 // In coercion if you perform string - number, it will take a number 
console.log(num8, typeof num8)

num8 = +num8 + 4 // Unary -> using this unary operator you can convert non-numerical value into number 
console.log(num8, typeof num8)

num8 = !num8 // ! not equal to, so its change the output, if the output is false it will change to true 
console.log(num8, typeof num8)

// Boolean values -> following are shown false in boolean - > 0, -0, empty string -> '',"",``, null, undefined, NaN, bigint - >0n
console.log(Boolean(undefined))

let num9 = Number("123Muthu") // you can't convert string with combination of number+string it will show NaN
console.log(num9)


let num10 = parseInt("123Muthu")
console.log(num10)
