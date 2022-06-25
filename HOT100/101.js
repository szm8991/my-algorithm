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
var isSymmetric = function (root) {
  return check(root.left, root.right)
}
function check(p, q) {
  if (p == null && q == null) return true
  if (!p || !q || p.val != q.val) return false
  return check(p.left, q.right) && check(q.left, p.right)
}
