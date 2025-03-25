// Count Occurrences of an Item:
// A library has multiple copies of books in its inventory: ["Book A", "Book B", "Book A", "Book C", "Book A"]. Write a function to count how many times "Book A" appears.
// Hint: Use a loop or filter().

const countOccurrences = (items, itemToCount) => items.filter(item => item === itemToCount).length;

const inventory = ["Book A", "Book B", "Book A", "Book C", "Book A"];
console.log(countOccurrences(inventory, "Book A")); 

