let cart = document.getElementById("cart");
let message = document.getElementById("message");

cart.addEventListener("click", (event) => {

    if (event.target.classList.contains("remove-button")) {

        let cartItem = event.target.parentElement;
        let productName = cartItem.querySelector("span").textContent;

        cartItem.remove();

        let remainingProducts = cart.querySelectorAll(".cart-item").length;

        message.textContent = `${productName} removed. ${remainingProducts} products remaining.`;
    }
});