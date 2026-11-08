const product = {
    id: 101,
    name: "Wireless Mouse",
    price: -799,
    stock: 15
};

console.log("Product Validation Started");

try {
    if (product.price <= 0) {
        throw new Error("Product price must be greater than zero.");
    }

    if (product.stock < 0) {
        throw new Error("Product stock cannot be negative.");
    }

    console.log("Product:", product.name);
    console.log("Price: ₹" + product.price);
    console.log("Stock:", product.stock);

    console.log("Product validation successful.");

} catch (error) {
    console.log("Product validation failed!");
    console.log("Reason:", error.message);
}

console.log("Product Validation Completed");