function myFunction(a, b) {
  //Type checking for numerical addition
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    // Handle non-numeric inputs
    console.error('Invalid input: both parameters must be numbers.');
    return NaN; // Return NaN for invalid input
  }
}

console.log(myFunction(5, 10)); // Output: 15
console.log(myFunction(5, '10')); // Output: Invalid input: both parameters must be numbers. NaN
console.log(myFunction(true, 1)); //Output: Invalid input: both parameters must be numbers. NaN