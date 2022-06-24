/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  /*  暴力方法
    let n = heights.length
    let ans = 0
    for (let mid = 0; mid < n; ++mid) {
        // 枚举高
        let height = heights[mid]
        let left = mid,
        right = mid
        // 确定左右边界
        while (left - 1 >= 0 && heights[left - 1] >= height) {
        --left
        }
        while (right + 1 < n && heights[right + 1] >= height) {
        ++right
        }
        // 计算面积
        ans = Math.max(ans, (right - left + 1) * height)
    }
    return ans 
  */
  /* 单调栈 */
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
