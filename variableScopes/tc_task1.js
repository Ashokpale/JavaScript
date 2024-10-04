/*Temperature Check: Declare a variable temperature and use nested ternary operators to categorize
 it as "Hot" (above 30), "Warm" (20-30), "Cool" (10-19), and "Cold" (below 10). Log the result. */

let temparatureValue = prompt("Enter a Temparature Value:");
console.log("Entered Temparature Value is:" + temparatureValue);

let result =
  temparatureValue > 30
    ? "Hot"
    : temparatureValue >= 20 && temparatureValue <= 30
    ? "Warm"
    : temparatureValue >= 10 && temparatureValue <= 19
    ? "Cool"
    : temparatureValue <= 10
    ? "cold"
    : "no value";

console.log("Output is :" + "  " + result);

/*Age Group: Declare a variable age and use the ternary operator to 
classify the age into "Child" (0- 12), "Teen" (13-19), "Adult" (20-64), and "Senior" (65 and above). Log the result.*/

let age = prompt("Enter a Age Group Value:");
console.log("Entered Age Grouo Value is:" + age);

let ageGroup =
  age > 65
    ? "Senior"
    : age >= 0 && age <= 12
    ? "Child"
    : age >= 13 && age <= 19
    ? "Teen"
    : age >= 20 && age <= 64
    ? "Adult"
    : "no value";

console.log(" Your Age Group is :" + "  " + ageGroup);

/*Grade Classification: Declare a variable score and set it to a value between 0 and 100. Use nested ternary operators to 
classify the score into grades: A (>= 90), B (>= 75), C (>= 60), D (>= 45), and F (below 45). Log the grade. */

let score = prompt("Enter  score value");

console.log("Entered score value is: " + "  " + score);

let grades =
  score >= 90
    ? " Grade: A"
    : score >= 75
    ? "Grade: B"
    : score >= 65
    ? "Garde: C"
    : score >= 45
    ? "Grade: D"
    : score < 45
    ? "Garde D"
    : "no value";

console.log("Your" +  "  " + grades);
