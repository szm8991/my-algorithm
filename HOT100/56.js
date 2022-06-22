/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let res = []
  // 按区间起始位置从小到大排序
  intervals.sort((a, b) => a[0] - b[0])
  let prev = intervals[0]
  for (let i = 1; i < intervals.length; i++) {
    // cur为当前区间
    let cur = intervals[i]
    // 区间交叉了，要合并
    if (prev[1] >= cur[0]) {
      prev[1] = Math.max(cur[1], prev[1])
    }
    // 区间没交叉,记录答案
    else {
      res.push(prev)
      prev = cur
    }
  }
  // 最后一个区间记录一下
  res.push(prev)
  return res
}
