

// Different tyoes of variables

//let 
let message ; //vearibale declaration
message = "Hello Vannila Java" ; //assigning  the value to variable
console.log(message);

//var 
var user = 'John';
var age = 25;
console.log(user + " " +  age);

//Constants

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
const color = COLOR_ORANGE;
const myBirthday = '18.04.1982';
// myBirthday = '01.01.2001'; // error, can't reassign the constant!

console.log(color)
console.log("myBirthday:" +  "  " + myBirthday);


//  differnt types of data types

// 1.Numbers

let int  = 123;
let float = 12.345;
console.log("int"  + " " + int);
console.log(`float number is: ${float}`);

// 2.BigInt
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

// 3.String

let str = "Hello";  //Double quotes
let str2 = 'Single quotes are ok too';//Single quotes
let phrase = `can embed another ${str}`;//Backticks

console.log(str);
console.log(str2);
console.log(phrase);

// 4.Boolean (logical type)

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

let isGreater = 4 > 1;

console.log( isGreater ); // true (the comparison result is "yes")

// null

let age2;
alert(age2); // shows "undefined"

// The typeof operator

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert

let msg = "Vannila Java Nerchukundham";
console.log('msg variable  is a data type of '  + typeof(msg))






