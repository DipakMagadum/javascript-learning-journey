function createOrder(orderId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Order #${orderId} created.`);

            resolve({
                id: orderId,
                amount: 2499
            });
        }, 1000);
    });
}

function processPayment(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Payment of ₹${order.amount} completed.`);

            resolve({
                ...order,
                paymentStatus: "Paid"
            });
        }, 1000);
    });
}

async function completeOrder() {
    console.log("Starting order process...");

    const order = await createOrder(1042);

    const payment = await processPayment(order);

    console.log(`Order ID: ${payment.id}`);
    console.log(`Payment status: ${payment.paymentStatus}`);
    console.log("Order process completed.");
}

completeOrder();

console.log("Customer can continue browsing.");