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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) return []
  let p = root
  while (p) {
    //  Morris遍历
    if (p.left) {
      let cur = p.left
      while (cur.right) cur = cur.right
      cur.right = p.right
      p.right = p.left
      p.left = null
    }
    p = p.right
  }

  return root
}
