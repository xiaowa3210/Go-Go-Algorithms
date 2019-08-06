/**
 * 题目描述
 * 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 * 
 * 解题思路
 * 因为数组的特殊性，从数组的最后一行查找，大于往后找，小于往前找
 */

 function find(target, array) {
   let n = array.length - 1;
   for(let i = n, j = 0;i >=0 && j< array[i].length;) {
      if(target === array[i][j]) {
        return true
      }else if(target < array[i][j]) {
        i--;
        continue;
      }else {
        j++;
        continue;
      }
   }
   return false;
 }