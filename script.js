let accounts = [];

class BankAccount {
    constructor(accountHolder, initialBalance, accountType) {
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
        this.accountType = accountType;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            throw new Error("Insufficient funds");
        }
        this.balance -= amount;
    }
}

function performAction() {
    const action = document.getElementById("action").value;
    const amount = parseFloat(document.getElementById("amount").value);

    try {
        const account = accounts[0]; 

        switch (action) {
            case "Deposit":
                account.deposit(amount);
                document.getElementById("deposit-result").innerHTML = `Deposited $${amount}`;
                break;
            case "Withdraw":
                account.withdraw(amount);
                document.getElementById("withdraw-result").innerHTML = `Withdrawn $${amount}`;
                break;
            case "Check Balance":
                // Update account information
                document.getElementById("account-holder-info").textContent = account.accountHolder;
                document.getElementById("account-type-info").textContent = account.accountType;
                document.getElementById("balance-info").textContent = account.balance;
                
                // Clear action-specific results
                document.getElementById("deposit-result").innerHTML = "";
                document.getElementById("withdraw-result").innerHTML = "";
                document.getElementById("invalid-action-result").innerHTML = "";
                break;
            default:
                document.getElementById("invalid-action-result").innerHTML = "Invalid action";
        }
    } catch (error) {
        document.getElementById("invalid-action-result").innerHTML = error.message;
    }
}
