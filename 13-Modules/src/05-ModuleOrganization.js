import {
    getAllProducts,
    getAvailableProducts
} from "./productService.js";

import getUserDetails from "./userService.js";

// Get user information
const user = getUserDetails();

// Get product information
const allProducts = getAllProducts();
const availableProducts = getAvailableProducts();

// Calculate inventory value
const inventoryValue = allProducts.reduce((total, product) => {
    return total + (product.price * product.stock);
}, 0);

// Display store summary
console.log("Store Summary");
console.log("=============");

console.log("\nCustomer Information");
console.log("Name:", user.name);
console.log("Email:", user.email);

console.log("\nProduct Information");
console.log("Total Products:", allProducts.length);
console.log("Available Products:", availableProducts.length);

console.log("\nInventory Summary");
console.log("Total Inventory Value: ₹" + inventoryValue);