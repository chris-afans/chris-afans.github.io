class BankAccount {
    constructor(name, deposit) {
      this._name = name;
      this._deposit = deposit;
    }

    get name() {
      return this._name;
    }

    get deposit() {
      return this._deposit;
    }

    set deposit(amount) {
      this._deposit = amount;
    }

    static accountInfoList = [];

    static createAccount() {
      const name = document.getElementById("accountName").value;
      const deposit = parseFloat(document.getElementById("deposit").value);
      const account = new BankAccount(name, deposit);
      BankAccount.accountInfoList.push(account);
      BankAccount.displayAccounts();
    }

    static displayAccounts() {
      const accountListTextArea = document.getElementById("accountList");
      let accountInfoString = "";
      for (let account of BankAccount.accountInfoList) {
        accountInfoString += `Account Name: ${account.name}, Balance: ${account.deposit}\n`;
      }
      accountListTextArea.value = accountInfoString;
      BankAccount.populateAccountSelect();
    }

    static populateAccountSelect() {
      const accountSelect = document.getElementById("accountSelect");
      accountSelect.innerHTML = "";
      for (let account of BankAccount.accountInfoList) {
        const option = document.createElement("option");
        option.value = account.name;
        option.text = account.name;
        accountSelect.add(option);
      }
    }

    static deposit() {
      document.getElementById("transactionForm").style.display = "block";
      document.getElementById("transactionAmount").placeholder =
        "Amount to deposit";
      BankAccount.populateAccountSelect();
    }

    static debit() {
      document.getElementById("transactionForm").style.display = "block";
      document.getElementById("transactionAmount").placeholder =
        "Amount to debit";
      BankAccount.populateAccountSelect();
    }

    static transactionAmountUpdate() {
      let submitTransactionButton =
        document.getElementById("submitTransaction");
      submitTransactionButton.disabled = false;
    }

    static cancelTransaction() {
      document.getElementById("transactionForm").style.display = "none";
    }

    static submitTransaction() {
      const accountName = document.getElementById("accountSelect").value;
      const transactionAmount = parseFloat(
        document.getElementById("transactionAmount").value
      );
      const account = BankAccount.accountInfoList.find(
        (a) => a.name === accountName
      );

      if (
        document.getElementById("transactionAmount").placeholder ===
        "Amount to deposit"
      ) {
        
        account.deposit += transactionAmount;
        account.deposit = account.deposit;
        BankAccount.displayAccounts();
      } 
      
      if (
        document.getElementById("transactionAmount").placeholder ===
        "Amount to debit"
      ) {
        if (account.deposit < transactionAmount) {
          return alert("Debit amount cannot be more than available amount in account");
        }
        
        account.deposit -= transactionAmount;
        BankAccount.displayAccounts();
      }
    }
  }

  //Create account event listener
  const createAccountButton = document.getElementById("createAccount");
  createAccountButton.addEventListener("click", BankAccount.createAccount);

  //Deposit event listener
  const depositButton = document.getElementById("depositButton");
  depositButton.addEventListener("click", BankAccount.deposit);

  //Deposit event listener
  const debitButton = document.getElementById("debitButton");
  debitButton.addEventListener("click", BankAccount.debit);

  //Transaction amount listener
  const transactionAmount = document.getElementById("transactionAmount");
  transactionAmount.addEventListener(
    "keyup",
    BankAccount.transactionAmountUpdate
  );

  //Submit transaction
  const submitTransaction = document.getElementById("submitTransaction");
  submitTransaction.addEventListener(
    "click",
    BankAccount.submitTransaction
  );

  //Cancel transaction
  const cancelTransaction = document.getElementById("cancelTransaction");
  cancelTransaction.addEventListener(
    "click",
    BankAccount.cancelTransaction
  );