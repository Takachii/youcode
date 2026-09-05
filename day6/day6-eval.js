const workoutMinutes = [35, 0, 49, 84, 63, 0, 21];

// Step 1

console.log("=== Week 1 Fitness Tracker ===")
console.log(workoutMinutes)

// Step 2

workoutMinutes.push(40)
console.log("After logging today:", workoutMinutes)

// Step 3

let removedPOP = workoutMinutes.pop()
console.log("Removed entry:", removedPOP)
console.log("After correction:", workoutMinutes)

// Step 4

function totalMinutes(arr) {
    let result = 0;
    for (let i=0; i<arr.length; i++) result+=arr[i];
    return result;
}

function averageMinutes(arr) { return totalMinutes(arr) / arr.length }

console.log("Total minutes:", totalMinutes(workoutMinutes))
console.log("Average minutes:", averageMinutes(workoutMinutes))

// Step 5

function classifyDay(minutes) {
    if (minutes === 0) return "Rest"
    else if (minutes >= 1 && minutes <= 45) return "Light"
    else return "Intense"
}

for (i=1; i<=workoutMinutes.length; i++) {
    console.log(`Day ${i} : ${workoutMinutes[i-1]} min - ${classifyDay(workoutMinutes[i-1])}`)
}

// Step 6

console.log("--- Enhanced review ---")

for (let i=1; i<=workoutMinutes.length; i++) {
    if (workoutMinutes[i-1] > 80) {
        console.log(`Day ${i} : ${workoutMinutes[i-1]} min - New personal record! Stopping review.`)
        break
    }
    else if (workoutMinutes[i-1] > 0) console.log(`Day ${i} : ${workoutMinutes[i-1]} min - ${classifyDay(workoutMinutes[i-1])}`)
}

// Step 7

function bestDayIndex(arr) {

    let index = 0;
    let best = arr[0];

    for (let i=0; i<workoutMinutes.length; i++) {
        if (arr[i]>best) { 
            index = i;
            best = arr[i];
        }
    }

    return `${index} with ${best} minutes`;

}

console.log("Best day index:", bestDayIndex(workoutMinutes))

// Step 8

function countIntenseDays(arr) {
    let count = 0;
    for (let i=0; i<arr.length; i++) {
        if (classifyDay(arr[i]) === "Intense") count++;
    }
    return count;
}

console.log("Intense days:", countIntenseDays(workoutMinutes))

// Bonus Step 1

function shortestNonRestDay(arr) {
    let min = arr[0];
    for (let i=0; i<arr.length; i++) if (arr[i]>0 && arr[i]<min) min = arr[i];
    return min;
}

console.log("Shortest non-rest workout:", shortestNonRestDay(workoutMinutes))

// Bonus Step 2

function hasEnoughRestDays(arr, minRestDays) {

    let count = 0;
    for (let i=0; i<arr.length; i++) if (arr[i] === 0) count++
    return count === minRestDays

}

console.log("Meets rest requirement (2):", hasEnoughRestDays(workoutMinutes, 2))

// Bonus Step 3

const classifyDayArrow = (minutes) => {
    if (minutes === 0) return "Rest"
    else if (minutes >= 1 && minutes <= 45) return "Light"
    else return "Intense"
}

console.log("Arrow classify 0:", classifyDayArrow(0))
console.log("Arrow classify 30:", classifyDayArrow(30))
console.log("Arrow classify 90:", classifyDayArrow(90))

// Fin