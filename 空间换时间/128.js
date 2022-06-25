/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let set = new Set(nums)
  let ans = 0
  for (let num of set) {
    if (!set.has(num - 1)) {
      let length = 1
      while (set.has(num + 1)) {
        length++, num++
      }
      ans = Math.max(ans, length)
    }
  }
  return ans
}
