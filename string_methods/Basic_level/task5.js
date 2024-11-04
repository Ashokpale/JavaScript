






/*Task 1: Username Validation
Scenario: Validate a username based on specific criteria. Task:
Prompt the user to enter a username.
Check if the username contains characters in between 5 to 15 long.
Display a message indicating whether the username is valid or not. */



// Prompt the user to enter a username
const username = prompt("Enter a username:");
// const username="as"

if (username.length >= 5 && username.length <= 15) {
    console.log("The username is valid.");
} else {
    console.log("Invalid username. It must be between 5 and 15 characters long.");
}
