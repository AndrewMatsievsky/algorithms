function binarySearch(arr, elementToFind) {
  let left: number = 0;
  let right: number = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === elementToFind) {
      return mid;
    } else if (arr[mid] < elementToFind) {
      left = mid + 1;
    } else if (arr[mid] > elementToFind) {
      right = mid - 1;
    }
  }
  return false;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 2));
