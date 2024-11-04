

//reverse a string using split and join methid


// let inputStr = prompt("Enter a String");
let inputStr = "Ashok";


let splitStr = inputStr.split(" ");
console.log(splitStr);
let reverseStr = splitStr.reverse();
console.log(reverseStr);
let reStr = " ";


// loop using
for( let i =inputStr.length - 1 ; i >= 0;  i--){

    reStr = reStr + inputStr[i];

}

console.log(reStr);
let rv = inputStr.split('').reverse().join('');
console.log("reverse string " + ' ' + rv);
