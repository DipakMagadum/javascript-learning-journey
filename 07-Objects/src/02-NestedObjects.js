// Nested Objects and Arrays of Objects
// Real applications often store related data inside objects and arrays.


// Nested object

let employee = {
    name: "Rahul",
    role: "Java Developer",

    address: {
        city: "Pune",
        state: "Maharashtra",
        pincode: 411001
    }
};


// Accessing nested properties

console.log(employee.name);
console.log(employee.address.city);
console.log(employee.address.state);


// Updating nested property

employee.address.city = "Mumbai";

console.log(`Updated city: ${employee.address.city}`);


// Adding a property inside nested object

employee.address.country = "India";

console.log(employee.address);


// Array of objects

let employees = [
    {
        name: "Rahul",
        role: "Java Developer",
        experience: 2
    },
    {
        name: "Amit",
        role: "Frontend Developer",
        experience: 1
    },
    {
        name: "Priya",
        role: "Backend Developer",
        experience: 3
    }
];


// Accessing an object from the array

console.log(employees[0]);
console.log(employees[0].name);
console.log(employees[2].role);


// Loop through array of objects

for (let employee of employees) {
    console.log(`${employee.name} - ${employee.role}`);
}


// Practical product data

let products = [
    {
        id: 101,
        name: "Laptop",
        price: 55000,
        category: "Electronics"
    },
    {
        id: 102,
        name: "Mouse",
        price: 1200,
        category: "Accessories"
    },
    {
        id: 103,
        name: "Keyboard",
        price: 2500,
        category: "Accessories"
    }
];


// Display product information

for (let product of products) {
    console.log(
        `${product.id} - ${product.name} - ₹${product.price}`
    );
}