let loginForm = document.getElementById("loginForm");
let email = document.getElementById("email");
let password = document.getElementById("password");
let message = document.getElementById("message");

loginForm.addEventListener("submit", (event) => {

    event.preventDefault();

    if (email.value === "" || password.value === "") {
        message.textContent = "Please fill in all fields.";
        return;
    }

    message.textContent = `Login request received for ${email.value}`;
});