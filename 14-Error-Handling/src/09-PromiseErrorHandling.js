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

// Find product using Promise
function findProductById(productId) {
    return new Promise((resolve, reject) => {
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
    });
}

// Handle Promise result
console.log("Product Search Started");

findProductById(101)
    .then((product) => {
        console.log("Product Found:", product.name);
        console.log("Price: ₹" + product.price);
        console.log("Available Stock:", product.stock);
    })
    .catch((error) => {
        console.log("Product Search Failed!");
        console.log("Reason:", error.message);
    });

console.log("Product Search Request Submitted");