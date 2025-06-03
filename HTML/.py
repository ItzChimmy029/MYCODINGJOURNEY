import datetime
import random
import re

class BankAccount:
    """A class representing a bank account."""
    
    def __init__(self, account_number, initial_deposit=500.00):
        """Initialize a new bank account with a unique account number and initial deposit."""
        self.account_number = account_number
        self.balance = max(initial_deposit, 500.00)
    
    def deposit(self, amount):
        """Deposit funds into the account."""
        if amount < 0:
            raise ValueError("Deposit amount cannot be negative.")
        self.balance += amount
        print(f"Deposit successful. New balance: R{self.balance:,.2f}")
        self.log_transaction(f"Deposited R{amount:,.2f}")
    
    def withdraw(self, amount):
        """Withdraw funds from the account if sufficient balance is available."""
        if amount < 0:
            raise ValueError("Withdrawal amount cannot be negative.")
        if amount > self.balance:
            raise ValueError("Insufficient funds for withdrawal.")
        self.balance -= amount
        print(f"Withdrawal successful. New balance: R{self.balance:,.2f}")
        self.log_transaction(f"Withdrew R{amount:,.2f}")
    
    def check_balance(self):
        """Check the current balance of the account."""
        print(f"Current balance: R{self.balance:,.2f}")
        return self.balance
    
    def transfer(self, target_account, amount):
        """Transfer funds to another account."""
        if amount < 0:
            raise ValueError("Transfer amount cannot be negative.")
        if amount > self.balance:
            raise ValueError("Insufficient funds for transfer.")
        
        self.withdraw(amount)
        target_account.deposit(amount)
    
    def log_transaction(self, action):
        """Log transactions with a timestamp."""
        timestamp = datetime.datetime.now().strftime("%d-%m-%Y %H:%M:%S")
        print(f"[{timestamp}] {action} account {self.account_number}")

class BankSystem:
    """A class representing the bank system with multiple accounts."""
    
    def __init__(self):
        """Initialize the banking system."""
        self.accounts = {}

    def create_account(self):
        """Create a new bank account with a unique account number."""
        while True:
            account_number = random.randint(10000000, 99999999)
            if account_number not in self.accounts:
                break
        new_account = BankAccount(account_number)
        self.accounts[account_number] = new_account
        print(f"Account created with number: {account_number}")
        return new_account
    
    def get_account(self, account_number):
        """Retrieve an existing account."""
        return self.accounts.get(account_number, None)

def parse_amount(amount_str):
    """Parse and validate the amount from the input string."""
    match = re.match(r"R(\d{1,3})(,\d{3})?\.\d{2}", amount_str)
    if not match:
        raise ValueError("Invalid amount format.")
    return float(match.group(0).replace(',', ''))

def main():
    bank_system = BankSystem()
    
    while True:
        print("\n--- South African Banking System ---")
        print("1. Create Account")
        print("2. Deposit Funds")
        print("3. Withdraw Funds")
        print("4. Check Balance")
        print("5. Transfer Funds")
        print("6. Exit")

        choice = input("Enter your choice: ")

        if choice == '1':
            bank_system.create_account()
        elif choice in ['2', '3', '4', '5']:
            account_number = input("Enter account number: ")
            try:
                account_number = int(account_number)
                account = bank_system.get_account(account_number)
                if not account:
                    print("Account does not exist. Please try again.")
                    continue
                
                if choice == '2':
                    amount = parse_amount(input("Enter amount to deposit: "))
                    account.deposit(amount)
                elif choice == '3':
                    amount = parse_amount(input("Enter amount to withdraw: "))
                    account.withdraw(amount)
                elif choice == '4':
                    account.check_balance()
                elif choice == '5':
                    target_account_number = input("Enter target account number: ")
                    target_account_number = int(target_account_number)
                    target_account = bank_system.get_account(target_account_number)
                    if not target_account:
                        print("Target account does not exist.")
                        continue
                    amount = parse_amount(input("Enter amount to transfer: "))
                    account.transfer(target_account, amount)
            except ValueError as e:
                print(f"Error: {e}")
            except Exception as e:
                print(f"An unexpected error occurred: {e}")
        elif choice == '6':
            print("Exiting the system. Goodbye!")
            break
        else:
            print("Invalid choice. Please select a valid option.")

if __name__ == "__main__":
    main()