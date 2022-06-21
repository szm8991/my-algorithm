/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0
  let end = nums.length - 1
  while (start <= end) {
    const mid = start + ((end - start) >> 1)
    if (nums[mid] === target) return mid
    // [start, mid]有序
    if (nums[mid] >= nums[start]) {
      if (target >= nums[start] && target <= nums[mid]) {
        end = mid - 1
      } else {
        start = mid + 1
      }
    }
    // [mid, end]有序
    else {
      if (target >= nums[mid] && target <= nums[end]) {
        start = mid + 1
      } else {
        end = mid - 1
      }
    }
  }
  return -1
}
