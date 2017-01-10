class Account {
    private initialBalance: number;
    private ownerName: string;
    private numOfWithdrawals: number;

    constructor(initialBalance: number, ownerName: string) {
        this.initialBalance = initialBalance;
        this.ownerName = ownerName;
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