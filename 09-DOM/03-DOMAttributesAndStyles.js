// DOM Attributes and Styles
// Changing element attributes and styles using JavaScript


// Select elements

let pageTitle = document.getElementById("pageTitle");
let productLink = document.getElementById("productLink");
let productCard = document.getElementById("productCard");
let productStatus = document.getElementById("productStatus");


// --------------------------------------------------
// Reading attributes
// --------------------------------------------------

console.log(productLink.getAttribute("href"));


// --------------------------------------------------
// Updating attributes
// --------------------------------------------------

productLink.setAttribute("href", "https://www.example.com");

productLink.setAttribute("target", "_blank");


// --------------------------------------------------
// Checking an attribute
// --------------------------------------------------

console.log(
    `Target attribute exists: ${productLink.hasAttribute("target")}`
);


// --------------------------------------------------
// Removing an attribute
// --------------------------------------------------

productLink.removeAttribute("target");

console.log(
    `Target attribute exists: ${productLink.hasAttribute("target")}`
);


// --------------------------------------------------
// Changing styles
// --------------------------------------------------

pageTitle.style.fontSize = "32px";
pageTitle.style.marginBottom = "20px";

productCard.style.padding = "20px";
productCard.style.border = "1px solid black";
productCard.style.borderRadius = "8px";

productStatus.style.fontWeight = "bold";


// --------------------------------------------------
// Updating the UI based on product status
// --------------------------------------------------

let isAvailable = true;

if (isAvailable) {
    productStatus.textContent = "Available";
    productStatus.style.fontWeight = "bold";
} else {
    productStatus.textContent = "Out of Stock";
    productStatus.style.fontWeight = "normal";
}