// Preparing an employee profile for an application

let employeeName = "Rahul";
let department = "Engineering";
let monthlySalary = 42000;

function getAnnualSalary() {
    return monthlySalary * 12;
}

let employee = {
    employeeName,
    department,
    monthlySalary,
    getAnnualSalary() {
        return monthlySalary * 12;
    }
};

console.log(`Employee: ${employee.employeeName}`);
console.log(`Department: ${employee.department}`);
console.log(`Monthly salary: ₹${employee.monthlySalary}`);
console.log(`Annual salary: ₹${employee.getAnnualSalary()}`);