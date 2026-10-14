// Displaying customer information when some details are missing

let customer = {
    name: "Amit",
    contact: {
        email: "amit@example.com"
    },
    address: null
};

console.log(`Customer: ${customer.name}`);
console.log(`Email: ${customer.contact?.email}`);
console.log(`Phone: ${customer.contact?.phone ?? "Not provided"}`);
console.log(`City: ${customer.address?.city ?? "Address not available"}`);


// A product may not have a discount

let product = {
    name: "Keyboard",
    price: 1800,
    discount: 0
};

let discount = product.discount ?? 10;

console.log(`Product: ${product.name}`);
console.log(`Discount: ${discount}%`);