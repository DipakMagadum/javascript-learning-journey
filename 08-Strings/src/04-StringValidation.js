// String Validation and Processing
// Using string methods to validate and process user input


// --------------------------------------------------
// Username validation
// --------------------------------------------------

let username = "DipakMagadum";

let cleanUsername = username.trim();

if (cleanUsername.length >= 5) {
    console.log("Username is valid.");
} else {
    console.log("Username must contain at least 5 characters.");
}


// --------------------------------------------------
// Email validation
// --------------------------------------------------

let email = "dipak@example.com";

let emailValue = email.trim().toLowerCase();

if (
    emailValue.includes("@") &&
    emailValue.endsWith(".com")
) {
    console.log("Email format looks valid.");
} else {
    console.log("Invalid email format.");
}


// --------------------------------------------------
// Password validation
// --------------------------------------------------

let password = "JavaScript@123";

if (password.length >= 8) {
    console.log("Password length is valid.");
} else {
    console.log("Password must contain at least 8 characters.");
}


// --------------------------------------------------
// Search validation
// --------------------------------------------------

let productName = "Wireless Gaming Mouse";
let searchTerm = "gaming";

let productText = productName.toLowerCase();
let searchText = searchTerm.toLowerCase();

if (productText.includes(searchText)) {
    console.log("Product matched the search.");
} else {
    console.log("No matching product found.");
}


// --------------------------------------------------
// File extension validation
// --------------------------------------------------

let fileName = "profile-photo.jpg";

if (
    fileName.endsWith(".jpg") ||
    fileName.endsWith(".png")
) {
    console.log("Image file detected.");
} else {
    console.log("Unsupported image format.");
}


// --------------------------------------------------
// Processing a list of skills
// --------------------------------------------------

let skillInput = " JavaScript, React, Node.js ";

let skills = skillInput
    .trim()
    .split(",")
    .map((skill) => skill.trim());

console.log("User skills:");
console.log(skills);

console.log(`Total skills: ${skills.length}`);
