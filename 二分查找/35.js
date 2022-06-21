/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1,
    ans = right + 1
  while (left <= right) {
    let mid = left + ((right - left) >> 1)
    if (nums[mid] >= target) {
      ans = mid
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    }
  }
  return ans
}
