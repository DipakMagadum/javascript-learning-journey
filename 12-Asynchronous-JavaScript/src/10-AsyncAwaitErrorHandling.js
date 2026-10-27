function processPayment(orderId, amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const paymentSuccessful = false;

            if (paymentSuccessful) {
                resolve({
                    orderId: orderId,
                    amount: amount,
                    status: "Paid"
                });
            } else {
                reject(new Error("Payment could not be completed."));
            }
        }, 1500);
    });
}

async function completeOrder() {
    try {
        console.log("Starting payment...");

        const payment = await processPayment(2055, 3999);

        console.log(`Payment successful for order #${payment.orderId}.`);
        console.log(`Amount paid: ₹${payment.amount}`);
        console.log(`Payment status: ${payment.status}`);
    } catch (error) {
        console.log("Unable to complete the payment.");
        console.log("Reason:", error.message);
    } finally {
        console.log("Payment process finished.");
    }
}

completeOrder();

console.log("Customer can continue browsing.");