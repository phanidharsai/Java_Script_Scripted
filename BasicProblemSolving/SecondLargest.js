const arr = [37, 69, 269, 37, 159, 16, 159, 111, 269];
function secondLargest(array) {
  let largest = -1;
  let secondLargest = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      secondLargest = largest;
      largest = array[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
console.log(secondLargest(arr));
