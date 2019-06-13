const quickSortIterative = function(arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length-1];
    const left = [];
    const right = [];

    for (let i=0; i < arr.length-1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSortIterative(left), pivot, ...quickSortIterative(right)];
};


const quickSortFilter = function(arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length-1];

    const left = arr.filter(el => el < pivot);
    const right = arr.filter(el => el > pivot);

    return [...quickSortFilter(left), pivot, ...quickSortFilter(right)];
};

const quickSortReduce = function(arr) {
    if (arr.length <= 1) return arr;

    const [pivot, ...rest] = arr;

    const [smaller, bigger] = rest.reduce(([smaller, bigger], item) => {
        return item < pivot
            ? [[item, ...smaller], bigger]
            : [smaller, [item, ...bigger]]
    }, [[],[]]);

    return [...quickSortReduce(smaller), pivot, ...quickSortReduce(bigger)];
};


console.log('Quick Sort(Iterative):', quickSortIterative([2, 6, 5, 3, 8, 7, 1, 0, 4]));
console.log('Quick Sort(Filter):   ', quickSortFilter([2, 6, 5, 3, 8, 7, 1, 0, 4]));
console.log('Quick Sort(Reduce):   ', quickSortReduce([2, 6, 5, 3, 8, 7, 1, 0, 4]));

