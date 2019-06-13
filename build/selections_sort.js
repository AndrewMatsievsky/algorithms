function selectionSort(arr) {
    var _a;
    for (var i = 0; i < arr.length - 1; i++) {
        var minimum = i;
        for (var j = i + 1; j < arr.length - 1; j++) {
            if (arr[j] < arr[minimum])
                minimum = j;
        }
        _a = [arr[i], arr[minimum]], arr[minimum] = _a[0], arr[i] = _a[1];
    }
    return arr;
}
console.log(selectionSort([2, 5, 1, 3, 4, 1, 0]));
//# sourceMappingURL=selections_sort.js.map