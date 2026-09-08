function binarySearch(sortedArr, target) {

    let now = Date.now();
    let low = 0, high = sortedArr.length - 1;

    while (low <= high) {
        let mid = Math.floor( (low + high) / 2 )
        if (sortedArr[mid] === target) {
            console.log(Date.now() - now, "ms")
            return mid;
        }
        else if ( sortedArr[mid] < target ) 
            low = mid + 1;
        else 
            high = mid - 1
    }

}

function linearSearch(arr, target) {
    let now = Date.now();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            console.log(Date.now() - now, "ms")
            return i;
        }
    }
    return -1;
}


console.log(binarySearch([2, 4, 8, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 27, 28, 29, 30], 30));
console.log(linearSearch([2, 4, 8, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 27, 28, 29, 30], 30));

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

function getAttemptlinearSearch(arr, target) {
    let attempt = 0;
    for (let i = 0; i < arr.length; i++) {
        attempt++;
        if (arr[i] === target) {
            return attempt;
        }
    }
    return attempt;
}

function getAttemptbinarySearch(sortedArr, target) {

    let attempt = 0;
    let low = 0, high = sortedArr.length - 1;

    while (low <= high) {
        attempt++;
        let mid = Math.floor( (low + high) / 2 )
        if (sortedArr[mid] === target) {
            return attempt;
        }
        else if ( sortedArr[mid] < target ) 
            low = mid + 1;
        else 
            high = mid - 1;
    }

}

console.log(getAttemptlinearSearch(arr, 16), getAttemptbinarySearch(arr, 16))