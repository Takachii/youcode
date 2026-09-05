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

for (i=1; i<=workoutMinutes.length; i++) {
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

// Fin