
class BankAccount {
    #balance;

    constructor(accountHolder, initialBalance) {
        this.accountHolder = accountHolder;
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount <= 0) {
            console.log("Enter a valid deposit amount.");
            return;
        }

        this.#balance += amount;
        console.log("Amount deposited successfully.");
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.log("Enter a valid withdrawal amount.");
            return;
        }

        if (amount > this.#balance) {
            console.log("Insufficient balance.");
            return;
        }

        this.#balance -= amount;
        console.log("Amount withdrawn successfully.");
    }

    displayBalance() {
        console.log("Account Holder:", this.accountHolder);
        console.log("Available Balance: ₹" + this.#balance);
    }
}

const account1 = new BankAccount("Rahul Patil", 5000);

account1.displayBalance();

account1.deposit(2000);
account1.withdraw(1500);

account1.displayBalance();
