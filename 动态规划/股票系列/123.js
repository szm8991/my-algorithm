/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length <= 1) return 0
  let n = prices.length
  // 允许资金为负数
  // dp[天数][当前是否持股][卖出的次数]——资产数量
  let dp = new Array(n)
    .fill(0)
    .map(_ => new Array(2).fill(0).map(_ => new Array(3).fill(-Infinity)))
  dp[0][0][0] = 0
  dp[0][1][0] = -prices[0]
  for (let i = 1; i < n; i++) {
    // 手上没股票
    dp[i][0][0] = 0
    dp[i][0][1] = Math.max(dp[i - 1][1][0] + prices[i], dp[i - 1][0][1])
    dp[i][0][2] = Math.max(dp[i - 1][1][1] + prices[i], dp[i - 1][0][2])
    // 手上1股
    dp[i][1][0] = Math.max(dp[i - 1][1][0], dp[i - 1][0][0] - prices[i])
    dp[i][1][1] = Math.max(dp[i - 1][1][1], dp[i - 1][0][1] - prices[i])
    dp[i][1][2] = -1
  }
  return Math.max(dp[n - 1][0][1], dp[n - 1][0][2], dp[n - 1][0][0], 0)
}
