const weight1 = 4, distance1 = 60;
const weight2 = 15, distance2 = 80;
const weight3 = 30, distance3 = 50;

// Step 1

console.log("=== Package Shipping Cost Estimator ===")
console.log(weight1, distance1, weight2, distance2, weight3, distance3)

// Step 2

function baseFee(weight) {
    if (weight <= 5) {
        return 20
    }else if (weight >= 6 && weight <= 20) {
        return 50
    } else {
        return 90
    }
}

console.log("Base fee for package 1:", baseFee(weight1))
console.log("Base fee for package 2:", baseFee(weight2))
console.log("Base fee for package 3:", baseFee(weight3))

// Step 3

function distanceSurcharge(distance) { return distance*0.5; }
console.log("Distance surcharge for package 1:", distanceSurcharge(distance1))
console.log("Distance surcharge for package 2:", distanceSurcharge(distance2))
console.log("Distance surcharge for package 3:", distanceSurcharge(distance3))

// Step 4

function totalCost(weight, distance) { return baseFee(weight) + distanceSurcharge(distance); }
console.log("Total cost for package 1:", totalCost(weight1, distance1))
console.log("Total cost for package 2:", totalCost(weight2, distance2))
console.log("Total cost for package 3:", totalCost(weight3, distance3))

// Step 5

function isRealistic(weight, distance) { return weight > 0 && weight <= 100 && distance > 0 && distance <= 3000; }
console.log("Package 1 valid:", isRealistic(weight1, distance1))
console.log("Package 2 valid:", isRealistic(weight2, distance2))
console.log("Package 3 valid:", isRealistic(weight3, distance3))

// Step 6

function estimateShipping(weight, distance) {
    if (!isRealistic(weight, distance)) return "Invalid weight or distance !";
    return totalCost(weight, distance);
}

console.log("Estimate for package 1:", estimateShipping(weight1, distance1))
console.log("Estimate for package 2:", estimateShipping(weight2, distance2))
console.log("Estimate for package 3:", estimateShipping(weight3, distance3))

// Bonus Section
// Bonus Step 1

function applyLoyaltyDiscount(cost, isLoyalCustomer) { return cost = isLoyalCustomer ? cost *= 0.9 : cost }

console.log("Package 2 original cost: " + applyLoyaltyDiscount(totalCost(weight2, distance2), false) + " MAD")
console.log("Package 2 discounted cost: " + applyLoyaltyDiscount(totalCost(weight2, distance2), true) + " MAD")

// Bonus Step 2

function shippingTier(cost) {
    if (cost <= 60) return "Standard"
    else if ( cost >= 61 && cost <= 100 ) return "Express"
    else return "Premium"
}

console.log("Package 1 tier:", shippingTier(totalCost(weight1, distance1)))
console.log("Package 2 tier:", shippingTier(totalCost(weight2, distance2)))
console.log("Package 3 tier:", shippingTier(totalCost(weight3, distance3)))

// Bonus Step 3

const baseFeeArrow = (weight) => {
    if (weight <= 5) {
        return 20
    }else if (weight >= 6 && weight <= 20) {
        return 50
    } else {
        return 90
    }
}

console.log("Arrow base fee package 1:", baseFeeArrow(weight1))
console.log("Arrow base fee package 2:", baseFeeArrow(weight2))
console.log("Arrow base fee package 3:", baseFeeArrow(weight3))

let insuranceRate = 0.1;
const insuranceFee = (cost) => { return cost * insuranceRate }

console.log("Insurance fee package 1:", insuranceFee(totalCost(weight1, distance1)))
console.log("Insurance fee package 2:", insuranceFee(totalCost(weight2, distance2)))
console.log("Insurance fee package 3:", insuranceFee(totalCost(weight3, distance3)))