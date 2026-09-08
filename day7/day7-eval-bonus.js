const fleet = [
    { plate: "A123", model: "Dacia Logan", dailyRate: 30, available: true },
    { plate: "B456", model: "Renault Clio", dailyRate: 25, available: true },
    { plate: "C789", model: "Toyota Corolla", dailyRate: 40, available: false },
    { plate: "D012", model: "Hyundai Accent", dailyRate: 28, available: true }
];

// Bonus Step 1

fleet.push({plate: "E345", model: "Kia Picanto", dailyRate: 22, available: true});
console.log("Fleet size after adding car:", fleet.length);

// Bonus Step 2

function generateFleetReport(list) {

    console.log("=== FLEET REPORT ===");

    for (let i=0; i<list.length; i++) {
        console.log(`${list[i].plate} - ${list[i].model} - ${list[i].dailyRate} MAD/day - ${list[i].available ? "Available" : "Rented"}`)
    }

}

generateFleetReport(fleet);

// Bonus Step 3

function removeCarFromFleet(list, plate) {

    let result = [];

    for (let i=0; i<list.length; i++) {
        if (list[i].plate !== plate) result.push(list[i].plate);
    }

    return result;

}

console.log("Fleet without C789:", removeCarFromFleet(fleet, "C789"))

// Bonus Step 4

function mostExpensiveRentedCar(list) {

    let expensive = list[0].dailyRate;
    let expensiveIndex = 0;

    for (let i=0; i<list.length; i++) {
        if (list[i].dailyRate > expensive) {
            expensive = list[i].dailyRate;
            expensiveIndex = i;
        }
    }
    return list[expensiveIndex];

}

console.log("Most expensive rented car:", mostExpensiveRentedCar(fleet))