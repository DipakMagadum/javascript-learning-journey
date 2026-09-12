// function expression => A function expression is a function that is assigned to a variable

// Basic function expression
let greet = function(){
    console.log("Welcome to Javascript");
}
greet();

//  function expression with parameters

let greetUser = function(userName){
    console.log(`Welcome ${userName}`);
}
greetUser("Dipak");

let showProduct = function(productName,price){
    console.log(`productName ${productName} and price ${price}`);
}
showProduct("Lenovo",59000);