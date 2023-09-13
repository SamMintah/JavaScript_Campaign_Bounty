# Bank Account Management Website

This website allows you to simulate bank account management. You can create a new bank account, perform actions like depositing or withdrawing money, and check the account balance.

## Instructions:

1. **Create an Account**:
   - Fill in the "Account Holder" field with your name.
   - Enter the initial balance in the "Initial Balance" field (e.g., 1000).
   - Choose the account type (Checking or Savings) from the dropdown.
   - Click the "Create Account" button.

2. **Perform Actions**:
   - After creating an account, you can perform three actions: Deposit, Withdraw, or Check Balance.
   - Select your desired action from the dropdown.
   - Enter the amount (e.g., 500) in the "Amount" field.
   - Click the "Submit" button.

3. **View Results**:
   - The result of your action will be displayed under the "Action Result" section.
   - If you choose "Check Balance," your account details will also be updated.

## Incorporating JavaScript Features:

### 1. Classes:
   - We've defined a `BankAccount` class to represent a bank account. It has properties for the account holder, balance, and account type. The `deposit` and `withdraw` methods allow you to modify the balance.

### 2. Switch Statements:
   - We use a switch statement to determine the action chosen by the user (Deposit, Withdraw, or Check Balance) and execute the corresponding logic.

### 3. Try-Catch-Finally Statements:
   - Exception handling is implemented using try-catch-finally statements. If an action results in an error (e.g., insufficient funds), the error message is caught and displayed to the user. The finally block ensures proper cleanup.

### CSS Styling:
   - We've styled the website using CSS, making it visually appealing and user-friendly. The use of flexbox helps arrange elements neatly.

This website provides a simple and interactive way to manage a bank account while demonstrating the use of JavaScript classes, switch statements, and try-catch-finally statements for error
