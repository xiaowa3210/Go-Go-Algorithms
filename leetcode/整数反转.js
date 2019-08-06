/**
 * 题目描述：给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 示例：输入 123， 输出321
 * 
 * @param {number} x
 * @return {number}
 */

var reverse = function(x) {
  let str = x.toString();
  let arr = str.split('');
  let minus = '';
  if (arr[0] === '-') {
    minus = arr.shift()
  }
  arr.reverse();
  arr.unshift(minus);
  return parseInt(arr.join(''))
}
console.log(reverse(-2300))