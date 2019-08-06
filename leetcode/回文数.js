/**
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 示例：121 true -121(121-) false 10 false
 * 
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false
  if (x < 10) return true

  let str = x.toString()
  let i = 0
  let j = str.length - 1
  while(str[i] === str[j] && i < j) {
    i++
    j--
  }
  return (i>=j)
};

console.log(isPalindrome(-121))
