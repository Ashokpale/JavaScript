

function convertedTemperature(temp,scale){
  
    console.log(`Given temperature is: ${temp} and scale is: ${scale}`);

    if(scale === "C") {
        return `Temperature is convert to the Celsius  is : ${(temp-32) * 5/9}`;
    }
    else if(scale === "F"){

        return `Temperature is convert to the Fahrenheit  is : ${(temp-9/5) + 32}`;
    }      
    
}

console.log(convertedTemperature(32 , "C"));
console.log(convertedTemperature(0 , "F"));
console.log(convertedTemperature(45, "F"));
console.log(convertedTemperature(96 , "C"));



