function processPayment(orderId, amount) {
    return new Promise((resolve, reject) => {
        console.log(`Processing payment for order #${orderId}...`);

        setTimeout(() => {
            const paymentSuccessful = false;

            if (paymentSuccessful) {
                resolve({
                    orderId: orderId,
                    amount: amount,
                    status: "Paid"
                });
            } else {
                reject(new Error("Payment failed. Please try again."));
            }
        }, 1500);
    });
}

processPayment(1042, 2499)
    .then((payment) => {
        console.log(`Payment successful for order #${payment.orderId}.`);
        console.log(`Amount paid: ₹${payment.amount}`);
        console.log(`Status: ${payment.status}`);
    })
    .catch((error) => {
        console.log("Unable to complete the order payment.");
        console.log("Reason:", error.message);
    });

console.log("You can continue browsing other products.");