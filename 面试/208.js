var Trie = function () {
  this.children = {}
}

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let children = this.children
  for (let ch of word) {
    if (!children[ch]) {
      children[ch] = {}
    }
    children = children[ch]
  }
  children.end = true // 最后一个节点标记一下结束
}

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let ret = this.startsWith(word)
  return ret && ret.end !== undefined
}

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let { children } = this
  for (let ch of prefix) {
    if (!children[ch]) return false
    children = children[ch]
  }
  return children
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
