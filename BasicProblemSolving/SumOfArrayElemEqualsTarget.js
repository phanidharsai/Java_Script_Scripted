// input : nums=[2,7,11,15], target=9   =====> output : [0,1]

const returnIndexes = function (nums, target) {
  var obj = {};
  for (let i = 0; i < nums.length; i++) {
    var n = nums[i];
    if (obj[target - n] >= 0) return [obj[target - n], i];
    else obj[n] = i;
  }
};
var nums = [7, 6, 5, 3, 8, 6];

console.log(returnIndexes(nums, 9));
