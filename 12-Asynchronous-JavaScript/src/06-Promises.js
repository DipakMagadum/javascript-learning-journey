function prepareOrder(orderId) {
    return new Promise((resolve, reject) => {
        console.log(`Preparing order #${orderId}...`);

        setTimeout(() => {
            let orderReady = true;

            if (orderReady) {
                resolve({
                    id: orderId,
                    status: "Ready"
                });
            } else {
                reject("Unable to prepare the order.");
            }
        }, 2000);
    });
}

prepareOrder(1042)
    .then((order) => {
        console.log(`Order #${order.id} is ${order.status}.`);
    })
    .catch((error) => {
        console.log("Order failed:", error);
    });

console.log("Customer can continue browsing.");