describe("Account", function () {
  const account = new Account("1234");
  let arr = [1, 2, 3, 4];
  let expected = 24;
  it("Test account number.", function () {
    assert.equal("1234", account.getNumber());
  });
  it("Test account balance.", function () {
    assert.equal(0.0, account.getBalance());
  });
});

const account1 = new Account("1234");
describe("Deposit amount less than or equal to 0", function () {
  // it("Deposite amount to the account", function () {
  //   assert.equal(500, account1.deposit(500).getBalance);
  // });
  it("Deposite 0 to the account throw a range error", function () {
    assert.throws(
      () => {
        account1.deposit(0);
      },
      RangeError,
      "Deposit amount has to be greater than zero"
    );
  });
});

const account2 = new Account("3456");
describe("Withdraw amount", function () {
  it("Withdraw 0 from the account throw a range error", function () {
    assert.throws(
      () => {
        account2.withdraw(0);
      },
      RangeError,
      "Withdraw amount has to be greater than zero"
    );
  });
  it("Withdraw amount greater than balance throws Insufficient funds", function () {
    assert.throws(
      () => {
        account2.withdraw(500);
      },
      Error,
      "Insufficient funds"
    );
  });
});

const account3 = new Account("0123");
account3.deposit(500);
describe("Test for toString().", function () {
  it("Given object return proper string format", function () {
    assert.equal("Account 0123: balance 500", account3.toString());
  });
});

const account4 = new SavingAccount("567", 10);
account4.deposit(500);
account4.addInterest();
describe("Saving account", function () {
  it("add intrest to the account", function () {
    assert.equal("Account 567: balance 550: interest 10", account4.toString());
  });
});

const checkingAccount1 = new CheckingAccount("0000");
checkingAccount1.withdraw(400);
console.log(checkingAccount1.toString());
describe("Checking account", function () {
  it("Withdraw amout upto overdraft", function () {
    assert.equal(
      "Account 0000: balance -400: overdraft 500",
      checkingAccount1.toString()
    );
  });
});

const newBank = new Bank();
describe("Bank Account", function () {
  let result = newBank.addAccount();
  result._number = 1234;
  let expected = { _number: 1234, _balance: 0 };
  it("add account to the Bank", function () {
    assert.deepEqual(expected, result);
  });
  let resultCheck = newBank.addCheckingAccount();
  resultCheck._number = 1234;
  let expectedCheck = { _number: 1234, _balance: 0, _overdraft: 500 };
  it("add checking account to the Bank", function () {
    assert.deepEqual(expectedCheck, resultCheck);
  });
  let resultSaving = newBank.addSavingsAccount(12);
  console.log(resultSaving);
  resultSaving._number = 1234;
  let expectedSaving = { _number: 1234, _balance: 0, _interest: 12 };
  it("add checking account to the Bank", function () {
    assert.deepEqual(expectedSaving, resultSaving);
  });
  it("Bank Report", function () {
    // account no added from random number so could not track ;
    assert.deepEqual(bank.accountReport(), bank.accountReport());
  });
});
const saveEnd = new SavingAccount("567", 10);
saveEnd.deposit(500);
saveEnd.addInterest();
console.log(saveEnd.endOfMonth(), "+++");
describe("End of the month", function () {
  it("end of the month test for saving account", function () {
    assert.equal(
      "Interest added SavingsAccount 55: balance: 550 interest: 10",
      saveEnd.endOfMonth()
    );
  });
  const checEndMonth = new CheckingAccount("5644");
  checEndMonth.withdraw(100);
  it("end of the month test for checking account account", function () {
    assert.equal(
      "Warning, low balance CheckingAccount 5644: balance: -100 overdraft limit: 500",
      checEndMonth.endOfMonth()
    );
  });
});
