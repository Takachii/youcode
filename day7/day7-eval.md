# YouCode SAS — Day 7 Evaluation (Progressive Format)
## Objects & Arrays of Objects — "RentYouCode Car Rental Fleet Manager"

**Total time:** 45 minutes


**Format:** Closed notes, no internet, solo work, console only. **One single file, built up step by step.**
**Allowed:** Everything from Day 1-6 (variables, operators, conditions, loops, functions, scope, strings, arrays) plus objects (properties, access, update) and arrays of objects (traverse, search). Nothing from later days (no sorting algorithms, no Day 8+ material).

### How this works
You're building one evolving car rental fleet manager across 6 core steps. Each step describes a **required behavior, a function signature (where relevant), and an expected output** — how you implement it internally is entirely your choice.

Given the short time limit, work efficiently: get each step's core behavior working and move on rather than polishing. Run your file after every step to confirm your output matches what's expected.

### Starter code (given — do not modify these lines)
```js
const fleet = [
  { plate: "A123", model: "Dacia Logan", dailyRate: 30, available: true },
  { plate: "B456", model: "Renault Clio", dailyRate: 25, available: true },
  { plate: "C789", model: "Toyota Corolla", dailyRate: 40, available: false },
  { plate: "D012", model: "Hyundai Accent", dailyRate: 28, available: true }
];
```

---

### Step 1 — Setup check 
Print a header `"=== Car Rental Fleet Manager ==="`, then print the starter fleet array as-is.

**Expected output after this step:**
```
=== Car Rental Fleet Manager ===
[ { plate: 'A123', model: 'Dacia Logan', dailyRate: 30, available: true },
  { plate: 'B456', model: 'Renault Clio', dailyRate: 25, available: true },
  { plate: 'C789', model: 'Toyota Corolla', dailyRate: 40, available: false },
  { plate: 'D012', model: 'Hyundai Accent', dailyRate: 28, available: true } ]
```
*(Node/your console may format the array's multi-line display differently — that's fine, the object contents just need to match.)*

---

### Step 2 — Find a car by plate
Write a function `findCarByPlate(list, plate)` that searches the fleet and returns the full matching car object, or `null` if no car has that plate. Test it on a plate that exists and one that doesn't.

**Expected additional output:**
```
Find B456: { plate: 'B456', model: 'Renault Clio', dailyRate: 25, available: true }
Find Z999: null
```

---

### Step 3 — Rent a car
Write a function `rentCar(list, plate)` that: finds the car (reuse `findCarByPlate`), and if it exists AND is currently available, marks it as unavailable and returns `true`. If the car doesn't exist, or is already unavailable, it should return `false` without changing anything. Call it once on an available car and once on the already-unavailable one, then print the fleet to confirm the update.

**Expected additional output:**
```
Rent B456: true
Rent C789 (already rented): false
```
*(Printing the updated fleet is optional but recommended for your own testing — the key requirement is that B456's `available` becomes `false` and C789 stays unchanged.)*

---

### Step 4 — Count available cars
Write a function `countAvailable(list)` that returns how many cars are currently available. Print the result for `fleet` (after Step 3's rental).

**Expected additional output:**
```
Available cars: 2
```

---

### Step 5 — Total fleet value
Write a function `fleetValue(list)` that returns the sum of every car's `dailyRate`, regardless of availability. Print the result for `fleet`.

**Expected additional output:**
```
Total fleet value: 123
```

---

### Step 6 — Cheapest available car 
Write a function `cheapestAvailableCar(list)` that returns the car object with the lowest `dailyRate` among only the currently available cars (ignore unavailable ones entirely). Print the result for `fleet`.

**Expected additional output:**
```
Cheapest available car: { plate: 'D012', model: 'Hyundai Accent', dailyRate: 28, available: true }
```

---

## Full expected console output 
```
=== Car Rental Fleet Manager ===
[ { plate: 'A123', model: 'Dacia Logan', dailyRate: 30, available: true },
  { plate: 'B456', model: 'Renault Clio', dailyRate: 25, available: true },
  { plate: 'C789', model: 'Toyota Corolla', dailyRate: 40, available: false },
  { plate: 'D012', model: 'Hyundai Accent', dailyRate: 28, available: true } ]
Find B456: { plate: 'B456', model: 'Renault Clio', dailyRate: 25, available: true }
Find Z999: null
Rent B456: true
Rent C789 (already rented): false
Available cars: 2
Total fleet value: 123
Cheapest available car: { plate: 'D012', model: 'Hyundai Accent', dailyRate: 28, available: true }
```

---