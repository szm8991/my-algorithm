/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let preMax = nums[0]
  let preMin = nums[0]
  let ans = nums[0]
  for (let i = 1; i < nums.length; i++) {
    let a = preMax * nums[i],
      b = preMin * nums[i]
    preMax = Math.max(a, b, nums[i])
    preMin = Math.min(a, b, nums[i])
    ans = Math.max(ans, preMax)
  }
  return ans
}
