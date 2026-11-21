
const customer = {
    name: "Rahul Patil",
    city: "Pune",

    displayDetails() {
        console.log("Customer Name:", this.name);
        console.log("City:", this.city);
    }
};

customer.displayDetails();


class Employee {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    displayDetails() {
        console.log("Employee:", this.name);
        console.log("Role:", this.role);
    }
}

const employee1 = new Employee("Amit", "Developer");
const employee2 = new Employee("Sneha", "Tester");

employee1.displayDetails();
employee2.displayDetails();