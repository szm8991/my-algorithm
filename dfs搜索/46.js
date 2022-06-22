/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  // let res=[];
  // let temp=[];
  // for (let i=0;i<nums.length;i++) {
  //     temp.push(nums[i]);
  // }
  // backtrack(temp,nums.length,res, 0);
  // return res;
  // let res = [];
  // let use = new Array(nums.length).fill(0);
  // let path = [];
  // usetrack(path, nums, res, 0, use);
  // return res;
  let res = []
  let path = []
  dfs(path, nums, res)
  return res
}
// 通过交换数组位置的方式判断是否用过当前索引值，返回的结果不是按字典序排列的
// 从depth往后随便选
function backtrack(path, n, res, depth) {
  // 所有数都填完了
  if (depth == n) {
    res.push([].concat(path))
  }
  for (let i = depth; i < n; i++) {
    // 动态维护数组
    swap(path, depth, i)
    // 继续递归填下一个数
    backtrack(path, n, res, depth + 1)
    // 撤销操作
    swap(path, depth, i)
  }
}
function swap(arr, i, j) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}
function usetrack(path, nums, res, depth, use) {
  // 所有数都填完了
  if (depth == nums.length) {
    res.push([].concat(path))
  }
  for (let i = 0; i < nums.length; i++) {
    if (use[i]) continue
    path.push(nums[i])
    use[i] = 1
    usetrack(path, nums, res, depth + 1, use)
    path.pop()
    use[i] = 0
  }
}
function dfs(path, nums, res) {
  // 所有数都填完了
  if (path.length == nums.length) {
    res.push([].concat(path))
  }
  for (let i = 0; i < nums.length; i++) {
    if (path.includes(nums[i])) continue
    path.push(nums[i])
    dfs(path, nums, res)
    path.pop()
  }
}
