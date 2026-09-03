let days = 3;
let customersPerDay = 4;
let totalDays = 0;

for (let i=1; i<= days; i++) {

    for (j=1; j<= customersPerDay; j++) {
        
        console.log("Day "+i+" - Customer "+j+" visited the ATM.")

        if (j%2 === 0) {
            totalDays++
            console.log("Day "+i+" - Customer "+j+" performed a full-service transaction.")
        }

    }
}

console.log("Total full-service transactions across all days:", totalDays)