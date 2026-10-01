// Creating and Managing DOM Elements
// Creating new elements and adding them to the page


let productList = document.getElementById("productList");


// --------------------------------------------------
// Create a new element
// --------------------------------------------------

let productName = document.createElement("h2");

productName.textContent = "Laptop";

productList.appendChild(productName);


// --------------------------------------------------
// Create another element
// --------------------------------------------------

let productPrice = document.createElement("p");

productPrice.textContent = "Price: ₹55000";

productList.appendChild(productPrice);


// --------------------------------------------------
// Create a complete product card
// --------------------------------------------------

let productCard = document.createElement("div");

productCard.className = "product-card";

let name = document.createElement("h2");
name.textContent = "Wireless Mouse";

let price = document.createElement("p");
price.textContent = "Price: ₹1200";

let status = document.createElement("p");
status.textContent = "In Stock";

productCard.appendChild(name);
productCard.appendChild(price);
productCard.appendChild(status);

productList.appendChild(productCard);


// --------------------------------------------------
// Create a button
// --------------------------------------------------

let button = document.createElement("button");

button.textContent = "Buy Now";

productCard.appendChild(button);


// --------------------------------------------------
// Remove an element
// --------------------------------------------------

productPrice.remove();