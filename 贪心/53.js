/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // dp[i]->d[i-1]>0?dp[i-1]+nums[i]:nums[i]
  let max = Number.MIN_SAFE_INTEGER,
    sum = 0
  for (let i = 0; i < nums.length; i++) {
    // 当sum<0时从当前位置后新开始算最大
    sum += nums[i]
    if (sum > max) max = sum
    if (sum < 0) sum = 0
  }
  return max
}
