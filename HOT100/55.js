/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let max = 0 //最远可以达到的索引位置
  for (let i = 0; i <= max; i++) {
    max = Math.max(max, i + nums[i])
    if (max >= nums.length - 1) return true
  }
  return false
}
