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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []
  let ans = []
  let queue = []
  queue.push(root)
  while (queue.length != 0) {
    let len = queue.length
    let level = []
    while (len--) {
      let node = queue.shift()
      level.push(node.val)
      if (node.left != null) queue.push(node.left)
      if (node.right != null) queue.push(node.right)
    }
    ans.push(level)
  }
  return ans
}
