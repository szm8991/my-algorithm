/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // 遍历一次记录各颜色的数量？
  let i = 0 // 0 区域右边界
  let j = 0 // 左指针,会在0、1时++
  let k = nums.length - 1 // 右指针,会在2时--
  while (j <= k) {
    if (nums[j] == 1) j++
    else if (nums[j] == 0) {
      swap(nums, i, j)
      i++
      j++
    } else {
      swap(nums, j, k)
      k--
    }
  }
}
function swap(arr, i, j) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}
