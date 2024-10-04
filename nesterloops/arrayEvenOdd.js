

//find even number in arry  [23,54,67,64,46,95,98] and add odd sum  and even sum  
let arr=[23,54,67,64,46,95,98];
let evenSum = 0;
let oddSum = 0;

for ( let i = 0 ; i<arr.length; i++){
    if(arr[i]%2 == 0){
         console.log(`Even number : ${arr[i]}`);
         evenSum +=arr[i]; 
    }
    else{
        oddSum +=arr[i];
    }
}
     console.log(`even sum : ${evenSum}`);
           console.log(`odd sum : ${oddSum}`);
 