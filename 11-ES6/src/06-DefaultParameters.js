// Calculating the final amount for a customer order

function calculateOrderTotal(amount, deliveryCharge = 50, discount = 0) {
    return amount + deliveryCharge - discount;
}

let regularOrder = calculateOrderTotal(1200);
let expressOrder = calculateOrderTotal(1200, 100);
let discountedOrder = calculateOrderTotal(1200, 50, 150);

console.log(`Regular order: ₹${regularOrder}`);
console.log(`Express delivery order: ₹${expressOrder}`);
console.log(`Discounted order: ₹${discountedOrder}`);