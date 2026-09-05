# YouCode SAS — Week 1 General Evaluation (Progressive Format)
## Covers Days 1-6 (variables, operators, conditions, loops, functions, arrays) — Day 5 string methods excluded
## "FitYouCode Weekly Fitness Tracker"

**Total time (core):** 90 minutes

**Format:** Closed notes, no internet, solo work, console only. **One single file, built up step by step.**
**Allowed:** Variables (`let`/`const`), operators, conditions (`if`/`else`/`switch`), loops (`for`/`while`, `break`, `continue`), functions (classic or arrow, parameters, return, scope), and arrays (create, index, mutate, `.push()`/`.pop()`, traversal, manual search/count/reverse). **Not required and not tested:** string methods like `.trim()`, `.slice()`, `.includes()`, `.indexOf()`, case conversion, or string-indexing challenges — plain strings as labels are fine, but nothing from Day 5 is a graded skill here. Nothing from Day 7 onward either (no objects, arrays of objects, sorting algorithms).

### How this works
You're building one evolving weekly fitness tracker across 8 core steps that pull together everything from this first week. Each step describes a **required behavior, a function signature (where relevant), and an expected output** — how you implement it internally is entirely your choice.

You may add new lines anywhere in your file, including reusing something from an earlier step, and including **inserting new logic inside a loop or function written in a previous step** (a couple of steps this week specifically ask you to do this) — but you must **never delete or rewrite a line that a previous step's expected output already depends on.** Only add, never remove or overwrite prior working code.

Run your file after every step to confirm your output matches what's expected before moving on.

### Starter code (given — do not modify this line)
```js
const workoutMinutes = [35, 0, 49, 84, 63, 0, 21];
```
*(Seven values, one per day of the week. A value of `0` means a rest day.)*

---

## Core Challenge

### Step 1 — Setup check
Print a header `"=== Week 1 Fitness Tracker ==="`, then print the starter array as-is.

**Expected output after this step:**
```
=== Week 1 Fitness Tracker ===
[ 35, 0, 49, 84, 63, 0, 21 ]
```

---

### Step 2 — Logging today
You forgot to log today's workout earlier — it was a 40-minute session. Update the array to reflect this, then print the updated array.

**Expected additional output:**
```
After logging today: [ 35, 0, 49, 84, 63, 0, 21, 40 ]
```

---

### Step 3 — Duplicate entry correction
You realize the entry you just added was a duplicate (already logged earlier under a different day) and needs to be removed. Remove it, then print both the removed value and the resulting array.

**Expected additional output:**
```
Removed entry: 40
After correction: [ 35, 0, 49, 84, 63, 0, 21 ]
```

---

### Step 4 — Weekly totals
Write two functions: 
- `totalMinutes(arr)` returning the sum of all minutes in the array, 
- and `averageMinutes(arr)` returning the average per day (across all 7 days, including rest days). 
- Print both results for `workoutMinutes`.

**Expected additional output:**
```
Total minutes: 252
Average minutes: 36
```

---

### Step 5 — Classify each day
Write a function `classifyDay(minutes)` that returns 
- `"Rest"` for `0` minutes, 
- `"Light"` for `1` to `45` minutes, 
- or `"Intense"` for anything above `45`. 

Then, process the array from day 1 to day 7 (in order), printing each day's number, its minutes, and its classification.

**Expected additional output:**
```
Day 1 : 35 min - Light
Day 2 : 0 min - Rest
Day 3 : 49 min - Intense
Day 4 : 84 min - Intense
Day 5 : 63 min - Intense
Day 6 : 0 min - Rest
Day 7 : 21 min - Light
```

---

### Step 6 — Enhanced weekly review
You want a quicker weekly review: 
rest days shouldn't be printed at all, and the moment you come across a day with more than `80` minutes, that's worth calling out as a personal record 
— print a special message for that day instead of its normal line, and don't process anything after it at all. Add this behavior to a **new, separate pass** over the same array (leave your Step 5 loop untouched — write this as its own new block).

**Expected additional output:**
```
--- Enhanced review ---
Day 1 : 35 min - Light
Day 3 : 49 min - Intense
Day 4 : 84 min - New personal record! Stopping review.
```

---

### Step 7 — Best day
Write a function `bestDayIndex(arr)` that returns the index of the day with the most minutes logged. Print the index and the corresponding number of minutes.

**Expected additional output:**
```
Best day index: 3 with 84 minutes
```

---

### Step 8 — Counting intense days
Write a function `countIntenseDays(arr)` that returns how many days in the array were classified as `"Intense"`, reusing `classifyDay` internally rather than re-checking the threshold inline. Print the result.

**Expected additional output:**
```
Intense days: 3
```

---

## Full expected console output — 
```
=== Week 1 Fitness Tracker ===
[ 35, 0, 49, 84, 63, 0, 21 ]
After logging today: [ 35, 0, 49, 84, 63, 0, 21, 40 ]
Removed entry: 40
After correction: [ 35, 0, 49, 84, 63, 0, 21 ]
Total minutes: 252
Average minutes: 36
Day 1 : 35 min - Light
Day 2 : 0 min - Rest
Day 3 : 49 min - Intense
Day 4 : 84 min - Intense
Day 5 : 63 min - Intense
Day 6 : 0 min - Rest
Day 7 : 21 min - Light
--- Enhanced review ---
Day 1 : 35 min - Light
Day 3 : 49 min - Intense
Day 4 : 84 min - New personal record! Stopping review.
Best day index: 3 with 84 minutes
Intense days: 3
```

---