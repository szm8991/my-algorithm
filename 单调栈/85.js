/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  const m = matrix.length
  if (m === 0) {
    return 0
  }
  const n = matrix[0].length
  const heights = new Array(n).fill(0)
  let ans = 0
  for (let i = 0; i < m; i++) {
    // 以每一行为矩形计算最大面积
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '1') heights[j]++
      else heights[j] = 0
    }
    ans = Math.max(ans, maxArea(heights))
  }
  return ans
}
function maxArea(heights) {
  let stack = [],
    ans = 0
  heights.push(-1)
  for (let i = 0; i < heights.length; i++) {
    // 栈不为空，且当前元素小于栈顶元素，弹出栈顶元素计算面积
    while (stack.length != 0 && heights[i] < heights[stack[stack.length - 1]]) {
      let index = stack.pop()
      let left = stack.length == 0 ? -1 : stack[stack.length - 1]
      ans = Math.max(ans, (i - left - 1) * heights[index])
    }
    stack.push(i)
  }
  return ans
}
