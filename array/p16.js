// Sort Scores in Descending Order:
// A sports team scored [10, 50, 30, 20]. Write a function to sort these scores in descending order without using .sort().
// Hint: Use nested loops for sorting.

const sortScoresDescending = (scores) => scores.sort((a, b) => b - a);

const scores = [10, 50, 30, 20];
console.log(sortScoresDescending(scores)); 
