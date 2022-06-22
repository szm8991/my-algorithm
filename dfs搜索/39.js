/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const ans = []
  const dfs = (target, path, idx) => {
    if (idx === candidates.length) {
      return
    }
    if (target === 0) {
      ans.push(path)
      return
    }
    // 直接跳过
    dfs(target, path, idx + 1)
    // 选择当前数
    if (target - candidates[idx] >= 0) {
      dfs(target - candidates[idx], [...path, candidates[idx]], idx)
    }
  }
  dfs(target, [], 0)
  return ans
}
