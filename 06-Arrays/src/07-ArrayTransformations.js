// Array Transformations
// Working with map(), filter() and reduce()

// --------------------------------------------------
// filter()
// --------------------------------------------------

// Get products that are above a certain price

let prices = [500, 1200, 2500, 800, 3000];

let expensiveProducts = prices.filter((price) => {
    return price > 1000;
});

console.log("Products above ₹1000:", expensiveProducts);


// --------------------------------------------------
// filter() with objects
// --------------------------------------------------

let employees = [
    { name: "Rahul", salary: 25000 },
    { name: "Amit", salary: 40000 },
    { name: "Priya", salary: 35000 },
    { name: "Sneha", salary: 22000 }
];

let selectedEmployees = employees.filter((employee) => {
    return employee.salary >= 30000;
});

console.log("Employees with salary above ₹30000:");
console.log(selectedEmployees);


// --------------------------------------------------
// map()
// --------------------------------------------------

// Create a new array with updated prices

let productPrices = [1000, 1500, 2000];

let updatedPrices = productPrices.map((price) => {
    return price + 100;
});

console.log("Updated prices:", updatedPrices);


// --------------------------------------------------
// map() with objects
// --------------------------------------------------

let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1200 },
    { name: "Keyboard", price: 2500 }
];

let productNames = products.map((product) => {
    return product.name;
});

console.log("Product names:", productNames);


// --------------------------------------------------
// reduce()
// --------------------------------------------------

// Calculate the total of all prices

let itemPrices = [1000, 1500, 2000];

let total = itemPrices.reduce((sum, price) => {
    return sum + price;
}, 0);

console.log(`Total price: ₹${total}`);


// --------------------------------------------------
// reduce() with objects
// --------------------------------------------------

let cart = [
    { product: "Laptop", price: 50000 },
    { product: "Mouse", price: 1200 },
    { product: "Keyboard", price: 2500 }
];

let cartTotal = cart.reduce((total, item) => {
    return total + item.price;
}, 0);

console.log(`Cart total: ₹${cartTotal}`);


// --------------------------------------------------
// Practical example
// --------------------------------------------------

let students = [
    { name: "Rahul", marks: 78 },
    { name: "Amit", marks: 65 },
    { name: "Priya", marks: 88 },
    { name: "Sneha", marks: 55 }
];


// Students who scored 70 or more

let passedStudents = students.filter((student) => {
    return student.marks >= 70;
});

console.log("Students who scored 70 or more:");
console.log(passedStudents);


// Get only student names

let studentNames = passedStudents.map((student) => {
    return student.name;
});

console.log("Selected students:", studentNames);


// Calculate total marks

let totalMarks = students.reduce((total, student) => {
    return total + student.marks;
}, 0);

console.log(`Total marks: ${totalMarks}`);