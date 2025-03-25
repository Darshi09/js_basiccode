// Remove Spaces from a Message:
// A user enters a message "Hello World 2024". Write a function to remove all spaces from the message.
// Hint: Use .replace() or .split() and .join().

const removeSpaces = (message) => message.replace(/\s/g, "");
const message = "Hello World 2024";
console.log(removeSpaces(message));
