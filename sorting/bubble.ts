function bubbleSort(arr: number[], n: number): number[] {
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
}

const arr = [5, 4, 3, 2, 1, 2, 3, 5, 1, 1, 3];

console.log(bubbleSort(arr, arr.length));
