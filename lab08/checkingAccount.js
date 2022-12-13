class CheckingAccount extends Account{
    constructor(number) {
        super(number);
        this.overdraft = 500;
      }

      get overdraft() {
        return this._overdraft;
      }
      set overdraft(overdraft) {
        this._overdraft = overdraft;
      }

      withdraw(amount) {
        if (amount <= 0) {
          throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this.getBalance() + this.overdraft) {
          throw Error("Insufficient funds");
        }
        this.setBalance(this.getBalance() - amount);
      }
      toString() {
        return (
          "Account " +
          this.getNumber() +
          ": balance " +
          this.getBalance() +
          ": overdraft " +
          this.overdraft
        );
      }
      endOfMonth() {
        return `${
          this.getBalance() < 0 ? "Warning, low balance" : ""
        } CheckingAccount ${this.getNumber()}: balance: ${this.getBalance()} overdraft limit: ${
          this.overdraft
        }`;
      }
    }
    const checkingAccount = new CheckingAccount("8909");
    console.log("withdraw 500");
    checkingAccount.withdraw(500);
    console.log(checkingAccount.toString());
    
    console.log("withdraw 100");
    checkingAccount.withdraw(100);
    console.log(checkingAccount.toString());
    console.log("deposit 500");
    checkingAccount.deposit(500);
    console.log(checkingAccount.toString());
    console.log("withdraw 100");
    checkingAccount.withdraw(100);
    console.log(checkingAccount.endOfMonth(), "end of ==========");
    