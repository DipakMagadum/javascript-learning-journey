let registrationForm = document.getElementById("registrationForm");
let userName = document.getElementById("userName");
let email = document.getElementById("email");

let nameMessage = document.getElementById("nameMessage");
let emailMessage = document.getElementById("emailMessage");
let result = document.getElementById("result");

userName.addEventListener("input", () => {
    if (userName.value.trim().length < 3) {
        nameMessage.textContent = "Username must have at least 3 characters.";
    } else {
        nameMessage.textContent = "";
    }
});

email.addEventListener("input", () => {
    if (email.validity.typeMismatch) {
        emailMessage.textContent = "Please enter a valid email address.";
    } else {
        emailMessage.textContent = "";
    }
});

registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let name = userName.value.trim();

    if (name.length < 3 || !email.validity.valid || email.value.trim() === "") {
        result.className = "error";
        result.textContent = "Please correct the form before registering.";
        return;
    }

    result.className = "success";
    result.textContent = `Registration form completed for ${name}.`;
});