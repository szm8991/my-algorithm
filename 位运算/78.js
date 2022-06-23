/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let n = nums.length
  let res = []
  for (let mask = 0; mask < 1 << n; mask++) {
    let path = []
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) path.push(nums[i])
    }
    res.push(path)
  }
  return res
}
