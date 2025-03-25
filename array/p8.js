// Remove Duplicate Phone Numbers:
// A phone company wants to remove duplicate phone numbers from an array: [9876543210, 9123456789, 9876543210, 9000000000]. Write a function to remove duplicates.
// Hint: Use Set or a loop.

const removeDuplicates = (numbers) => [...new Set(numbers)];

const phoneNumbers = [9876543210, 9123456789, 9876543210, 9000000000];
console.log(removeDuplicates(phoneNumbers)); 
