let quantity = document.getElementById("quantity");
let quantityMessage = document.getElementById("quantityMessage");

let delivery = document.getElementById("delivery");
let deliveryMessage = document.getElementById("deliveryMessage");


// input event

quantity.addEventListener("input", () => {
    quantityMessage.textContent = `Quantity: ${quantity.value}`;
});


// change event

delivery.addEventListener("change", () => {

    if (delivery.value === "express") {
        deliveryMessage.textContent = "Express Delivery selected.";
    } else {
        deliveryMessage.textContent = "Standard Delivery selected.";
    }
});