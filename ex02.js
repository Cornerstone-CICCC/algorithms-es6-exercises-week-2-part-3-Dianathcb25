// Exercise 2: Rest Operator
// Instructions: Write a function named `subtract` that takes any number of arguments and returns their difference. 
// Use the rest operator to handle the variable number of arguments. 
// Test your function with different numbers of arguments.

function subtract(...numbers) {
  const diff = numbers.reduce((acc, curr) => acc - curr, numbers[0])
}
console.log(subtract(10, 3, 2)); // Example usage
console.log(subtract(65, 89, 12))
console.log(subtract(6, 1, 78))