// Remove Unwanted Values from the List:
// A form received some invalid values: [0, "A", "", null, "B", undefined]. Write a function to remove all falsey values (like 0, null, undefined) from the list.
// Hint: Use .filter().

const removeFalsyValues = (arr) => arr.filter(Boolean);
const values = [0, "A", "", null, "B", undefined];
console.log(removeFalsyValues(values));
