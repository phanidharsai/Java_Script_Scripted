// using two pointer approach

function rotateArray(array, n) {
  let size = array.length;
  if (n > size) {
    n = n % size;
  }
  reverse(array, 0, size - 1);
  reverse(array, 0, n - 1);
  reverse(array, n, size - 1);
  return array;
}

function reverse(arr, left, right) {
  while (left < right) {
    const temp = arr[left];
    arr[left++] = arr[right];
    arr[right--] = temp;
  }
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));

// using inbuilt functions

function rotateArrayUsingFunc(arr, n) {
  let size = arr.length;
  if (n > size) {
    n = n % size;
  }
  const rotated = arr.splice(size - n, size);
  arr.unshift(...rotated);
  return arr;
}

console.log(rotateArrayUsingFunc([1, 2, 3, 4, 5, 6, 7], 3));
