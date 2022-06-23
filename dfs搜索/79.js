/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let dx = [-1, 0, 1, 0],
    dy = [0, -1, 0, 1]
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (dfs(0, i, j)) return true
    }
  }
  return false
  function dfs(idx, x, y) {
    if (board[x][y] != word[idx]) return false
    if (idx == word.length - 1) return true
    let c = board[x][y]
    board[x][y] = '.'
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i],
        ny = y + dy[i]
      if (nx < 0 || nx >= board.length || ny < 0 || ny >= board[0].length || board[nx][ny] == '.')
        continue
      if (dfs(idx + 1, nx, ny)) return true
    }
    board[x][y] = c
    return false
  }
}
