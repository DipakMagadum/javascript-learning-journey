// map() method

let products = ["Laptop", "Mouse", "Keyboard"];

let productNames = products.map((product) => {
    return product.toUpperCase();
});

console.log(products);
console.log(productNames);


// Working with numbers

let prices = [1000, 1500, 2000];

let discountedPrices = prices.map((price) => {
    return price - 100;
});

console.log(discountedPrices);


// Using index

let students = ["Rahul", "Amit", "Priya"];

let studentList = students.map((student, index) => {
    return `${index + 1}. ${student}`;
});

console.log(studentList);