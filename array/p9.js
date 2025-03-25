// Find Second Largest Sale Amount:
// A shop recorded sales amounts: [200, 400, 100, 700, 500]. Write a function to find the second-largest sale.
// Hint: Sort the array or find the largest, then exclude it.

const secondLargestSale = (sales) => [...new Set(sales)].sort((a, b) => b - a)[1];

const sales = [200, 400, 100, 700, 500];
console.log(secondLargestSale(sales))