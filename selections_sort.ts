function selectionSort(arr): number[] {
    for (let i=0; i < arr.length-1; i++) {
        let minimum = i;

        for (let j = i+1; j < arr.length-1; j++) {
            if (arr[j] < arr[minimum]) minimum = j;
        }

        [arr[minimum], arr[i]] = [arr[i], arr[minimum]];
    }

    return arr;
}

console.log(selectionSort([2, 5, 1, 3, 4, 1, 0]));