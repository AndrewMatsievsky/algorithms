function mergeSort(arr: number[]): number[] {
  if (arr.length === 1) {
    return arr;
  }

  const pivotIndex: number = Math.floor(arr.length / 2);

  const leftPart: number[] = arr.slice(0, pivotIndex);
  const rightPart: number[] = arr.slice(pivotIndex);

  return merge(mergeSort(leftPart), mergeSort(rightPart));
}

function merge(left, right) {
  let leftIndex = 0;
  let rightIndex = 0;
  const result = [];

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort([2, 5, 1, 3, 4, 1, 0]));
