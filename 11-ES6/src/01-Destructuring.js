// Extracting useful information from employee records

let employee = {
    id: 104,
    name: "Rahul",
    role: "Frontend Developer",
    salary: 35000,
    address: {
        city: "Pune",
        state: "Maharashtra"
    }
};

let { name, role, salary } = employee;

console.log(`Employee: ${name}`);
console.log(`Role: ${role}`);
console.log(`Monthly Salary: ₹${salary}`);


// Rename a property while extracting it

let { city: employeeCity } = employee.address;

console.log(`City: ${employeeCity}`);


// Extract values from an array

let monthlySales = [12000, 18500, 15000, 22000];

let [firstMonth, secondMonth, ...remainingMonths] = monthlySales;

console.log(`First month sales: ₹${firstMonth}`);
console.log(`Second month sales: ₹${secondMonth}`);
console.log("Remaining sales:", remainingMonths);


// Use a default value when a property is missing

let product = {
    name: "Wireless Mouse",
    price: 1200
};

let { name: productName, category = "Accessories" } = product;

console.log(`Product: ${productName}`);
console.log(`Category: ${category}`);