const isPallindrome = function (x) {
  return x < 0 ? false : x === +x.toString().split("").reverse().join("");
};

console.log(isPallindrome(121));
console.log(isPallindrome(16));
