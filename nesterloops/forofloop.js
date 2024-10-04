let obj = {
  name: "SAI TEJA",
  age: 30,
  city: "Hyderabad",
  occupation: "Corporate Trainer",
};
for (let key of Object.keys(obj)) {
  console.log(`${key} : ${obj[key]}`);
}

//accessing only first key based on index 
console.log(`First value of the key is:   ${obj[Object.keys(obj)[0]]}` );

