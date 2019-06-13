function linearSearch(arr, elementToFind) {
    for (var i = 0; i < arr.length; i++) {
        if (elementToFind === arr[i])
            return i;
    }
    return -1;
}
console.log(linearSearch([3, 1, 5, 6, 2], 2));
//# sourceMappingURL=linear_search.js.map