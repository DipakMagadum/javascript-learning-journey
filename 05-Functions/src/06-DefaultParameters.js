// Default Parameter => A default parameter is a parameter that uses a default value when no argument is provided for it

/*
function functionName(parameter = defaultValue) {
    code to execute
}
*/

function greetUser(userName = "Guest") {
    console.log(`Welcome ${userName}`);
}
greetUser();
greetUser("Dipak");

