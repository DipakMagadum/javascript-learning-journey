import {
    getAllProducts,
    findProductById,
    getAvailableProducts
} from "./productService.js";

import getUserDetails from "./userService.js";

// Customer Information
const customer = getUserDetails();

console.log("================================");
console.log("       E-COMMERCE STORE");
console.log("================================");

console.log("\nCustomer Information");
console.log("--------------------");

console.log("Name:", customer.name);
console.log("Email:", customer.email);
console.log("Role:", customer.role);

// All Products
const products = getAllProducts();

console.log("\nAll Products");
console.log("------------");

products.forEach((product) => {
    console.log(
        `${product.id} | ${product.name} | ₹${product.price} | Stock: ${product.stock}`
    );
});

// Search Product
const productId = 102;
const selectedProduct = findProductById(productId);

console.log("\nProduct Search");
console.log("--------------");

if (selectedProduct) {
    console.log("Product Found:", selectedProduct.name);
    console.log("Price:", selectedProduct.price);
    console.log("Available Stock:", selectedProduct.stock);
} else {
    console.log("Product not found.");
}

// Available Products
const availableProducts = getAvailableProducts();

console.log("\nAvailable Products");
console.log("------------------");

availableProducts.forEach((product) => {
    console.log(`${product.name} - ${product.stock} units`);
});

// Inventory Summary
const totalInventoryValue = products.reduce((total, product) => {
    return total + product.price * product.stock;
}, 0);

console.log("\nInventory Summary");
console.log("-----------------");

console.log("Total Products:", products.length);
console.log("Available Products:", availableProducts.length);
console.log("Total Inventory Value: ₹" + totalInventoryValue);

console.log("\n================================");
console.log("       APPLICATION CLOSED");
console.log("================================");