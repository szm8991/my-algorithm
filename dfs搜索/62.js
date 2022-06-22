/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // 输入19 13 超时
  let ans = 0
  function dfs(x, y) {
    if (x == m - 1 && y == n - 1) {
      ans++
      return
    }
    if (x + 1 <= m - 1) dfs(x + 1, y)
    if (y + 1 <= n - 1) dfs(x, y + 1)
  }
  dfs(0, 0)
  return ans
}
