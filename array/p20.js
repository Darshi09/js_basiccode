// Count Vowels in a Name:
// A user enters their name "Rahul". Write a function to count how many vowels are in the name.
// Hint: Check for vowels (a, e, i, o, u).

const countVowels = (name) => (name.match(/[aeiou]/gi) || []).length;
const name = "Rahul";
console.log(countVowels(name));
