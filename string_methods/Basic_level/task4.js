// take prompt and Count the number of vowels in a string--

let vowels = "aeiouAEIOU";
let str = prompt("Enter a string:");
let count = 0;
for (i = 0; i < vowels.length; i++) {
  for (j = 0; j < str.length; j++) {
    if (vowels.charAt(i) === str.charAt(j)) {
      console.log(`Found vowel: ${str.charAt(j)}`);
      count++;
    }
  }
}
console.log(`Total vowel count: ${count}`);


// Task 1: Username Validation
// Scenario: Validate a username based on specific criteria. Task:
// Prompt the user to enter a username.
// Check if the username contains characters in between 5 to 15 long.
// Display a message indicating whether the username is valid or not.

