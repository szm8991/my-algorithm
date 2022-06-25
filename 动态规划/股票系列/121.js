/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const n = prices.length
  // 相当于允许手上现金数为负数，只能做一笔交易
  // dp[i][0] 下标为 i 这天结束的时候，不持股，手上拥有的现金数
  // dp[i][1] 下标为 i 这天结束的时候，持股，手上拥有的现金数
  const dp = new Array(n).fill().map(item => new Array(2).fill(0))
  ;(dp[0][0] = 0), (dp[0][1] = -prices[0])
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
  }
  return dp[n - 1][0]
}
