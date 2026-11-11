const products = [
    {
        id: 101,
        name: "Wireless Mouse",
        price: 799,
        stock: 15
    },
    {
        id: 102,
        name: "Mechanical Keyboard",
        price: 2499,
        stock: 8
    },
    {
        id: 103,
        name: "USB-C Hub",
        price: 1299,
        stock: 0
    }
];

// Find product by ID
function findProductById(productId) {
    const product = products.find((item) => item.id === productId);

    if (!product) {
        throw new Error("Product not found.");
    }

    return product;
}

// Calculate total product value
function calculateProductValue(productId) {
    const product = findProductById(productId);

    if (product.stock <= 0) {
        throw new Error("Product is currently out of stock.");
    }

    return product.price * product.stock;
}

// Execute product operations
console.log("Product Management System");

try {
    const productValue = calculateProductValue(101);

    console.log("Total Product Value: ₹" + productValue);

} catch (error) {
    console.log("Operation Failed!");
    console.log("Reason:", error.message);
}

console.log("Application Completed");