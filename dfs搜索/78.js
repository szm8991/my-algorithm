/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = []
  dfs(0, [])
  return res
  function dfs(idx, path) {
    if (idx == nums.length) {
      res.push(path)
      return
    }
    dfs(idx + 1, path)
    dfs(idx + 1, [...path, nums[idx]])
  }
}
