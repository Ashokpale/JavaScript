/*wirte a Javascript script that compares two variables using different comparision operators and prints the results.

**write a Javascript that uses the ternary operators to determine if a number is even or odd.

**Expand the script to include a ternary operation that chacks if a user is an adult(18+) or a minor.*/

//javascript comparision operators

let x = 5;
let y = 8;
let z = "5";
//here == checks the value of the operands they wont the type of variable
console.log(`Equality x == y: ${x == y}`);
console.log(`Equality x == z: ${x == z}`);
//Strict equality
console.log(`Strict equality x === y: ${x === z}`);
console.log(`Strict equality x === y: ${x === x}`);
console.log(`Strict equality x === y: ${x === y}`);

//Inequality

console.log(`Inequality  x != y: ${x != y}`);
console.log(`Inequality  x != x: ${x != x}`);
console.log(`Inequality  x != z: ${x != z}`);

//Strict inequality
console.log(`Strict inequality  x !== y: ${x !== y}`);
console.log(`Strict inequality  x !== x: ${x !== x}`);
console.log(`Strict inequality  x !== z: ${x !== z}`);

// Greater than
console.log(`Greater than  x > y: ${x > y}`);
console.log(`SGreater than x > x: ${x > x}`);
console.log(`Greater than x > z: ${x > z}`);

// Less than
console.log(`Less than  ${x} <   ${x}: ${x < y}`);
console.log(`Less than x < x: ${x < x}`);
console.log(`Less than  x < z: ${x < z}`);

// Greater than or Equal to >=

console.log(`  Greater than or Equal to  x <= y: ${x <= y}`);
console.log(` Greater than or Equal to x <= x: ${x <= x}`);
console.log(` Greater than or Equal to  x <= z: ${x <= z}`);

// Less than or Equal to  <=

console.log(` Less than or Equal to  x >= y :${x >= y}`);
console.log(` Less than or Equal to x >= x: ${x >= x}`);
console.log(` Less than or Equal to  x >= z: ${x >= z}`);
