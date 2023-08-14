// fibonacci series 0,1,1,2,3,5,8,13......
//input  7
//output 13

const fibonacci = function (n) {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
};

console.log(fibonacci(7));

//fibonacci using recursion

const recFibonacci = (x) =>
  x <= 1 ? x : recFibonacci(x - 1) + recFibonacci(x - 2);

console.log(recFibonacci(7));
