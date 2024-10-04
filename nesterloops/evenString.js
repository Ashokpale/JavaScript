

let str = "23456937";
let evenSum = 0;
let oddSum = 0;

for(let i = 0; i<=str.length; i++){
    
    if(str.charAt(i)%2  == 0){

        console.log(str.charAt(i));

        evenSum +=Number(str.charAt(i)); 

    }
    else{
        oddSum +=Number(str.charAt(i)); 
    }

}

console.log(`even sum : ${evenSum}`);
console.log(`odd sum : ${oddSum}`);



