// Practical Object Data Handling
// Combining objects, arrays, destructuring and array methods


let employees = [
    {
        id: 101,
        name: "Rahul",
        role: "Java Developer",
        salary: 45000,
        active: true
    },
    {
        id: 102,
        name: "Amit",
        role: "Frontend Developer",
        salary: 40000,
        active: true
    },
    {
        id: 103,
        name: "Priya",
        role: "Backend Developer",
        salary: 50000,
        active: false
    },
    {
        id: 104,
        name: "Sneha",
        role: "Full Stack Developer",
        salary: 55000,
        active: true
    }
];


// Display employee information

employees.forEach((employee) => {
    console.log(`${employee.name} - ${employee.role}`);
});


// Get only active employees

let activeEmployees = employees.filter((employee) => {
    return employee.active;
});

console.log("Active employees:");
console.log(activeEmployees);


// Get employee names

let employeeNames = employees.map((employee) => {
    return employee.name;
});

console.log("Employee names:");
console.log(employeeNames);


// Find a specific employee

let selectedEmployee = employees.find((employee) => {
    return employee.id === 103;
});

console.log("Selected employee:");
console.log(selectedEmployee);


// Destructure selected employee

if (selectedEmployee) {
    let { name, role, salary } = selectedEmployee;

    console.log(`Name: ${name}`);
    console.log(`Role: ${role}`);
    console.log(`Salary: ₹${salary}`);
}


// Create updated employee data

let updatedEmployee = {
    ...selectedEmployee,
    salary: 55000,
    active: true
};

console.log("Updated employee:");
console.log(updatedEmployee);


// Calculate total salary of active employees

let totalSalary = activeEmployees.reduce((total, employee) => {
    return total + employee.salary;
}, 0);

console.log(`Total salary of active employees: ₹${totalSalary}`);


// Display employee details using Object.entries()

Object.entries(updatedEmployee).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});