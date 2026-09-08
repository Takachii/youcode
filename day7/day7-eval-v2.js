const employees = [
  { name: "Sara", department: "Engineering", salary: 12000, yearsWorked: 4 },
  { name: "Omar", department: "Sales", salary: 9000, yearsWorked: 2 },
  { name: "Nadia", department: "Engineering", salary: 15000, yearsWorked: 6 },
  { name: "Yassine", department: "Marketing", salary: 8000, yearsWorked: 1 }
];

// Step 1

console.log("=== Employee Directory ===");
console.log(employees);

// Step 2

function findEmployeeByName(list, name) {
    for (let value of list) {
        if (value.name === name) return value;
    }
    return null;
}

console.log("Find Omar:", findEmployeeByName(employees, "Omar"));
console.log("Find Karim:", findEmployeeByName(employees, "Karim"));

// Step 3

function giveRaise(list, name, amount) {

    let Employee = findEmployeeByName(list, name)
    if (!Employee) return false;

    Employee.salary+=amount;
    return true;

}

console.log("Give Omar a raise:", giveRaise(employees, "Omar", 1000));
console.log("Give Karim a raise (missing):", giveRaise(employees, "Karim", 500));
console.log("Omar after raise:", findEmployeeByName(employees, "Omar"));

// Step 4

function averageSalary(list) {
    let total = 0;
    for (let i=0; i<list.length; i++) total+=list[i].salary;
    return total / employees.length;
}

console.log("Average salary:", averageSalary(employees));

// Step 5

function countByDepartment(list, department) {
    let count=0;
    for (let i=0; i<list.length; i++) if (list[i].department===department) count++;
    return count;
}

console.log("Engineering count:", countByDepartment(employees, "Engineering"));

// Step 6

function highestPaidEmployee(list) {
    
    let highestPaidIndex = 0;
    let highestPaidSalary = list[0].salary;

    for (let i=0; i<list.length; i++) {
        if (list[i].salary>highestPaidSalary) {
            highestPaidIndex = i;
            highestPaidSalary = list[i].salary;
        }
    }

    return list[highestPaidIndex];

}

console.log("Highest paid employee:", highestPaidEmployee(employees))

// Fin