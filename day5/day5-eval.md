# YouCode SAS — Day 5 Evaluation (Progressive Format) — Alternate Context
## Strings — "YouCode ID Badge Formatter"

**Total time (core):** 45 minutes

**Format:** Closed notes, no internet, solo work, console only. **One single file, built up step by step.**
**Allowed:** Everything from Day 1-4 (variables, operators, conditions, loops, functions, scope) plus string indexing and methods (`.length`, `.trim()`, `.toUpperCase()`/`.toLowerCase()`, `.includes()`, `.indexOf()`, `.slice()`, template literals). Nothing from later days (no arrays, objects).

### How this works
You're building one evolving student ID badge generator across 6 core steps. Each step describes a **required behavior, a function signature, and an expected output** — how you implement the function body is entirely your choice.

If you get stuck on a step, leave a comment saying so, move on, and keep building on top of whatever you have.

Run your file after every step to confirm your output matches what's expected before moving on.

### Starter code (given — do not modify these 6 lines)
```js
const name1 = "  sara amrani  ";
const birthYear1 = 2005;
const name2 = "OMAR ALAOUI";
const birthYear2 = 2003;
const name3 = "Nadia Idrissi";
const birthYear3 = 2004;
```

---

## Core Challenge

### Step 1 — Setup check
Print a header `"=== Student ID Badge Formatter ==="`, then print all 3 students' raw name and birth year exactly as given (don't clean anything yet).

**Expected output after this step:**
```
=== Student ID Badge Formatter ===
  sara amrani   2005 | OMAR ALAOUI 2003 | Nadia Idrissi 2004
```
*(Exact spacing/format of this line is up to you — the key requirement is showing all 3 raw values untouched.)*

---

### Step 2 — Clean the input
Real input is messy: extra spaces, inconsistent capitalization. Write a function `cleanName(name)` that returns the name trimmed of whitespace and fully lowercased. Print the result of calling it on each of the three starter names, labeled.

**Expected additional output:**
```
Cleaned name 1: sara amrani
Cleaned name 2: omar alaoui
Cleaned name 3: nadia idrissi
```

---

### Step 3 — Proper capitalization
Every student's name is exactly two words (first name, last name). Write a function `capitalizeName(name)` that takes an already-cleaned name and returns it with the first letter of each word capitalized. Call it on the cleaned version of each of the three names and print the results, labeled.

**Expected additional output:**
```
Capitalized name 1: Sara Amrani
Capitalized name 2: Omar Alaoui
Capitalized name 3: Nadia Idrissi
```

---

### Step 4 — Extract initials
Write a function `getInitials(name)` that takes an already-cleaned name and returns a 2-character uppercase string: the first letter of the first word, followed by the first letter of the second word. Call it on the cleaned version of each name and print the results, labeled.

**Expected additional output:**
```
Initials 1: SA
Initials 2: OA
Initials 3: NI
```

---

### Step 5 — Build the badge code
Write a function `buildBadgeCode(initials, birthYear)` that returns a code in the form `"YC-XX-YY"`, where `XX` is the initials and `YY` is the last two digits of the birth year. Call it using each student's initials (from Step 4) and birth year, and print the results, labeled.

**Expected additional output:**
```
Badge code 1: YC-SA-05
Badge code 2: YC-OA-03
Badge code 3: YC-NI-04
```

---

### Step 6 — Full badge generation
Write a function `generateBadge(rawName, birthYear)` that: cleans the name, builds the properly capitalized display name, extracts initials, builds the badge code, and prints one line combining the display name and the badge code. Reuse everything you've already built rather than recalculating any of the logic. Call it on all three students using their original (raw) names and birth years.

**Expected additional output:**
```
Sara Amrani - Badge: YC-SA-05
Omar Alaoui - Badge: YC-OA-03
Nadia Idrissi - Badge: YC-NI-04
```

---

## Full expected console output — Core only (running Steps 1-6 top to bottom)
```
=== Student ID Badge Formatter ===
  sara amrani   2005 | OMAR ALAOUI 2003 | Nadia Idrissi 2004
Cleaned name 1: sara amrani
Cleaned name 2: omar alaoui
Cleaned name 3: nadia idrissi
Capitalized name 1: Sara Amrani
Capitalized name 2: Omar Alaoui
Capitalized name 3: Nadia Idrissi
Initials 1: SA
Initials 2: OA
Initials 3: NI
Badge code 1: YC-SA-05
Badge code 2: YC-OA-03
Badge code 3: YC-NI-04
Sara Amrani - Badge: YC-SA-05
Omar Alaoui - Badge: YC-OA-03
Nadia Idrissi - Badge: YC-NI-04
```

---

## Bonus Section

Offer these to candidates who finish the core early, or assign as a take-home extension. They're graded independently of how the core went.

### Bonus Step 1 — Validate the name
Write a function `isValidName(name)` that returns `true` only if the cleaned name is at least 4 characters long, `false` otherwise. Call it on the cleaned version of each of the three names.

**Expected output:**
```
Name 1 valid: true
Name 2 valid: true
Name 3 valid: true
```

### Bonus Step 2 — Count vowels in the name
Write a function `countVowelsInName(name)` that counts how many vowels (`a`, `e`, `i`, `o`, `u`) appear in a cleaned full name (both words together). Call it on the cleaned version of each of the three names.

**Expected output:**
```
Vowels in name 1: 5
Vowels in name 2: 7
Vowels in name 3: 6
```

**Bonus scoring:** Core evaluation stays out of 100. The 2 bonus steps together add up to **+25 extra points**, so a candidate who nails everything can reach 125/100.

## If both bonus steps are attempted, append this block afterward:
```
Name 1 valid: true
Name 2 valid: true
Name 3 valid: true
Vowels in name 1: 5
Vowels in name 2: 7
Vowels in name 3: 6
```