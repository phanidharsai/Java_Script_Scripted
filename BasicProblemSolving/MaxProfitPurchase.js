// maximun profit that can be earned
// given an array of stock prices each element corresponding to price on particular day calculate and
// find the max possible profit that can be earned
// input: prices=[800000,300000,500000,200000,700000,900000]  =====> output: 700000

// using GREEDY ALGORITHM

const maxProfit = function (prices) {
  var currentProfit = 0;
  var currentMinPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < currentMinPrice) {
      currentMinPrice = prices[i];
    }
    currentProfit = Math.max(currentProfit, prices[i] - currentMinPrice);
  }
  return currentProfit;
};

prices = [800000, 300000, 500000, 200000, 700000, 900000];
console.log(maxProfit(prices));
