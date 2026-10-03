let products = [
    {
        name: "Laptop",
        price: 55000,
        category: "Electronics"
    },
    {
        name: "Wireless Mouse",
        price: 1200,
        category: "Accessories"
    },
    {
        name: "Keyboard",
        price: 1800,
        category: "Accessories"
    },
    {
        name: "Monitor",
        price: 15000,
        category: "Electronics"
    }
];

let productList = document.getElementById("productList");

products.forEach((product) => {

    let card = document.createElement("div");
    card.classList.add("product-card");

    let name = document.createElement("h2");
    name.textContent = product.name;

    let price = document.createElement("p");
    price.textContent = `Price: ₹${product.price}`;

    let category = document.createElement("p");
    category.textContent = `Category: ${product.category}`;

    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(category);

    productList.appendChild(card);
});