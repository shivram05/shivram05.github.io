
class SavingAccount extends Account {

    constructor(number,interest){
        super(number);
        this.interest = interest;
    }

    get getInterest(){
        return this._interest;
    }

    set setInterest(interest){
        this._interest = interest;
    }

    addInterest(){
        this.deposit(this.getBalance() * this.interest/100);
    }

    toString(){
        return (
            "Account " +
            this.getNumber() +
            ": balance " +
            this.getBalance() +
            ": interest " +
            this.interest
          );
    }

    endOfMonth() {
        return `Interest added SavingsAccount ${
          (this.getBalance() * this.interest) / 100
        }: balance: ${this.getBalance()} interest: ${this.interest}`;
      }     
}

const savingAccount = new SavingAccount("2345", 10);
savingAccount.deposit(1500);
savingAccount.addInterest();
console.log(savingAccount.toString());
console.log("end of the months", savingAccount.endOfMonth());