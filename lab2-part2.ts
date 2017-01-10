const WITHDRAWAL_LIMIT: number = 3;

class SavingsAccount extends Account {
    private initialBalance: number;
    private ownerName: string;
    private numOfWithdrawals: number;

    constructor(initialBalance: number, ownerName: string) {
        super(initialBalance, ownerName);
        this.numOfWithdrawals = 0;
    }

    deposit(amount: number) {
        if (amount > 0) {
            this.initialBalance += amount;
        }
    }

    withdraw(amount: number) {
        if (this.numOfWithdrawals === WITHDRAWAL_LIMIT) {
            console.log("ERROR: You were only allowed " + WITHDRAWAL_LIMIT + " withdrawal(s) on this account. You have exceeded that number.");
        } else if (this.initialBalance === 0 || amount > this.initialBalance) {
            console.log("You can't withdraw. You don't have enough money.");
        } else {
            this.initialBalance -= amount;
            this.numOfWithdrawals++;
        }
    }

    checkBalance() {
        console.log("This account belongs to " + this.ownerName + " and it has $" + this.initialBalance);
    }
}

var account = new SavingsAccount(200, "Ena");
account.checkBalance();
account.withdraw(6000); // fails not enough money check here.
account.withdraw(100);
account.withdraw(50);
account.withdraw(50);
account.withdraw(200); // fails withdrawal limit check here.
account.checkBalance();