// Multiply All Prices by Discount:
// A store wants to apply a 10% discount to all prices: [1000, 2000, 1500, 2500]. Write a function to return new prices after applying the discount.
// Hint: Multiply each price by 0.9.

const applyDiscount = (prices, discount = 0.1) => prices.map(price => price * (1 - discount));

const prices = [1000, 2000, 1500, 2500];
console.log(applyDiscount(prices)); 
