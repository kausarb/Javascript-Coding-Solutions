//Find a digit at a specific place in a number

const getDigit = (number, place) => {
  const numString = Math.abs(number).toString();
  const indexFromRight = numString.length - place;
  if (indexFromRight >= 0 && indexFromRight < numString.length) {
    return parseInt(numString.charAt(indexFromRight), 10);
  }
  else {
    return null;
  }
};

console.log(getDigit(123456789, 3)); // Output : 7
