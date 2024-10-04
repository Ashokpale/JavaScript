


// Task:
// Prompt the user to enter the total purchase amount.
// Display the discount percentage.


let user = parseFloat(prompt("Enter the total purchase amount"));
let discount;

if (user < 50) {
  discount = "No discount";
} else if (user >= 50 && user <= 100) {
  discount = "5% discount";
} else if (user >= 101 && user <= 200) {
  discount = "10% discount";
} else if (user >200) {
  discount = "15% discount";
} else {
  discount = "Invalid amount";
}
console.log(discount);
