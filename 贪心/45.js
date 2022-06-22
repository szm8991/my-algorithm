/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  // 每次在上次能跳到的范围内选择一个能跳的最远的位置作为下次的起跳点
  let curIndex = 0 // 上次跳跃可达范围右边界（下次的最右起跳点）
  let nextIndex = 0 // 目前能跳到的最远位置
  let step = 0 // 跳跃次数
  for (let i = 0; i < nums.length - 1; i++) {
    nextIndex = Math.max(nums[i] + i, nextIndex)
    if (i === curIndex) {
      curIndex = nextIndex
      step++
    }
  }
  return step
}
