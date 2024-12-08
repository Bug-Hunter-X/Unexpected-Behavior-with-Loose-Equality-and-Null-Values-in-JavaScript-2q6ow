function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values explicitly
  }
  return a + b; // Original logic
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5)); // Output: 10