function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    var pivotIndex = Math.floor(arr.length / 2);
    var leftPart = arr.slice(0, pivotIndex);
    var rightPart = arr.slice(pivotIndex);
    return merge(mergeSort(leftPart), mergeSort(rightPart));
}
function merge(left, right) {
    var result = [];
    var indexLeft = 0;
    var indexRight = 0;
    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft]);
            indexLeft++;
        }
        else {
            result.push(right[indexRight]);
            indexRight++;
        }
    }
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}
console.log(mergeSort([2, 8, 5, 3, 9, 4, 1, 7, 9]));
//# sourceMappingURL=merge.js.map