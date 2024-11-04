/*
Task 3: Word Counter
Scenario: Count the number of words in a sentence. Task:
Prompt the user to enter a sentence.
Split the sentence into words and count them.
Display the word count.
Hint: use split and length method */



const sentence = "Display the word count."

const words = sentence.trim().split(/\s+/); // `\s+` handles multiple spaces

const wordCount = words.length;

console.log("Word Count:", wordCount);


