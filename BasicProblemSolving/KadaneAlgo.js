// max sum of sub array
// input: [-5,-5,-6,-4,-1,-7,-9,-8]  =====> output:23

function maxSumOfSubArray(arr) {
  let maxSum = arr[0];
  let currentSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    if (maxSum < currentSum) {
      maxSum = currentSum;
    }
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return maxSum;
}

console.log(maxSumOfSubArray([-5, -5, -6, -4, -1, -7, -9, -8]));
