// Processing an order through multiple steps

function createOrder(callback) {
    setTimeout(() => {
        console.log("Order created.");
        callback();
    }, 1000);
}

function processPayment(callback) {
    setTimeout(() => {
        console.log("Payment completed.");
        callback();
    }, 1000);
}

function sendConfirmation(callback) {
    setTimeout(() => {
        console.log("Confirmation sent.");
        callback();
    }, 1000);
}

createOrder(() => {
    processPayment(() => {
        sendConfirmation(() => {
            console.log("Order process finished.");
        });
    });
});