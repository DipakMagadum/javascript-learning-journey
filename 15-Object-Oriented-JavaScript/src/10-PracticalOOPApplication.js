class Employee {
    static companyName = "Tech Solutions";

    #salary;

    constructor(name, salary) {
        this.name = name;
        this.#salary = salary;
    }

    get salary() {
        return this.#salary;
    }

    calculateBonus() {
        return this.#salary * 0.05;
    }

    displayDetails() {
        console.log("Company:", Employee.companyName);
        console.log("Name:", this.name);
        console.log("Salary: ₹" + this.salary);
        console.log("Bonus: ₹" + this.calculateBonus());
    }
}

class Developer extends Employee {
    constructor(name, salary, language) {
        super(name, salary);
        this.language = language;
    }

    calculateBonus() {
        return this.salary * 0.10;
    }
}

class Tester extends Employee {
    constructor(name, salary, testingTool) {
        super(name, salary);
        this.testingTool = testingTool;
    }

    calculateBonus() {
        return this.salary * 0.08;
    }
}

const developer = new Developer("Rahul", 50000, "JavaScript");
const tester = new Tester("Amit", 40000, "Selenium");

console.log("--- Developer Details ---");
developer.displayDetails();
console.log("Language:", developer.language);

console.log("\n--- Tester Details ---");
tester.displayDetails();
console.log("Testing Tool:", tester.testingTool);