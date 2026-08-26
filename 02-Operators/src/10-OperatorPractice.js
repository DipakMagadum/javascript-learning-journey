let productPrice = 800;
let quantity = 2;
let budget = 2000;

let totalPrice = productPrice * quantity;

console.log(`Total price: ₹${totalPrice}`);

console.log(`Within budget: ${totalPrice <= budget}`);

let stock = 3;

stock--;

console.log(`Remaining stock: ${stock}`);

let productName = null;

let displayName = productName ?? "Unknown Product";

console.log(`Product: ${displayName}`);