/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0,
    right = nums.length - 1
  while (left < right && nums[left] == nums[right]) left++
  while (left < right) {
    let mid = (left + right) >> 1
    if (nums[mid] <= nums[nums.length - 1]) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return nums[right]
}
