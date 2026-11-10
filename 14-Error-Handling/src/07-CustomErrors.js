class ProductNotFoundError extends Error {
    constructor(productId) {
        super(`Product with ID ${productId} was not found.`);

        this.name = "ProductNotFoundError";
        this.productId = productId;
    }
}

const products = [
    {
        id: 101,
        name: "Wireless Mouse",
        price: 799
    },
    {
        id: 102,
        name: "Mechanical Keyboard",
        price: 2499
    }
];

function findProductById(productId) {
    const product = products.find((item) => item.id === productId);

    if (!product) {
        throw new ProductNotFoundError(productId);
    }

    return product;
}

console.log("Product Search Started");

try {
    const product = findProductById(105);

    console.log("Product Found:", product.name);
    console.log("Price: ₹" + product.price);

} catch (error) {
    console.log("\nError Details");
    console.log("Error Name:", error.name);
    console.log("Error Message:", error.message);

    if (error instanceof ProductNotFoundError) {
        console.log("Requested Product ID:", error.productId);
    }
}

console.log("\nProduct Search Completed");