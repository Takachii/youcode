const fleet = [
    { plate: "A123", model: "Dacia Logan", dailyRate: 30, available: true },
    { plate: "B456", model: "Renault Clio", dailyRate: 25, available: true },
    { plate: "C789", model: "Toyota Corolla", dailyRate: 40, available: false },
    { plate: "D012", model: "Hyundai Accent", dailyRate: 28, available: true }
];

// Step 1

console.log("=== Car Rental Fleet Manager ===");
console.log(fleet);

// Step 2

function findCarByPlate(list, plate) {
    for (let i=0; i<list.length; i++) 
        if (list[i] && list[i].plate === plate) return list[i]
    return null
}

console.log("Find B456:", findCarByPlate(fleet, "B456"))
console.log("Find Z999:", findCarByPlate(fleet, "Z999"))

// Step 3

function setFleetAvailable(list, plate, value) {
    for (let i=0; i<list.length; i++) 
        if (list[i] && list[i].plate === plate) {
            list[i].available = value
            return true
        }
    return null
}

function rentCar(list, plate) {
    if (findCarByPlate(list, plate) && findCarByPlate(list, plate).available) return setFleetAvailable(list, plate, false)
    return false
}

console.log("Rent B456:", rentCar(fleet, "B456"))
console.log("Rent C789 (already rented):", rentCar(fleet, "C789"))

// Step 4

function countAvailable(list) {
    let count=0;
    for (let i=0; i<list.length; i++) if (fleet[i].available) count++;
    return count;
}

console.log("Available cars:", countAvailable(fleet))

// Step 5

function fleetValue(list) {
    let total=0;
    for (let i=0; i<list.length; i++) total+=list[i].dailyRate;
    return total;
}

console.log("Total fleet value:", fleetValue(fleet))

// Step 6

function cheapestAvailableCar(list) {

    let cheapset=list[0].dailyRate;
    let cheapsetIndex=0;
    
    for (let i=0; i<list.length; i++) 
        if (list[i].available) {
            if (list[i].dailyRate<cheapset) 
                cheapset = list[i].dailyRate;
                cheapsetIndex = i;
            }
    
    return list[cheapsetIndex];

}

console.log("Cheapest available car:", cheapestAvailableCar(fleet))