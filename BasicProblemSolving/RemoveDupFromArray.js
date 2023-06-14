// remove duplicates from sorted array without creating any new data structure
// input: [0,0,1,1,1,1,2,2,2,3,3,4,4,5]  ====> output: 6, [0,1,2,3,4,5]

function removeDupUsingfunc(arr) {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i + 1, 1);
      i--;
    }
  }
  return arr;
}

console.log(removeDupUsingfunc([0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5]));

// using two pointer approach

function remDupUsingTwoPointer(nums) {
  if (nums.length === 0) {
    return 0;
  }
  // let i = 0;
  // for (let j = 1; j < array.length; j++) {
  //   if (array[i] !== array[j]) {
  //     i++;
  //     array[i] = array[j];
  //   }
  // }
  // return array;
  newIndex = 1; // Start with index 1 because the first element is already in place

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      // If the current element is less than the next element

      nums[newIndex] = nums[i + 1]; // Move the next element to the new index
      newIndex++; // Increment the new index
    }
  }
  return nums; // Return the length of the new subarray
}

console.log(remDupUsingTwoPointer([0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 5]));
