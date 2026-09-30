// Reading and Updating DOM Content
// Working with textContent and innerHTML


// Select the elements

let pageTitle = document.getElementById("pageTitle");
let message = document.getElementById("message");
let productInfo = document.getElementById("productInfo");


// Read existing text

console.log(pageTitle.textContent);
console.log(message.textContent);


// Update text content

pageTitle.textContent = "JavaScript DOM Practice";

message.textContent = "The message has been updated using JavaScript.";


// Add HTML content

productInfo.innerHTML = `
    <h2>Laptop</h2>
    <p>Price: ₹55000</p>
`;


// Update the HTML content again

productInfo.innerHTML = `
    <h2>Gaming Laptop</h2>
    <p>Price: ₹65000</p>
    <p>Available: Yes</p>
`;