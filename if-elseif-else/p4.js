// A store is giving discounts based on the total bill amount. Write an if-elseif condition to determine:

// If the bill is less than $50, no discount.
// If the bill is between $50 and $100, give a 10% discount.
// If the bill is more than $100, give a 20% discount.

let bill = 120;

if (bill < 50) {
    console.log("No discount.");
} else if (bill >= 50 && bill <= 100) {
    console.log("10% discount: $"+bill*0.1+" Discount");
} else {
    console.log("20% discount: $"+bill*0.2+" Discount");
}