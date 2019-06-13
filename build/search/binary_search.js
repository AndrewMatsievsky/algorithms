function binarySearch(arr, elementToFind) {
    var left = 0;
    var right = arr.length - 1;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (arr[mid] === elementToFind) {
            return mid;
        }
        else if (arr[mid] < elementToFind) {
            left = mid + 1;
        }
        else if (arr[mid] > elementToFind) {
            right = mid - 1;
        }
    }
    return false;
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 2));
//# sourceMappingURL=binary_search.js.map