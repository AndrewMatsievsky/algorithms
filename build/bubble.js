function bubbleSort(arr, n) {
    var _a;
    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1])
                _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
        }
    }
    return arr;
}
var arr = [5, 4, 3, 2, 1, 2, 3, 5, 1, 1, 3];
console.log(bubbleSort(arr, arr.length));
//# sourceMappingURL=bubble.js.map