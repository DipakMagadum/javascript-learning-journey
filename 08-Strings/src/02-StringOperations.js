// String Operations in JavaScript
// Extracting, searching and processing string data


// --------------------------------------------------
// slice()
// --------------------------------------------------

let courseName = "Java Full Stack Developer";

let course = courseName.slice(0, 14);

console.log(`Course: ${course}`);


// Extract the last part of a string

let role = "Frontend Developer";

let developerRole = role.slice(9);

console.log(`Role: ${developerRole}`);


// --------------------------------------------------
// substring()
// --------------------------------------------------

let technology = "JavaScript";

let language = technology.substring(0, 4);

console.log(`Technology: ${language}`);


// --------------------------------------------------
// startsWith() and endsWith()
// --------------------------------------------------

let fileName = "resume.pdf";

console.log(`Starts with resume: ${fileName.startsWith("resume")}`);
console.log(`Ends with PDF: ${fileName.endsWith(".pdf")}`);


// --------------------------------------------------
// String search
// --------------------------------------------------

let jobTitle = "Junior JavaScript Developer";

if (jobTitle.toLowerCase().includes("javascript")) {
    console.log("This job requires JavaScript.");
}


// --------------------------------------------------
// Practical email validation
// --------------------------------------------------

let email = "dipak@example.com";

let hasAtSymbol = email.includes("@");
let hasDomain = email.endsWith(".com");

if (hasAtSymbol && hasDomain) {
    console.log("Email format looks valid.");
} else {
    console.log("Please enter a valid email.");
}


// --------------------------------------------------
// Username processing
// --------------------------------------------------

let username = "   DipakMagadum   ";

let cleanUsername = username.trim().toLowerCase();

console.log(`Username: ${cleanUsername}`);


// --------------------------------------------------
// Extract username from email
// --------------------------------------------------

let userEmail = "rahul.sharma@gmail.com";

let atPosition = userEmail.indexOf("@");

let userPart = userEmail.slice(0, atPosition);

console.log(`Username from email: ${userPart}`);


// --------------------------------------------------
// Practical product search
// --------------------------------------------------

let productName = "Wireless Gaming Mouse";

let searchTerm = "gaming";

if (productName.toLowerCase().includes(searchTerm.toLowerCase())) {
    console.log("Product found.");
} else {
    console.log("Product not found.");
}