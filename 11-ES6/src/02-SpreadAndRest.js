// Adding products to an existing shopping cart

let cartItems = ["Laptop", "Mouse", "Keyboard"];

let newCart = [...cartItems, "Headphones"];

console.log("Previous cart:", cartItems);
console.log("Updated cart:", newCart);


// Copying and updating product details

let product = {
    name: "Wireless Mouse",
    price: 1200,
    category: "Accessories"
};

let updatedProduct = {
    ...product,
    price: 999
};

console.log("Original product:", product);
console.log("Updated product:", updatedProduct);


// Using rest parameters to calculate an order total

function calculateTotal(...prices) {
    let total = 0;

    for (let price of prices) {
        total += price;
    }

    return total;
}

let orderTotal = calculateTotal(1200, 999, 1800);

console.log(`Order total: ₹${orderTotal}`);