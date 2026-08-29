//Syntax
// if (condition1) {

// } else if (condition2) {

// } else if (condition3) {

// } else {

// }

let loggedIn = true;
let admin = false;

if(loggedIn && admin){
    console.log("Welcome Admin");
}
 else if(loggedIn){
    console.log("Welcome User");
 }
  else{
    console.log("Login First");
  }