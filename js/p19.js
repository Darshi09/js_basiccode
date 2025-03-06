// Given num1 = 8 and num2 = 3, use a combination of arithmetic, assignment, and comparison operators to find if num1 is a multiple of num2 after incrementing num1 by 1. Log the result.

let num1 = 8;
let num2 = 3;

num1 += 1; 

let isMultiple = (num1 % num2 === 0); 

console.log("Is num1 a multiple of num2 after incrementing?", isMultiple);

// Is num1 a multiple of num2 after incrementing? true
