// find the factorial of n

function recursive(n) {
  if (n === 1) {
    return 1;
  }
  return n * recursive(n - 1);
}

console.log(recursive(16));
