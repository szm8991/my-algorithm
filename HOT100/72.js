/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  return minCost(word1, word2, 1, 1, 1)
}
function minCost(str1, str2, addC, delC, remC) {
  let row = str1.length + 1,
    col = str2.length + 1
  let dp = new Array(row).fill().map(_ => new Array(col).fill())
  dp[0][0] = 0
  for (let i = 1; i < row; i++) {
    dp[i][0] = delC * i //row for origin str
  }
  for (let i = 1; i < col; i++) {
    dp[0][i] = addC * i //row for target str
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      //1.前变等+目标尾 dp[i][j]=dp[i][j-1]+addC
      //2.前变等-当前尾 dp[i][j]=dp[i-1][j]+delC
      //3.前变等替换当前尾 dp[i][j]=dp[i-1][j-1]+replaceC
      //4.前变等当前尾本身相等 dp[i][j]=dp[i-1][j-1]
      //5.取上述最小代价
      if (str1[i - 1] == str2[j - 1]) dp[i][j] = dp[i - 1][j - 1]
      else dp[i][j] = dp[i - 1][j - 1] + remC
      dp[i][j] = Math.min(dp[i][j - 1] + addC, dp[i][j], dp[i - 1][j] + delC)
    }
  }
  return dp[row - 1][col - 1]
}
