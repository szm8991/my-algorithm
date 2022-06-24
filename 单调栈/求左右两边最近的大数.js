//给一个数组(无重复值)，求每一个位置的数左边离他最近的比他大的数和右边离他最近的比他大的数
//遍历数据依次入栈，并维持栈的严格单调递增(从栈底到栈顶)，弹出数据时生成答案，数据压着的数就是左边比你大的，待入栈的就是右边比你大的
function singleStack(arr) {
  let stack = []
  let res = []
  for (let i = 0; i < arr.length; i++) {
    let now = arr[i]
    while (arr[stack[stack.length - 1]] < now) {
      let index = stack.shift()
      res[index] = {
        left: arr[stack[stack.length - 1]] ?? '无',
        right: now,
      }
    }
    stack.unshift(i)
    // console.log(stack);
  }
  for (let i = 0; i < stack.length; i++) {
    let index = stack.shift()
    res[index] = {
      left: arr[stack[stack.length - 1]] ?? '无',
      right: '无',
    }
  }
  console.log(res)
}
singleStack([5, 4, 3, 6, 1, 2, 0, 7])
