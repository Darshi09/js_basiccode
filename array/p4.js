// Calculate Average Salary:
// In a company, the monthly salaries of 5 employees are [45000, 55000, 30000, 70000, 60000]. Write a function to calculate the average salary.
// Hint: Sum all elements and divide by the array length.

const averageSalary = (salaries) => salaries.reduce((a, b) => a + b, 0) / salaries.length;

const salaries = [45000, 55000, 30000, 70000, 60000];
console.log(averageSalary(salaries)); 
