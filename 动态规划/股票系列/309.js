/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 0.不持股且当天没卖出,定义其最大收益dp[i][0];
  // 1.持股且当天没卖出,定义其最大收益dp[i][1]；
  // 2.不持股且当天卖出了，定义其最大收益dp[i][2]；
  let n = prices.length
  let dp = new Array(n).fill(0).map(item => new Array(3).fill(0))
  ;(dp[0][0] = 0), (dp[0][1] = -prices[0]), (dp[0][2] = 0)
  for (let i = 1; i < n; i++) {
    //从[1]...[n-1]
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
    dp[i][2] = dp[i - 1][1] + prices[i]
  }
  return Math.max(dp[n - 1][0], dp[n - 1][2])
}
