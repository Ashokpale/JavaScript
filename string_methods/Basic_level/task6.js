
/*Task 2: Email Formatter
Scenario: Format an email address. Task:
Prompt the user to enter their first and last name.
Convert the names to lowercase and concatenate them with a dot in between.
concat “@gmail.com” to the result and display the formatted email address.  */




// Prompt the user to enter their first and last name
const firstName = prompt("Enter your first name:");
const lastName = prompt("Enter your last name:");

const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;

console.log("Formatted Email Address:", email);
