/**
 * 题目描述
 * 请实现一个函数，把字符串中的每个空格替换成"%20"
 * 例如输入“We are happy.”，则输出“We%20are%20happy.”
 * 
 * 解题思路
 * (1)正则表达式
 */
function replaceWhite(str) {
  return str.replace(/\s/g, '%20')
}

console.log(replaceWhite('we are happy'))

