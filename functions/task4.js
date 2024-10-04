


function average(sum,lengthOfArray) {
    return sum / lengthOfArray;
}

function calculateAverage(arr) {
    let sum = 0;
    let lengthOfArray = arr.length;
    for (let i = 0; i < lengthOfArray; i++) {
        sum += arr[i];
    }
    return average(sum, lengthOfArray);
}
let arr1 = [2, 5, 2];
let arr2 = [10, 20, 30, 40];
let arr3 = [1, 1, 1, 1, 1];
let arr4 = [100, 50];

console.log(`Average of arr1: ${calculateAverage(arr1)}`); 
console.log(`Average of arr2: ${calculateAverage(arr2)}`);  
console.log(`Average of arr3: ${calculateAverage(arr3)}`);  
console.log(`Average of arr4: ${calculateAverage(arr4)}`);  
