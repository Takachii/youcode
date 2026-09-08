# YouCode SAS — Day 7 Evaluation
## Objects & Arrays of Objects — "OfficeYouCode Employee Directory"

**Total time:** 60 minutes

**Format:** Closed notes, no internet, solo work, console only. **One single file, built up step by step.**
**Allowed:** Everything from Day 1-6 (variables, operators, conditions, loops, functions, scope, strings, arrays) plus objects (properties, access, update) and arrays of objects (traverse, search). Nothing from later days (no sorting algorithms, no Day 8+ material).

### How this works
You're building one evolving employee directory across 6 core steps. Each step describes a **required behavior, a function signature (where relevant), and an expected output** — how you implement it internally is entirely your choice.

Given the short time limit, work efficiently: get each step's core behavior working and move on rather than polishing. Run your file after every step to confirm your output matches what's expected.

### Starter code (given — do not modify these lines)
```js
const employees = [
  { name: "Sara", department: "Engineering", salary: 12000, yearsWorked: 4 },
  { name: "Omar", department: "Sales", salary: 9000, yearsWorked: 2 },
  { name: "Nadia", department: "Engineering", salary: 15000, yearsWorked: 6 },
  { name: "Yassine", department: "Marketing", salary: 8000, yearsWorked: 1 }
];
```
---

### Step 1 — Setup check 
Print a header `"=== Employee Directory ==="`, 
then print the starter `employees` array as-is.

**Expected output after this step:**
```
=== Employee Directory ===
[ { name: 'Sara', department: 'Engineering', salary: 12000, yearsWorked: 4 },
  { name: 'Omar', department: 'Sales', salary: 9000, yearsWorked: 2 },
  { name: 'Nadia', department: 'Engineering', salary: 15000, yearsWorked: 6 },
  { name: 'Yassine', department: 'Marketing', salary: 8000, yearsWorked: 1 } ]
```
*(Node/your console may format the array's multi-line display differently — that's fine, the object contents just need to match.)*

---

### Step 2 — Find an employee by name
Write a function `findEmployeeByName(list, name)` that searches the directory and returns the full matching employee object, 
or `null` if no employee has that name. 

Test it on a name that exists and one that doesn't.

**Expected additional output:**
```
Find Omar: { name: 'Omar', department: 'Sales', salary: 9000, yearsWorked: 2 }
Find Karim: null
```

---

### Step 3 — Give a raise
Write a function `giveRaise(list, name, amount)` that: 
finds the employee (reuse `findEmployeeByName`), 
and if they exist, increases their `salary` by `amount` and returns `true`. 

If no employee has that name, it should return `false` without changing anything. 

Call it once on an existing employee (Omar, `+1000`) and once on a name that doesn't exist (Karim, `+500`), then print Omar's updated record to confirm the change.

**Expected additional output:**
```
Give Omar a raise: true
Give Karim a raise (missing): false
Omar after raise: { name: 'Omar', department: 'Sales', salary: 10000, yearsWorked: 2 }
```

---

### Step 4 — Average salary
Write a function `averageSalary(list)` that returns the average salary across all employees. 
Print the result for `employees` (after Step 3's raise).

**Expected additional output:**
```
Average salary: 11250
```

---

### Step 5 — Count by department 
Write a function `countByDepartment(list, department)` that returns how many employees belong to the given department. 
Print the result for `"Engineering"`.

**Expected additional output:**
```
Engineering count: 2
```

---

### Step 6 — Highest paid employee
Write a function `highestPaidEmployee(list)` that returns the employee object with the highest `salary`. 
Print the result for `employees` (after Step 3's raise).

**Expected additional output:**
```
Highest paid employee: { name: 'Nadia', department: 'Engineering', salary: 15000, yearsWorked: 6 }
```

---

## Full expected console output (running the complete file top to bottom)
```
=== Employee Directory ===
[ { name: 'Sara', department: 'Engineering', salary: 12000, yearsWorked: 4 },
  { name: 'Omar', department: 'Sales', salary: 9000, yearsWorked: 2 },
  { name: 'Nadia', department: 'Engineering', salary: 15000, yearsWorked: 6 },
  { name: 'Yassine', department: 'Marketing', salary: 8000, yearsWorked: 1 } ]
Find Omar: { name: 'Omar', department: 'Sales', salary: 9000, yearsWorked: 2 }
Find Karim: null
Give Omar a raise: true
Give Karim a raise (missing): false
Omar after raise: { name: 'Omar', department: 'Sales', salary: 10000, yearsWorked: 2 }
Average salary: 11250
Engineering count: 2
Highest paid employee: { name: 'Nadia', department: 'Engineering', salary: 15000, yearsWorked: 6 }
```