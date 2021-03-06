/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let l = 0,
    r = nums.length - 1
  while (l < r) {
    let mid = l + ((r - l) >> 1)
    if (nums[mid] > nums[mid + 1]) r = mid
    else l = mid + 1
  }
  return r
}
