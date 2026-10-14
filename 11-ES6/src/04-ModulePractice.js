import { products, findProduct, getPriceWithTax } from "./04-productData.js";

console.log("Available products:");

products.forEach((product) => {
    console.log(`${product.name} - ₹${product.price}`);
});

let selectedProduct = findProduct(2);

if (selectedProduct) {
    let finalPrice = getPriceWithTax(selectedProduct.price);

    console.log(`Selected product: ${selectedProduct.name}`);
    console.log(`Price including 18% tax: ₹${finalPrice}`);
}