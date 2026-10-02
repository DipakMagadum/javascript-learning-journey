// DOM Class List
// Adding, removing, toggling and checking CSS classes

let productCard = document.getElementById("productCard");
let productStatus = document.getElementById("productStatus");
let highlightButton = document.getElementById("highlightButton");
let statusButton = document.getElementById("statusButton");


// Add a CSS class

productStatus.classList.add("available");


// Check whether a class exists

console.log(
    `Available class exists: ${productStatus.classList.contains("available")}`
);


// Highlight the product card

highlightButton.addEventListener("click", () => {
    productCard.classList.toggle("highlighted");
});


// Change product status

statusButton.addEventListener("click", () => {

    if (productStatus.classList.contains("available")) {

        productStatus.classList.remove("available");
        productStatus.classList.add("out-of-stock");
        productStatus.textContent = "Out of Stock";

    } else {

        productStatus.classList.remove("out-of-stock");
        productStatus.classList.add("available");
        productStatus.textContent = "Available";
    }
});