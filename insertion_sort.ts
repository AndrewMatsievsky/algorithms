function insertionSort(arr) {
    for (let i=0; i < arr.length; i++) {
        let el = arr[i];
        let j = i - 1;
        for(j; arr[j] > el; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = el;
    }
    return arr;
}


console.log('Insertion sort:', insertionSort([2, 6, 5, 3, 8, 4, 7, 1, 0, 4]));
