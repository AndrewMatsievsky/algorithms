function mergeSort(arr: number[]): number[] {
    if(arr.length === 1) {
        return arr;
    }

    const pivotIndex: number = Math.floor(arr.length / 2);

    const leftPart:  number[] = arr.slice(0, pivotIndex);
    const rightPart: number[] = arr.slice(pivotIndex);

    return merge(mergeSort(leftPart), mergeSort(rightPart))
}

function merge(left, right) {
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;

    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft]);
            indexLeft++
        } else {
            result.push(right[indexRight]);
            indexRight++
        }
    }

    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

console.log(mergeSort([2, 8, 5, 3, 9, 4, 1, 7, 9]));