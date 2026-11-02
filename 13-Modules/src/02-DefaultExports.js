import getUserDetails from "./userService.js";

const user = getUserDetails();

console.log("User Details");
console.log("============");

console.log("User ID:", user.id);
console.log("Name:", user.name);
console.log("Email:", user.email);
console.log("Role:", user.role);