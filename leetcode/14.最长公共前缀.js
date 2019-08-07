/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""
 * 输入: ["flower","flow","flight"] 输出: "fl"
 * 
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
    let res = ''
    let length = strs.length

    if(length <= 1) {
      return res
    }

    let n = strs[0].length
    let isSame = true

    for(let i = 0; i < n; i++) {
      let char = strs[0][i]
      for(let j = 1; j < length; j++) {
        if(char != strs[j][i]) {
          isSame = false
          break
        }
      }
      if(isSame) {
        res += char
      } else {
        break
      }
    }
    
    return res;
};

console.log(longestCommonPrefix(['flower', 'flow']))