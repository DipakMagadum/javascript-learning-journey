// DOM Element Selection
// Selecting HTML elements using JavaScript


// Select an element by its ID

let pageTitle = document.getElementById("pageTitle");

console.log(pageTitle);


// Select another element by ID

let description = document.getElementById("description");

console.log(description);


// Select the first matching element using querySelector()

let firstProduct = document.querySelector(".product");

console.log(firstProduct);


// Select all matching elements using querySelectorAll()

let products = document.querySelectorAll(".product");

console.log(products);


// Loop through selected elements

products.forEach((product) => {
    console.log(product.textContent);
});