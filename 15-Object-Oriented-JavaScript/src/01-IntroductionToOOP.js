const product = {
    name: "Wireless Mouse",
    price: 799,
    stock: 15,

    displayDetails: function () {
        console.log("Product:", this.name);
        console.log("Price: ₹" + this.price);
        console.log("Stock:", this.stock);
    }
};

product.displayDetails();