function prepareOrder(callback) {
    console.log("Preparing the order...");

    callback();
}

function sendConfirmation() {
    console.log("Order confirmation sent.");
}

prepareOrder(sendConfirmation);