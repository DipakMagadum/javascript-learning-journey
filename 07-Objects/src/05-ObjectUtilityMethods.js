// Object Utility Methods
// Working with Object.keys(), Object.values() and Object.entries()


let employee = {
    name: "Rahul",
    role: "Java Developer",
    experience: 2,
    city: "Pune"
};


// --------------------------------------------------
// Object.keys()
// --------------------------------------------------

// Get all property names

let employeeKeys = Object.keys(employee);

console.log("Employee properties:");
console.log(employeeKeys);


// --------------------------------------------------
// Object.values()
// --------------------------------------------------

// Get all property values

let employeeValues = Object.values(employee);

console.log("Employee values:");
console.log(employeeValues);


// --------------------------------------------------
// Object.entries()
// --------------------------------------------------

// Get properties and values together

let employeeEntries = Object.entries(employee);

console.log("Employee entries:");
console.log(employeeEntries);


// --------------------------------------------------
// Loop through Object.keys()
// --------------------------------------------------

console.log("Employee details:");

Object.keys(employee).forEach((key) => {
    console.log(`${key}: ${employee[key]}`);
});


// --------------------------------------------------
// Loop through Object.entries()
// --------------------------------------------------

console.log("Employee information:");

Object.entries(employee).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});


// --------------------------------------------------
// Practical example
// --------------------------------------------------

let product = {
    name: "Laptop",
    brand: "Dell",
    price: 55000,
    inStock: true
};

console.log("Product properties:", Object.keys(product));

console.log("Product values:", Object.values(product));


// Calculate number of product details

let detailCount = Object.keys(product).length;

console.log(`Number of product details: ${detailCount}`);