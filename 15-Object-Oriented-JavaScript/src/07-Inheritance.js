// Parent Class
class Employee {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    displayDetails() {
        console.log("Employee Name:", this.name);
        console.log("Email:", this.email);
    }
}

// Child Class
class Developer extends Employee {
    constructor(name, email, programmingLanguage) {
        super(name, email);
        this.programmingLanguage = programmingLanguage;
    }

    displaySkills() {
        console.log("Programming Language:", this.programmingLanguage);
    }
}

// Create Developer object
const developer1 = new Developer(
    "Rahul Patil",
    "rahul@example.com",
    "JavaScript"
);

// Use inherited and own methods
developer1.displayDetails();
developer1.displaySkills();