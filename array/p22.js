// Check if a Name is a Palindrome:
// A child enters the name "radar" into a game. Write a function to check if the name is a palindrome (same forwards and backwards).
// Hint: Compare string to its reverse.

const isPalindrome = (name) => name === name.split('').reverse().join('');
const name = "radar";
console.log(isPalindrome(name)); 
