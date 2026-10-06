let productCard = document.getElementById("productCard");
let buyButton = document.getElementById("buyButton");
let message = document.getElementById("message");


// Click event

buyButton.addEventListener("click", () => {
    message.textContent = "Product added to your cart.";
});


// Double click event

productCard.addEventListener("dblclick", () => {
    productCard.classList.toggle("active");
});


// Mouse enters the product card

productCard.addEventListener("mouseenter", () => {
    message.textContent = "You are viewing the product.";
});


// Mouse leaves the product card

productCard.addEventListener("mouseleave", () => {
    message.textContent = "Click the button to buy the product.";
});