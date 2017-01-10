class CheckingsAccount extends Account{
    private initialBalance: number;
    private ownerName: string;

    constructor(initialBalance: number, ownerName: string) {
        super(initialBalance, ownerName);
    }

    deposit(amount: number) {
        if (amount > 0) {
            this.initialBalance += amount;
        }
    }

    withdraw(amount: number) {
        if (this.initialBalance === 0 || amount > this.initialBalance) {
            console.log("You can't withdraw. You don't have enough money.");
        } else {
            this.initialBalance -= amount;
        }
    }

    checkBalance() {
        console.log("This account belongs to " + this.ownerName + " and it has $" + this.initialBalance);
    }
}

var account = new CheckingsAccount(200, "Ena");
account.checkBalance();