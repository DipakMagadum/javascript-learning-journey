// Object Basics in JavaScript
// Objects store related data using key-value pairs.


// Creating an object

let employee = {
    name: "Rahul",
    age: 24,
    role: "Java Developer",
    salary: 35000
};

console.log(employee);


// Accessing object properties

console.log(employee.name);
console.log(employee.role);


// Accessing properties using bracket notation

console.log(employee["salary"]);


// Updating an existing property

employee.salary = 40000;

console.log(`Updated salary: ₹${employee.salary}`);


// Adding a new property

employee.city = "Pune";

console.log(employee);


// Removing a property

delete employee.age;

console.log(employee);


// Practical example

let product = {
    name: "Laptop",
    brand: "Dell",
    price: 55000,
    inStock: true
};

console.log(`Product: ${product.name}`);
console.log(`Brand: ${product.brand}`);
console.log(`Price: ₹${product.price}`);


// Updating product information

product.price = 52000;
product.inStock = false;

console.log("Updated product:");
console.log(product);