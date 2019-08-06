/**
 * 题目描述
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 * 例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2} 由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。
 * 如果不存在则输出0。
 * 
 * 解题思路
 * 对数组进行排序，如果某个字数出现次数超过长度一半，则肯定是中间的数字
 * 获取到中间的数字后统计出现次数，如果超过一半返回，否则返回0
 */

function MoreThanHalfNum_Solution(arr)
{
    if(arr.length <= 2) {
      return 0;
    }
    arr.sort((a, b) => {
      return a-b
    })

    let mid = arr[Math.floor(arr.length/2)]
    let count = arr.lastIndexOf(mid) - arr.indexOf(mid) + 1;
    if(count > arr.length/2) {
      return mid
    }else {
      return 0
    }
}

let arr = [1,3,3,3,3,5,4,3]

console.log(MoreThanHalfNum_Solution(arr))