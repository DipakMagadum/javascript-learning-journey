// Arrow function ( => ) = An arrow function is a shorter syntax for writing a function expression in JavaScript
// we do not use function keyword in an arrow function

/*
Basic Syntax
let functionName = () => {
    // code to execute
    }

*/

// Basic arrow function
let showMessage = () =>{
    console.log("Welcome to JavaScript");
}
showMessage();


// arrow function with parameters
let greetUser = (userName) => {
    console.log(`Welcome ${userName}`);
}
greetUser("Dipak");

// Practice

let calculateSquare = (number) => {
    return number * number;
}
let result = calculateSquare(5);
console.log(`The square is ${result}`);






let showEmployee = (name,role) => {

    console.log(`Name: ${name} and Role: ${role}`);
}
showEmployee("Dipak","Developer");