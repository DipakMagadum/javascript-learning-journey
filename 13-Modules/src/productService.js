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

export function getAllProducts() {
    return products;
}

export function findProductById(productId) {
    return products.find((product) => product.id === productId);
}

export function getAvailableProducts() {
    return products.filter((product) => product.stock > 0);
}