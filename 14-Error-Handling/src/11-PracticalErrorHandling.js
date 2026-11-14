
const products = [
    { id: 101, name: "Wireless Mouse", price: 799, stock: 15 },
    { id: 102, name: "Mechanical Keyboard", price: 2499, stock: 8 },
    { id: 103, name: "USB-C Hub", price: 1299, stock: 0 }
];

// Custom error classes
class ProductNotFoundError extends Error {
    constructor(productId) {
        super(`Product with ID ${productId} was not found.`);
        this.name = "ProductNotFoundError";
    }
}

class OutOfStockError extends Error {
    constructor(productName) {
        super(`${productName} is currently out of stock.`);
        this.name = "OutOfStockError";
    }
}

class InvalidQuantityError extends Error {
    constructor() {
        super("Order quantity must be greater than zero.");
        this.name = "InvalidQuantityError";
    }
}

// Simulate an asynchronous order request
function placeOrder(productId, quantity) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find((item) => item.id === productId);

            if (!product) {
                reject(new ProductNotFoundError(productId));
                return;
            }

            if (!Number.isInteger(quantity) || quantity <= 0) {
                reject(new InvalidQuantityError());
                return;
            }

            if (product.stock < quantity) {
                reject(new OutOfStockError(product.name));
                return;
            }

            product.stock -= quantity;

            resolve({
                productName: product.name,
                quantity: quantity,
                totalAmount: product.price * quantity,
                remainingStock: product.stock
            });
        }, 1000);
    });
}

// Process the customer order
async function processOrder(productId, quantity) {
    console.log("Processing customer order...");

    try {
        const order = await placeOrder(productId, quantity);

        console.log("\nOrder Placed Successfully!");
        console.log("-------------------------");
        console.log("Product:", order.productName);
        console.log("Quantity:", order.quantity);
        console.log("Total Amount: ₹" + order.totalAmount);
        console.log("Remaining Stock:", order.remainingStock);

    } catch (error) {
        console.log("\nOrder Failed!");
        console.log("Error Type:", error.name);
        console.log("Error Message:", error.message);

    } finally {
        console.log("\nOrder processing completed.");
    }
}

// Test the order
processOrder(101, 2);
