import {
    getAllProducts as fetchProducts,
    findProductById as getProductDetails,
    getInStockProducts
} from "./productService.js";

import fetchUser from "./userService.js";

// Get customer information
const user = fetchUser();

console.log("Customer Information");
console.log("====================");

console.log("Name:", user.name);
console.log("Email:", user.email);

// Get all products
const products = fetchProducts();

console.log("\nAll Products");
console.log("============");

products.forEach((product) => {
    console.log(`${product.name} - ₹${product.price}`);
});

// Search product by ID
const selectedProduct = getProductDetails(102);

console.log("\nSelected Product");
console.log("================");

if (selectedProduct) {
    console.log("Name:", selectedProduct.name);
    console.log("Price:", selectedProduct.price);
}

// Get available products using export alias
const availableProducts = getInStockProducts();

console.log("\nAvailable Products");
console.log("==================");

availableProducts.forEach((product) => {
    console.log(product.name);
});