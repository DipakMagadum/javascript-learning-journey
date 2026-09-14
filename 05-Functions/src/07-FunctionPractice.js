// Calculate annual salary

function calculateAnnualSalary(monthlySalary) {
    return monthlySalary * 12;
}

let annualSalary = calculateAnnualSalary(30000);

console.log(`Annual salary: ${annualSalary}`);


// Calculate shopping total

function calculateTotal(price, quantity = 1) {
    return price * quantity;
}

let total = calculateTotal(800, 2);

console.log(`Total amount: ${total}`);


// Arrow function

let calculateSquare = (number) => {
    return number * number;
};

let square = calculateSquare(6);

console.log(`Square: ${square}`);