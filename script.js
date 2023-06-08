// Variables

// console.log(d);

// let x = 32;
// let y = 3
// console.log(x + y);

// var d = 35 

// OPERATORS

// Arithmetic
let x = 5
let y = 10
console.log("Arithmetic");


console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

//Assignment 
console.log("Assignment");

let z = x
console.log(z);
console.log(z += x); //z = z+x
console.log(z -= x); //z = z-x
console.log(z *= x); //z = z*x
console.log(z /= x); //z = z/x
z = 124717
console.log(z %= x); //z = z%x
console.log(z **= x); //z = z**x

// Comparison
console.log("Comparison");

// x = 5 & y = 10

x = 10
y = "5"

let result = (x > y) ? "Greater" : "Less"
console.log(result);

let result1 = (x != y) ? "Greater" : "Less"
console.log(result);

if (x === y) {
    console.log("True");
} else {
    console.log("False");
}

// Data Types

// String
let name = "CodeBustler"

// Number
let age = 28

// Boolean
let indian = true

// Undefined
let u;

// Null
let nothing = null
if (nothing) {
    console.log("True");
} else {
    console.log("Falsy value");
}

// Object
let obj = {
    address: "Hyderabar",
    country: "India",
    pincode: 500028
}

// Array
let ary = ["s", 42, "fq", true]

// BigInt
let big = BigInt("1234567813513265262656564645641");
let intNum = 999999999999999;

console.log('Data Types');
console.log(typeof name); // string
console.log(typeof age); // number 
console.log(typeof indian); // Boolean
console.log(typeof u); // udefined

// null typeof is object
console.log(typeof nothing + " : null");

console.table(typeof obj + " : object"); //object
console.log(typeof ary + " : Array"); //object
console.log(typeof big); // bigInt
// Date object:
const date = new Date("2022-03-25");
console.log(typeof date + " : Date"); // object


console.log(intNum);

// notice the last digits
console.log(9007199254740992 === 9007199254740993);
// → true

console.log(10n === 10); // → false

console.log(typeof 10n); // → bigint
console.log(typeof 10); // → number