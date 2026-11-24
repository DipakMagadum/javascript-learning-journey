
class Product {
    static storeName = "Tech Store";

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayDetails() {
        console.log("Product:", this.name);
        console.log("Price: ₹" + this.price);
    }

    // Static method
    static displayStoreName() {
        console.log("Store Name:", Product.storeName);
    }
}

// Call static method using class name
Product.displayStoreName();

// Create product object
const product1 = new Product("Wireless Mouse", 799);

// Call instance method using object
product1.displayDetails();
