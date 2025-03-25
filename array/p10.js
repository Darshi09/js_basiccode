// Get the Last Product Sold:
// A store records product sales as ["Shoes", "T-shirt", "Hat"]. Write a function to get the last product sold.
// Hint: Access the last array element.

const getLastProduct = (products) => products[products.length - 1];

const sales = ["Shoes", "T-shirt", "Hat"];
console.log(getLastProduct(sales)); 