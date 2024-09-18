
//type conversions 
//  1. num to string 
let num = 25;
let str = String(num);
console.log(`converted number to string:  ${str}`);
// 2.string to num

let str1 = "25";
let num1 = Number(str1);
console.log(`converted string to number:  ${num1}`);

// 3.converts num to Boolean

let num2 = 1;
//num2 = 0 --false
let bool = Boolean(num2);
console.log(`Converted num to boolean: ${bool}`);

// different types of mathematical and logical computations

// The Assignment Operator (=) assigns a value to a variable 

let a = 5;
let b = 5;
let c = a + b;
console.log(    "assignment operator output is : " + ` ${a} +  ${b} = ${c}`);