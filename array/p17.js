// Split Attendees into Groups:
// An event has 10 attendees: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]. Write a function to split them into groups of 3.
// Hint: Loop and use slice().

const splitIntoGroups = (attendees, groupSize) => Array.from({ length: Math.ceil(attendees.length / groupSize) }, (_, i) => attendees.slice(i * groupSize, i * groupSize + groupSize));

const attendees = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const groupSize = 3;
console.log(splitIntoGroups(attendees, groupSize));
