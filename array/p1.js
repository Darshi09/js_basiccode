// Calculate Total Expenses:
// A family wants to calculate their weekly expenses. They spent ₹200, ₹150, ₹100, ₹350, and ₹50 over five days. Write a function to calculate the total expense.
// Hint: Sum all elements of the array.

function calculateTotalExpense(expenses) {
    return expenses.reduce((total, expense) => total + expense);
}

const dailyExpenses = [200, 150, 100, 350, 50];
const totalExpense = calculateTotalExpense(dailyExpenses);
console.log(`Total weekly expense: ₹${totalExpense}`);
