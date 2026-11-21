
class Product {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    displayDetails() {
        console.log("Product:", this.name);
        console.log("Price: ₹" + this.price);
        console.log("Stock:", this.stock);
        console.log("--------------------");
    }
}

// Create objects from the Product class
const product1 = new Product("Wireless Mouse", 799, 15);
const product2 = new Product("Mechanical Keyboard", 2499, 8);
const product3 = new Product("USB-C Hub", 1299, 12);

// Display product details
product1.displayDetails();
product2.displayDetails();
product3.displayDetails();