/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const f = new Array(n + 1).fill(0)
  f[0] = 1

  for (let i = 1; i <= n; ++i) {
    for (let j = 1; j <= i; ++j) {
      f[i] += f[j - 1] * f[i - j]
    }
  }
  return f[n]
}
