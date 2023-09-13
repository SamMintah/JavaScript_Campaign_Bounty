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

function createAccount() {
    const accountHolder = document.getElementById("account-holder").value;
    const initialBalance = parseFloat(document.getElementById("initial-balance").value);
    const accountType = document.getElementById("account-type").value;

    const account = new BankAccount(accountHolder, initialBalance, accountType);
    accounts.push(account);

    document.getElementById("creation-result").innerHTML = ` ${accountType} Account created for ${accountHolder}`;
}

function performAction() {
    const action = document.getElementById("action").value;
    const amount = parseFloat(document.getElementById("amount").value);
    
    try {
        const account = accounts[0]; // For simplicity, assume only one account exists

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
                document.getElementById("account-holder-info").innerHTML = account.accountHolder;
                document.getElementById("account-type-info").innerHTML = account.accountType;
                document.getElementById("balance-info").innerHTML = account.balance;
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
