function sort(arr, left, right) {
  let mid = Math.floor((left + right) / 2);
  let poiet = arr[mid];

  while(left < right) {
    while(arr[left] < poiet) {
      left++;
    }
    while(arr[right] > poiet) {
      right--
    }
    if(left < right) {
      let tmp;
      tmp = arr[left];
      arr[left] = arr[right];
      arr[right] = tmp;
      left++;
      right--;
    }
  }
  return left;
}

function quickSort(arr, left=0, right=arr.length-1) {
  if(arr.length <= 1) return arr;
  let index = sort(arr, left, right);
  if(left < index) {
    quickSort(arr, 0, index - 1)
  }
  if(right > index + 1) {
    quickSort(arr, index + 1, arr.length - 1)
  }
  return arr
}

let arr = [78,34,24,22,67,15,65,14];
quickSort(arr);
console.log(arr);