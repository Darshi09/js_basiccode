// Merge Two Student Lists:
// Two classes have student lists: ["Rahul", "Neha"] and ["Aman", "Priya"]. Write a function to merge both lists.
// Hint: Use .concat() or spread operator.

const mergeStudentLists = (list1, list2) => list1.concat(list2);

const class1 = ["Rahul", "Neha"];
const class2 = ["Aman", "Priya"];
console.log(mergeStudentLists(class1, class2)); 
