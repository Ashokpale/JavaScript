


// Assume variables num1 and num2 hold two numbers, and operator holds the arithmetic operator as a string (e.g., “+”).
// Use a switch case statement to perform the operation and store the result in a variable result.
// Print the result.

let num1 = parseFloat(prompt("Enter the first number"));
let num2 = parseFloat(prompt("Enter the second number"));
let operator = prompt("Enter the arithmetic operator (+, -, *, /)");
let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2; 
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    if (num2 !== 0) {
      result = num1 / num2;
    } else {
      result = "Error: Division by zero is not allowed";
    }
    break;
  default:
    result = "Invalid operator";
}

console.log("Result:", result);
