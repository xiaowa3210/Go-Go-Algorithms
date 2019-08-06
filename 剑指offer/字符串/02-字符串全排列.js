/**
 * 题目描述：
 * 输入一个字符串，打印出该字符串中字符的所有排列。
 * 例如输入字符串 abc，则打印出由字符 a、b、c 所能排列出来的所有字符串 abc、acb、bac、bca、cab 和 cba。
 * 
 * 解题思路：
 * 将字符串转化为数组，即数组的全排列
 * (1) 
 */

// 交换数组中指定位置的元素
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

function perm(arr) {
  let result = [];
  
}

