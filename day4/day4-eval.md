# YouCode SAS — Day 4 Evaluation (Progressive Format)
## Functions & Scope — "ShipYouCode Package Shipping Cost Estimator"

**Total time (core):** 45 minutes

**Format:** Closed notes, no internet, solo work, console only. **One single file, built up step by step.**
**Allowed:** Everything from Day 1-3 (variables, operators, conditions, loops) plus functions (parameters, return, refactoring), classic function declarations and/or arrow functions, and block/function scope. Nothing from later days (no arrays, objects).

### How this works
You're building one evolving shipping cost estimator. 

Each step describes a **required behavior, a function signature, and an expected output** — how you implement the function body (classic syntax, ternaries, arrow functions, internal variable names) is entirely your choice.

If you get stuck on a step, leave a comment saying so, move on, and keep building on top of whatever you have 

Run your file after every step to confirm your output matches what's expected before moving on.

### Starter code (given — do not modify these 6 lines)
```js
const weight1 = 4, distance1 = 60;
const weight2 = 15, distance2 = 80;
const weight3 = 30, distance3 = 50;
```

---

## Core Challenge 

### Step 1 — Setup check 
Print a header `"=== Package Shipping Cost Estimator ==="`, then print all 6 starter values.

**Expected output after this step:**
```
=== Package Shipping Cost Estimator ===
4 60 15 80 30 50
```

---

### Step 2 — Base fee by weight
The base shipping fee depends on a package's weight: `5kg or less → 20`, `6 to 20kg → 50`, `above 20kg → 90`. Write a function `baseFee(weight)` that returns the correct base fee for a given weight. Print the result of calling it on each of the three packages, labeled.

**Expected additional output:**
```
Base fee for package 1: 20
Base fee for package 2: 50
Base fee for package 3: 90
```

---

### Step 3 — Distance surcharge 
A package also incurs a surcharge of `0.5` per kilometer of distance. Write a function `distanceSurcharge(distance)` that returns this surcharge. Print the result of calling it on each of the three packages, labeled.

**Expected additional output:**
```
Distance surcharge for package 1: 30
Distance surcharge for package 2: 40
Distance surcharge for package 3: 25
```

---

### Step 4 — Total cost 
A package's total shipping cost is its base fee plus its distance surcharge. Write a function `totalCost(weight, distance)` that returns this total, reusing `baseFee` and `distanceSurcharge` internally rather than recalculating their logic. Print the result of calling it on each of the three packages, labeled.

**Expected additional output:**
```
Total cost for package 1: 50
Total cost for package 2: 90
Total cost for package 3: 115
```

---

### Step 5 — Validate package data 
A package is only realistic if its weight is above `0` and at most `100`, AND its distance is above `0` and at most `3000`. Write a function `isRealistic(weight, distance)` that returns `true` or `false` accordingly. Print the result of calling it on each of the three packages, labeled.

**Expected additional output:**
```
Package 1 valid: true
Package 2 valid: true
Package 3 valid: true
```

---

### Step 6 — Full estimate with validation 
Write a function `estimateShipping(weight, distance)` that: checks validity first using `isRealistic`, and — only if the data is valid — computes and returns the total cost using `totalCost`. If the data isn't valid, it should indicate that clearly instead of returning a cost. Print the result of calling it on each of the three packages, labeled.

**Expected additional output:**
```
Estimate for package 1: 50
Estimate for package 2: 90
Estimate for package 3: 115
```


---


## Full expected console output — Core only (running Steps 1-6 top to bottom)
```
=== Package Shipping Cost Estimator ===
4 60 15 80 30 50
Base fee for package 1: 20
Base fee for package 2: 50
Base fee for package 3: 90
Distance surcharge for package 1: 30
Distance surcharge for package 2: 40
Distance surcharge for package 3: 25
Total cost for package 1: 50
Total cost for package 2: 90
Total cost for package 3: 115
Package 1 valid: true
Package 2 valid: true
Package 3 valid: true
Estimate for package 1: 50
Estimate for package 2: 90
Estimate for package 3: 115
```

---

## Bonus Section 

Offer these to candidates who finish the core early, or assign as a take-home extension. They're graded independently of how the core went.

### Bonus Step 1 — Loyalty discount
Write a function `applyLoyaltyDiscount(cost, isLoyalCustomer)` that returns `10%` less than `cost` if `isLoyalCustomer` is `true`, and `cost` unchanged otherwise. Apply this specifically to package 2's total cost, treating that customer as loyal, and print both the original and discounted cost.

**Expected output:**
```
Package 2 original cost: 90 MAD
Package 2 discounted cost: 81 MAD
```

### Bonus Step 2 — Shipping tier classification
Write a function `shippingTier(cost)` that returns `"Standard"` for `60` or below, `"Express"` for `61` to `100`, or `"Premium"` above `100`. Print the result of calling it on each of the three packages' total costs (from `totalCost`), labeled.

**Expected output:**
```
Package 1 tier: Standard
Package 2 tier: Express
Package 3 tier: Premium
```

### Bonus Step 3 — Rewrite as an arrow function 
Write a new **arrow function** `baseFeeArrow(weight)` implementing the same rule as `baseFee` (keep your original Step 2 function untouched — this is an additional, separate one). Print the result of calling it on each of the three packages.

**Expected output:**
```
Arrow base fee package 1: 20
Arrow base fee package 2: 50
Arrow base fee package 3: 90
```

### Bonus Step 4 — Arrow function with its own local variable 

Add `let insuranceRate = 0.1;`. Write an **arrow function** `insuranceFee(cost)` that declares its own local variable inside its body to hold the calculation (`cost` multiplied by `insuranceRate`) before returning it — rather than returning the calculation directly in one line. Print the result of calling it on each package's total cost (from `totalCost`).

**Expected output:**
```
Insurance fee package 1: 5
Insurance fee package 2: 9
Insurance fee package 3: 11.5
```

**Bonus scoring:** Core evaluation stays out of 100. All 4 bonus steps together add up to **+50 extra points**, so a candidate who nails everything can reach 150/100 — a strong signal for identifying standout learners without penalizing anyone who skips the bonus.


## If all 4 bonus steps are attempted, append this block afterward:
```
Package 2 original cost: 90 MAD
Package 2 discounted cost: 81 MAD
Package 1 tier: Standard
Package 2 tier: Express
Package 3 tier: Premium
Arrow base fee package 1: 20
Arrow base fee package 2: 50
Arrow base fee package 3: 90
Insurance fee package 1: 5
Insurance fee package 2: 9
Insurance fee package 3: 11.5
```

---