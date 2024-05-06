// Find count of digits in a number

// Solution 1
const countDigits = (number) => {
  return parseInt(String(number).length, 10);
};

console.log(countDigits(123456)); // Output: 6

// Solution 2
const countDigits = (number) => {
  let count = 0;
  number = Math.abs(number);
  while (number !== 0) {
    number = Math.floor(number/10);
    count++;
  }
  return count;
};

console.log(countDigits(123456)); // Output: 6
