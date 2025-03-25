// Reverse a Product Code:
// A company has a product code "AB1234". Write a function to reverse this code.
// Hint: Convert to array, reverse, and join.

const reverseCode = (code) => code.split('').reverse().join('');
const productCode = "AB1234";
console.log(reverseCode(productCode));
