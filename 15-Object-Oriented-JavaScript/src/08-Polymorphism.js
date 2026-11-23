// Parent Class
class Employee {
    constructor(name) {
        this.name = name;
    }

    calculateSalary() {
        console.log("Salary calculation for an employee.");
    }
}

// Child Class
class Developer extends Employee {
    calculateSalary() {
        console.log("Developer salary: ₹60,000");
    }
}

// Another Child Class
class Tester extends Employee {
    calculateSalary() {
        console.log("Tester salary: ₹45,000");
    }
}

// Create objects
const employee1 = new Developer("Rahul");
const employee2 = new Tester("Sneha");

// Call the same method
employee1.calculateSalary();
employee2.calculateSalary();