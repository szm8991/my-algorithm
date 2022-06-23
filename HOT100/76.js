/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  // 需要字符的Map
  const need = {}
  for (let c of t) {
    // 统计需要的字符
    need[c] = (need[c] || 0) + 1
  }
  // 需要的字符种类
  let needType = Object.keys(need).length
  // 窗口左右指针
  let l = 0,
    r = 0
  // 答案
  let res = ''
  while (r < s.length) {
    let c = s[r]
    if (need[c] !== undefined) {
      need[c]--
      if (need[c] === 0) needType -= 1
    }
    while (needType === 0) {
      const newRes = s.substring(l, r + 1)
      if (!res || newRes.length < res.length) res = newRes
      const c2 = s[l]
      if (need[c2] !== undefined) {
        need[c2]++
        if (need[c2] === 1) needType += 1
      }
      l += 1
    }
    r += 1
  }
  return res
}
minWindow('ADOBECODEBANC', 'ABC')
