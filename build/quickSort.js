var quickSortIterative = function (arr) {
    if (arr.length <= 1)
        return arr;
    var pivot = arr[arr.length - 1];
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return quickSortIterative(left).concat([pivot], quickSortIterative(right));
};
var quickSortFilter = function (arr) {
    if (arr.length <= 1)
        return arr;
    var pivot = arr[arr.length - 1];
    var left = arr.filter(function (el) { return el < pivot; });
    var right = arr.filter(function (el) { return el > pivot; });
    return quickSortFilter(left).concat([pivot], quickSortFilter(right));
};
var quickSortReduce = function (arr) {
    if (arr.length <= 1)
        return arr;
    var pivot = arr[0], rest = arr.slice(1);
    var _a = rest.reduce(function (_a, item) {
        var smaller = _a[0], bigger = _a[1];
        return item < pivot
            ? [[item].concat(smaller), bigger]
            : [smaller, [item].concat(bigger)];
    }, [[], []]), smaller = _a[0], bigger = _a[1];
    return quickSortReduce(smaller).concat([pivot], quickSortReduce(bigger));
};
console.log('Quick Sort(Iterative):', quickSortIterative([2, 6, 5, 3, 8, 7, 1, 0, 4]));
console.log('Quick Sort(Filter):   ', quickSortFilter([2, 6, 5, 3, 8, 7, 1, 0, 4]));
console.log('Quick Sort(Reduce):   ', quickSortReduce([2, 6, 5, 3, 8, 7, 1, 0, 4]));
//# sourceMappingURL=quickSort.js.map