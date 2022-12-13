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
        // setBalance(this.getBalance() - amount);
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
    const checkingAccount = new CheckingAccount("9909");
    console.log("withdraw 300");
    checkingAccount.withdraw(400);
    console.log(checkingAccount.toString());
    
    console.log("withdraw 200");
    checkingAccount.withdraw(100);
    console.log(checkingAccount.toString());
    console.log("deposit 400");
    checkingAccount.deposit(500);
    console.log(checkingAccount.toString());
    console.log("withdraw 200");
    checkingAccount.withdraw(100);
    console.log(checkingAccount.endOfMonth(), "end of ==========");
    