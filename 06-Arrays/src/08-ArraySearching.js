// Array Searching and Validation
// Working with find(), findIndex(), some() and every()


// --------------------------------------------------
// find()
// --------------------------------------------------

// Find a product by its name

let products = [
    { id: 101, name: "Laptop", price: 50000 },
    { id: 102, name: "Mouse", price: 1200 },
    { id: 103, name: "Keyboard", price: 2500 },
    { id: 104, name: "Monitor", price: 15000 }
];

let product = products.find((product) => {
    return product.name === "Keyboard";
});

console.log("Selected product:");
console.log(product);


// --------------------------------------------------
// findIndex()
// --------------------------------------------------

let productIndex = products.findIndex((product) => {
    return product.id === 103;
});

console.log(`Product index: ${productIndex}`);


// --------------------------------------------------
// some()
// --------------------------------------------------

// Check whether at least one product costs more than ₹40000

let hasExpensiveProduct = products.some((product) => {
    return product.price > 40000;
});

console.log(`Is there an expensive product? ${hasExpensiveProduct}`);


// --------------------------------------------------
// every()
// --------------------------------------------------

// Check whether every product has a valid price

let validProducts = products.every((product) => {
    return product.price > 0;
});

console.log(`Are all product prices valid? ${validProducts}`);


// --------------------------------------------------
// Practical example - User data
// --------------------------------------------------

let users = [
    { name: "Rahul", age: 22, active: true },
    { name: "Amit", age: 25, active: true },
    { name: "Priya", age: 21, active: false },
    { name: "Sneha", age: 24, active: true }
];


// Find a specific user

let selectedUser = users.find((user) => {
    return user.name === "Priya";
});

console.log("Selected user:");
console.log(selectedUser);


// Check if any user is inactive

let hasInactiveUser = users.some((user) => {
    return user.active === false;
});

console.log(`Is there an inactive user? ${hasInactiveUser}`);


// Check whether all users are adults

let allAreAdults = users.every((user) => {
    return user.age >= 18;
});

console.log(`Are all users adults? ${allAreAdults}`);


// Find the index of an inactive user

let inactiveUserIndex = users.findIndex((user) => {
    return user.active === false;
});

console.log(`Inactive user index: ${inactiveUserIndex}`);