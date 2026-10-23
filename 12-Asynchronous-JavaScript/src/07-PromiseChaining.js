function createOrder(orderId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Order #${orderId} created.`);

            resolve({
                id: orderId,
                amount: 1499
            });
        }, 1000);
    });
}

function processPayment(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Payment of ₹${order.amount} completed.`);

            resolve(order);
        }, 1000);
    });
}

function sendConfirmation(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Confirmation sent for order #${order.id}.`);

            resolve("Order completed successfully.");
        }, 1000);
    });
}

createOrder(1042)
    .then((order) => {
        return processPayment(order);
    })
    .then((order) => {
        return sendConfirmation(order);
    })
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log("Something went wrong:", error);
    });