const product = {
    id: 101,
    name: "Wireless Mouse",
    price: 799,
    stock: 0
};

console.log("Product Validation Started");

try {
    if (product.stock <= 0) {
        throw new Error("Product is currently out of stock.");
    }

    console.log("Product:", product.name);
    console.log("Available Stock:", product.stock);

} catch (error) {
    console.log("\nError Details");
    console.log("-------------");

    console.log("Error Name:", error.name);
    console.log("Error Message:", error.message);

    console.log("\nStack Trace:");
    console.log(error.stack);
}

console.log("\nProduct Validation Completed");