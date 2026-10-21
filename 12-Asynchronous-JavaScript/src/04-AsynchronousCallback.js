function processOrder(orderId, callback) {
    console.log(`Processing order #${orderId}...`);

    setTimeout(() => {
        console.log("Order processing completed.");
        callback(orderId);
    }, 2000);
}

function sendConfirmation(orderId) {
    console.log(`Confirmation sent for order #${orderId}.`);
}

console.log("Customer placed an order.");

processOrder(1042, sendConfirmation);

console.log("Customer can continue browsing.");