let productCard = document.getElementById("productCard");
let buyButton = document.getElementById("buyButton");
let message = document.getElementById("message");

productCard.addEventListener("click", () => {
    message.textContent = "Product card clicked.";
});

buyButton.addEventListener("click", (event) => {
    event.stopPropagation();

    message.textContent = "Product added to cart.";
});