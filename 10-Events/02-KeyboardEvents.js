let searchBox = document.getElementById("searchBox");
let searchText = document.getElementById("searchText");


// Runs when a key is pressed

searchBox.addEventListener("keydown", (event) => {
    searchText.textContent = `You pressed: ${event.key}`;
});


// Runs when a key is released

searchBox.addEventListener("keyup", () => {

    if (searchBox.value === "") {
        searchText.textContent = "Start typing to search.";
    } else {
        searchText.textContent = `Searching for "${searchBox.value}"`;
    }
});