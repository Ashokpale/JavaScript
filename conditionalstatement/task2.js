
// Task:
// Prompt the user to enter the color of the traffic light.
// Display the corresponding action.

let light = prompt("Enter a light color");
let display;

switch(light) {
  case "red":
    display = "Stop ";
    break;
  case "yellow":
    display = "Get Ready";
    break;
  case "green":
    display = "Go";
    break;
  default:
    display = "Have a Great Ride";
}

console.log(display);

