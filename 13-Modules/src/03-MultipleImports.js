import {
    getAllProducts,
    getAvailableProducts
} from "./productService.js";

import getUserDetails from "./userService.js";

// Display user information
const user = getUserDetails();

console.log("Customer Information");
console.log("====================");
console.log("Name:", user.name);
console.log("Email:", user.email);

// Display available products
const products = getAvailableProducts();

console.log("\nAvailable Products");
console.log("==================");

products.forEach((product) => {
    console.log(`${product.name} - ₹${product.price}`);
});

// Display total product count
const allProducts = getAllProducts();

console.log("\nTotal Products:", allProducts.length);
console.log("Available Products:", products.length);