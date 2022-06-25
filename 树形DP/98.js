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
 * @return {boolean}
 */
var isValidBST = function (root) {
  return process(root, -Infinity, Infinity)
}
function process(node, left, right) {
  if (node == null) {
    return true
  }
  if (node.val <= left || node.val >= right) {
    return false
  }
  return process(node.left, left, node.val) && process(node.right, node.val, right)
}
