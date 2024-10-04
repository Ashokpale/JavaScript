


// Task:
// Assume a variable dish holds the name of the dish as a string (e.g.,  "Biriyani", "shawarma", "Fried rice", "veg pula").
// Print the price.



let dish = prompt("Enter the name of the dish");
let price;

switch(dish.toLowerCase()) { 
  case "biriyani":
    price = "Price: ₹250";
    break;
  case "shawarma":
    price = "Price: ₹130";
    break;
  case "fried rice":
    price = "Price: ₹100";
    break;
  case "veg pula":
    price = "Price: ₹70";
    break;
  default:
    price = "Dish not available";
}

console.log(price);
