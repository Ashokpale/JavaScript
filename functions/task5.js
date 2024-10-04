

function vowels(str){

    let vowels = "aeiou";
    
    for( let i=0 ; i < str.length;i++){
       let  char =str[i].toLowerCase();
       for( let j =0 ; j < vowels.length; j++){
        if( char === vowels[j]){
            return "The string contains vowels";
        }
       }
      
    }
    return "The string doesn't contains vowels"
}

console.log(vowels("hello"));
console.log(vowels("HEllo"));
console.log(vowels("xyzWRTrt"));






