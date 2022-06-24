/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let cur = root
  let ans = []
  let stack = []
  while (cur || stack.length != 0) {
    // 先往左窜到最左
    while (cur) {
      stack.push(cur)
      cur = cur.left
    }
    // 左孩子加入结果
    cur = stack.pop()
    ans.push(cur.val)
    // 到右孩子继续
    cur = cur.right
  }
  return ans
}
