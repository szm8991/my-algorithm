/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  //异或位运算大法
  let ans = 0
  for (const num of nums) {
    ans ^= num
  }
  return ans
}
