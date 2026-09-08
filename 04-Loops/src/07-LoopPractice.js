
for (let orderNumber = 1; orderNumber <= 5; orderNumber++) {

    if (orderNumber === 3) {
        continue;
    }

    if (orderNumber === 5) {
        break;
    }

    console.log(`Processing order ${orderNumber}`);
}

// Nested Loop
for (let row = 1; row <= 3; row++) {

    for (let column = 1; column <= 3; column++) {
        console.log(`Row ${row} - Column ${column}`);
    }

}