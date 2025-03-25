// Find the Highest Temperature:
// A weather app shows the temperatures recorded in a city over 7 days as [32, 35, 30, 31, 33, 36, 34]. Write a function to find the highest temperature in the array.
// Hint: Use a loop or the Math.max function.

const weeklyTemperatures = [32, 35, 30, 31, 33, 36, 34];
const findHighestTemperature = (temperatures) => Math.max(...temperatures);
console.log(`Highest temperature of the week: ${findHighestTemperature(weeklyTemperatures)}°C`);
