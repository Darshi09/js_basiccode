// Rotate the Line of Cars:
// A parking lot has cars in a line: ["Car1", "Car2", "Car3", "Car4"]. Write a function to rotate the cars so "Car4" comes to the front.
// Hint: Use .pop() and .unshift().

const rotateCars = (cars) => {
    cars.unshift(cars.pop());
    return cars;
  };
  
const cars = ["Car1", "Car2", "Car3", "Car4"];
console.log(rotateCars(cars));
  