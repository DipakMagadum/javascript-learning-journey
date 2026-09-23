// Object Destructuring and Spread
// Destructuring makes it easier to extract values from objects.
// Spread helps create copies and combine object data.


// --------------------------------------------------
// Object Destructuring
// --------------------------------------------------

let employee = {
    name: "Rahul",
    role: "Java Developer",
    experience: 2,
    city: "Pune"
};

let { name, role, experience } = employee;

console.log(`Name: ${name}`);
console.log(`Role: ${role}`);
console.log(`Experience: ${experience} years`);


// --------------------------------------------------
// Destructuring with different variable names
// --------------------------------------------------

let product = {
    name: "Laptop",
    price: 55000
};

let { name: productName, price: productPrice } = product;

console.log(`Product: ${productName}`);
console.log(`Price: ₹${productPrice}`);


// --------------------------------------------------
// Destructuring with default value
// --------------------------------------------------

let user = {
    username: "Dipak",
    city: "Kolhapur"
};

let { username, age = 22 } = user;

console.log(`Username: ${username}`);
console.log(`Age: ${age}`);


// --------------------------------------------------
// Object Spread
// --------------------------------------------------

let basicUser = {
    name: "Amit",
    role: "Developer"
};

let updatedUser = {
    ...basicUser,
    city: "Pune",
    experience: 2
};

console.log("Updated user:");
console.log(updatedUser);


// --------------------------------------------------
// Updating an object using spread
// --------------------------------------------------

let account = {
    name: "Priya",
    email: "priya@example.com",
    city: "Mumbai"
};

let updatedAccount = {
    ...account,
    city: "Pune"
};

console.log("Original account:");
console.log(account);

console.log("Updated account:");
console.log(updatedAccount);


// --------------------------------------------------
// Combining objects
// --------------------------------------------------

let personalDetails = {
    name: "Rahul",
    age: 24
};

let professionalDetails = {
    role: "Backend Developer",
    experience: 2
};

let employeeDetails = {
    ...personalDetails,
    ...professionalDetails
};

console.log("Employee details:");
console.log(employeeDetails);