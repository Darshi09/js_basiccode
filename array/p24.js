// Convert a Sentence to Words:
// A sentence "JavaScript is fun" is given. Write a function to convert the sentence into an array of words.
// Hint: Use .split() with a space.

const sentenceToWords = (sentence) => sentence.split(" ");
const sentence = "JavaScript is fun";
console.log(sentenceToWords(sentence)); 