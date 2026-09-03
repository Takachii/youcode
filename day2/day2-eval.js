// Étape 1

const passengerName = "Yassine";

let weightKg = 27;
let isOversized = true;
let ticketClass = "affaires";

console.log(weightKg, isOversized, ticketClass)

// Étape 2

let fee = 0

if ( weightKg >= 21 && weightKg <= 31 ) {
    fee = 15
} else if ( weightKg >= 32 ) {
    fee = 40
}

console.log("Frais de base :", fee)

// Étape 3

fee = isOversized ? fee + 10 : fee
console.log("Frais après supplément bagage surdimensionné :", fee)

// Étape 4

switch (ticketClass) {
    case "économique":
    case "affaires":
        fee -= 5;
        break
    case "première":
        fee = 0;
        break
    default:
        fee = fee;
}

console.log("Frais après ajustement de classe :", fee)

// Étape 5

let isValidWeight;
isValidWeight = weightKg > 0 && weightKg <= 100;
console.log("Poids valide :", isValidWeight);

// Étape 6

console.log(`Frais de bagage pour ${passengerName} (${weightKg}kg) : ${fee} MAD`)

// Étape 7

let isDiplomat = true;
if (isDiplomat) fee = 0 // here we can use `isDiplomat ? fee = 0 : fee` for better syntax

console.log(`Exonération diplomatique appliquée, nouveau frais : ${fee} MAD`)

// Étape 8

switch (true) {
    case ( fee === 0 ):
        console.log("Aucun frais");
        break
    case ( fee > 0 && fee <= 20 ):
        console.log("Faible");
        break
    case ( fee > 20 ):
        console.log("Élevé");
        break
    default:
        console.log("Aucun frais")
}

// Thank you !