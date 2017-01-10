class CheckingsAccount extends Account{
    private initialBalance: number;
    private ownerName: string;

    constructor(initialBalance: number, ownerName: string) {
        super(initialBalance, ownerName);
    }
}

var account = new CheckingsAccount(200, "Ena");
account.checkBalance();