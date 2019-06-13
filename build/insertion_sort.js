function insertionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var el = arr[i];
        var j = i - 1;
        for (j; arr[j] > el; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = el;
    }
    return arr;
}
console.log('Insertion sort:', insertionSort([2, 6, 5, 3, 8, 4, 7, 1, 0, 4]));
//# sourceMappingURL=insertion_sort.js.map