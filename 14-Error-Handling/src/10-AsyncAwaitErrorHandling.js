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

// Simulate an asynchronous product request
function getProductById(productId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find((item) => item.id === productId);

            if (!product) {
                reject(new Error("Product not found."));
                return;
            }

            if (product.stock <= 0) {
                reject(new Error("Product is currently out of stock."));
                return;
            }

            resolve(product);
        }, 1000);
    });
}

// Fetch and display product information
async function displayProduct(productId) {
    console.log("Fetching product information...");

    try {
        const product = await getProductById(productId);

        console.log("\nProduct Details");
        console.log("----------------");
        console.log("Name:", product.name);
        console.log("Price: ₹" + product.price);
        console.log("Stock:", product.stock);

    } catch (error) {
        console.log("\nUnable to fetch product.");
        console.log("Error:", error.message);
    }

    console.log("\nProduct request completed.");
}

displayProduct(101);