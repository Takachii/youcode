let firstArray = ["hello", "world", "youcode"];
console.log(firstArray, firstArray[0], firstArray[1], firstArray[2])

firstArray.push("SAS")
console.log(firstArray)

firstArray.pop()
console.log(firstArray)

firstArray.splice(0, 1)
console.log(firstArray)

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 30 }
];

const adults = users.filter(selected => selected.age >= 18);

console.log(adults);

function foundValue(arr, value) {
    let count = 0;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === value) count++
    }
    return count > 0
}

function mergeArrays(arr1, arr2) {
    let result = arr1
    for (let i=0; i<arr2.length; i++) {
        if (!foundValue(result, arr2[i])) arr1.push(arr2[i])
    }
    return arr1
}

console.log(mergeArrays([1, 2, 3], [3, 4, 5]))