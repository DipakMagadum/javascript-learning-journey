// Object Methods and this Keyword
// Objects can contain both data and functions.


// Object with a method

let employee = {
    name: "Rahul",
    role: "Java Developer",
    experience: 2,

    introduce: function () {
        console.log(`Hi, I am ${this.name}`);
        console.log(`I work as a ${this.role}`);
    }
};

employee.introduce();


// Using this to access object properties

let product = {
    name: "Laptop",
    price: 55000,
    quantity: 2,

    getTotalPrice: function () {
        return this.price * this.quantity;
    }
};

let totalPrice = product.getTotalPrice();

console.log(`Product: ${product.name}`);
console.log(`Total price: ₹${totalPrice}`);


// Updating object data through a method

let bankAccount = {
    accountHolder: "Amit",
    balance: 10000,

    deposit: function (amount) {
        this.balance += amount;
        console.log(`Amount deposited: ₹${amount}`);
    },

    showBalance: function () {
        console.log(`Current balance: ₹${this.balance}`);
    }
};

bankAccount.showBalance();

bankAccount.deposit(5000);

bankAccount.showBalance();


// Another practical example

let order = {
    orderId: 101,
    amount: 2500,
    status: "Pending",

    confirmOrder: function () {
        this.status = "Confirmed";
        console.log(`Order ${this.orderId} has been confirmed.`);
    },

    showOrder: function () {
        console.log(
            `Order ID: ${this.orderId}, Amount: ₹${this.amount}, Status: ${this.status}`
        );
    }
};

order.showOrder();

order.confirmOrder();

order.showOrder();