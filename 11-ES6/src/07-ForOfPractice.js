// Checking which items in an order are available

let orderItems = ["Laptop", "Mouse", "Keyboard", "Monitor"];

let unavailableItems = ["Monitor"];

for (let item of orderItems) {

    if (unavailableItems.includes(item)) {
        console.log(`${item} is currently unavailable.`);
        continue;
    }

    console.log(`${item} is ready to pack.`);
}