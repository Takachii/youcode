let balance = 500;
let totalAttempts = 10;

// Étape 1

console.log("=== Simulateur de retrait au distributeur ===");
console.log(balance, totalAttempts);

// Étape 2 + Étape 3 + Étape 4 + Étape 5 + Étape 6

totalAttempts = 15;
for (i=1; i <= 10; i++) {
    
    if (i%4 === 0) {
        console.log("Attempt "+i+" - Invalid withdrawal request, skipped.");
        totalAttempts += 15;
        continue
    }

    console.log("Attempt "+i+" - Requested amount: "+totalAttempts);

    if ( totalAttempts > balance ) {
        console.log("Attempt "+i+" - Insufficient funds. Stopping simulation.");
        console.log("Simulation terminée. Solde final : "+balance+" MAD après "+i+" tentatives autorisées.")
        break
    }
    
    balance -= totalAttempts
    totalAttempts += 15;
    
    console.log("Attempt "+i+" - Withdrawal successful. New balance: "+balance);

    if (i == 10) console.log("Simulation terminée. Solde final : "+balance+" MAD après "+i+" tentatives autorisées.")

}

// Étape 7

let isVIP = true;
balance = isVIP ? balance += 100 : balance
console.log("Bonus VIP appliqué, nouveau solde : "+balance+" MAD")

// Étape 8

switch (true) {
    case (balance <= 100):
        console.log("Solde faible");
        break
    case (balance >= 101 && balance <= 400):
        console.log("Solde moyen");
        break
    case (balance > 400):
        console.log("Solde élevé");
        break
}