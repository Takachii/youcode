# YouCode SAS — Day 8 Evaluation
## Linear Search & Sorting — "GradeYouCode Exam Score Ranking"


**Format:** Closed notes, no internet, solo work, console only. **One single file, built up step by step.**
**Allowed:** Everything from Day 1-7 (variables, operators, conditions, loops, functions, scope, strings, arrays, objects) plus linear search and manual sorting (bubble sort or selection sort). `Array.prototype.sort()` is **not allowed** — sorting must be implemented manually. Nothing from Day 9+.

### How this works
A short, focused challenge covering the two core Day 8 skills: searching and sorting. Each step describes a **required behavior, a function signature, and an expected output** — how you implement it internally is entirely your choice. Given the tight time limit, work efficiently: get each step's core behavior working and move on.

Run your file after every step to confirm your output matches what's expected.

### Starter code (given — do not modify this line)
```js
const examScores = [12, 18, 9, 15, 20, 7, 14, 16, 11, 15];
```

---

### Step 1 — Setup check
Print a header `"=== Exam Score Ranking ==="`, then print the starter array as-is.

**Expected output after this step:**
```
=== Exam Score Ranking ===
[ 12, 18, 9, 15, 20, 7, 14, 16, 11, 15 ]
```

---

### Step 2 — Find a score
Write a function `linearSearch(arr, target)` that searches the array one item at a time and returns the index of the **first** matching score, or `-1` if it isn't found. Test it on a score that exists and one that doesn't.

**Expected additional output:**
```
Find 15: 3
Find 5: -1
```

---

### Step 3 — Count occurrences
Write a function `countOccurrences(arr, target)` that returns how many times a specific score appears in the array. Call it on `15`.

**Expected additional output:**
```
Count of 15: 2
```

---

### Step 4 — Sort ascending
Write a function `bubbleSortAscending(arr)` that returns a **new** array with the scores sorted from lowest to highest, using a manually implemented bubble sort or selection sort. The original array must remain unchanged. Print both the sorted array and the original (to confirm it's untouched).

**Expected additional output:**
```
Sorted ascending: [ 7, 9, 11, 12, 14, 15, 15, 16, 18, 20 ]
Original unchanged: [ 12, 18, 9, 15, 20, 7, 14, 16, 11, 15 ]
```

---

## Full expected console output (running the complete file top to bottom)
```
=== Exam Score Ranking ===
[ 12, 18, 9, 15, 20, 7, 14, 16, 11, 15 ]
Find 15: 3
Find 5: -1
Count of 15: 2
Sorted ascending: [ 7, 9, 11, 12, 14, 15, 15, 16, 18, 20 ]
Original unchanged: [ 12, 18, 9, 15, 20, 7, 14, 16, 11, 15 ]
```