
class BankAccount {
    #balance;

    constructor(accountHolder, initialBalance) {
        this.accountHolder = accountHolder;
        this.#balance = initialBalance;
    }

    // Getter
    get balance() {
        return this.#balance;
    }

    // Setter
    set balance(amount) {
        if (amount < 0) {
            console.log("Balance cannot be negative.");
            return;
        }

        this.#balance = amount;
        console.log("Balance updated successfully.");
    }
}

const account1 = new BankAccount("Rahul Patil", 5000);

// Access using getter
console.log("Current Balance:", account1.balance);

// Update using setter
account1.balance = 8000;

// Access updated balance
console.log("Updated Balance:", account1.balance);

// Try setting an invalid balance
account1.balance = -2000;

console.log("Final Balance:", account1.balance);
