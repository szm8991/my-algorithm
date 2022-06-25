/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const map = buildMap(inorder)
  return build(preorder, inorder)
  function build(preorder, inorder) {
    if (!preorder.length || !inorder.length) return null
    const rootVal = preorder[0]
    const node = new TreeNode(rootVal)
    const i = map.get(rootVal)
    node.left = build(preorder.slice(1, i + 1), inorder.slice(0, i))
    node.right = build(preorder.slice(i + 1), inorder.slice(i + 1))
    return node
  }
}
function buildMap(inorder) {
  const map = new Map()
  inorder.forEach((num, i) => {
    map.set(num, i)
  })
  return map
}
