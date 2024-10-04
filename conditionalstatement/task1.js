
// day 6

// Task:
// Get the current day of the week.
// Display the corresponding message.


let day = new Date().getDay(); // 0 is Sunday, 1 is Monday
let message = "";

switch (day) {
  case 1: // Monday
    message = "Start your week strong!";
    break;
  case 2: // Tuesday
    message = "Keep going!";
    break;
  case 3: // Wednesday
    message = "Halfway there!";
    break;
  case 4: // Thursday
    message = "Almost the weekend!";
    break;
  case 5: // Friday
    message = "Happy Friday!";
    break;
  case 6: // Saturday
  case 0: // Sunday
    message = "Enjoy your weekend!";
    break;
  default:
    message = "Have a great day!";
}

alert(message);

