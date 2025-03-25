// Remove the First Task:
// You have a to-do list: ["Buy groceries", "Clean room", "Study"]. Write a function to remove the first task from the list and return the updated list.
// Hint: Use .shift().

let arr = ["Buy groceries", "Clean room", "Study"];
let shiftValue = arr.shift();

console.log(shiftValue);
arr.unshift("washing cloth");
console.log(arr);