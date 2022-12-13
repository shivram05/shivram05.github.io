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