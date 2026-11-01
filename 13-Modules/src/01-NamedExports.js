import {
    getAllProducts,
    findProductById,
    getAvailableProducts
} from "./productService.js";

console.log("All Products");
console.log("============");

const allProducts = getAllProducts();

allProducts.forEach((product) => {
    console.log(`${product.name} - ₹${product.price}`);
});

console.log("\nSearch Product");
console.log("==============");

const selectedProduct = findProductById(102);

if (selectedProduct) {
    console.log("Product:", selectedProduct.name);
    console.log("Price:", selectedProduct.price);
} else {
    console.log("Product not found.");
}

console.log("\nAvailable Products");
console.log("==================");

const availableProducts = getAvailableProducts();

availableProducts.forEach((product) => {
    console.log(`${product.name} - ${product.stock} units available`);
});