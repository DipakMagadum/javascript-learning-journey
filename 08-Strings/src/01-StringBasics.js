// String Basics in JavaScript
// Working with string values, indexes and basic operations


let userName = "Dipak Magadum";


// String length

console.log(`Name: ${userName}`);
console.log(`Number of characters: ${userName.length}`);


// Accessing characters using index

console.log(`First character: ${userName[0]}`);
console.log(`Last character: ${userName[userName.length - 1]}`);


// Finding the position of a character

console.log(`Position of M: ${userName.indexOf("M")}`);


// Checking whether text exists

console.log(`Contains Magadum: ${userName.includes("Magadum")}`);


// Changing letter case

let message = "Welcome to JavaScript";

console.log(message.toUpperCase());
console.log(message.toLowerCase());


// Removing extra spaces

let email = "   dipak@example.com   ";

console.log(`Before trim: "${email}"`);
console.log(`After trim: "${email.trim()}"`);


// Practical example

let searchText = "JavaScript Developer";

console.log(`Search text: ${searchText}`);

if (searchText.toLowerCase().includes("javascript")) {
    console.log("JavaScript was found.");
}