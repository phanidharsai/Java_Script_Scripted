// given a start number and end number return an array with the range

function arrayOfRange(start, end) {
  if (end < start) {
    return [];
  } else {
    var numbers = arrayOfRange(start, end - 1);
    numbers.push(end);
  }
  return numbers;
}

console.log(arrayOfRange(1, 16));
