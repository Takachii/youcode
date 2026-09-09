const examScores = [12, 18, 9, 15, 20, 7, 14, 16, 11, 15];

// Step 1

console.log("=== Exam Score Ranking ===");
console.log(examScores);

// Step 2

function linearSearch(arr, target)
{
    for (let i=0; i<arr.length; i++) if (arr[i] === target) return i;
    return -1;
}

console.log("Find 15:", linearSearch(examScores, 15));
console.log("Find 5:", linearSearch(examScores, 5));

// Step 3

function countOccurrences(arr, target)
{
    let count = 0;
    for (let i=0; i<arr.length; i++) if (arr[i] === target) count++;
    return count;

}

console.log("Count of 15:", countOccurrences(examScores, 15));

// Step 4

function bubbleSortAscending(arr)
{
    let result=[];
    
    for (let i=0; i<arr.length; i++) {
        result.push(arr[i]);
    }

    for (let i=0; i<result.length; i++) {
        for (let j=0; j<result.length; j++) {
            if (result[j] > result[j+1]) {
                let temp = result[j+1];
                result[j+1] = result[j];
                result[j] = temp;
            }
        }
    }

    return result;

}

console.log("Sorted ascending:", bubbleSortAscending(examScores));
console.log("Original unchanged:", examScores);

// Fin