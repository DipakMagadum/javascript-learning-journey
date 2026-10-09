let saveButton = document.getElementById("saveButton");
let searchBox = document.getElementById("searchBox");
let message = document.getElementById("message");

saveButton.addEventListener("click", (event) => {
    console.log(event);

    message.textContent = `Event: ${event.type}`;
    console.log("Clicked element:", event.target);
});

searchBox.addEventListener("keydown", (event) => {
    message.textContent = `You pressed: ${event.key}`;

    console.log("Event type:", event.type);
    console.log("Pressed key:", event.key);
});