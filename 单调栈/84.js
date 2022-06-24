/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  // 求左右两边最近的小数
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
largestRectangleArea([2, 1, 5, 6, 2, 3])
