    const bankAccount = {
        accountBalance: 10000,
        transactions: [],

    deposit(depositAmount){
        console.log(`Account Balance: ${this.accountBalance}`)

        this.accountBalance = this.accountBalance + depositAmount;

        console.log(`Deposit: ${depositAmount}`) 

        console.log(`Balance: ${this.accountBalance}`);

        this.transactions.push(`Deposit: ${depositAmount}`)

    },
        withdraw(withdrawAmount){
            
            console.log(`Withdrawal: ${withdrawAmount}`)

            if(withdrawAmount > this.accountBalance){
                console.log("Insufficient Balance")
            }
            else{
                this.accountBalance = this.accountBalance - withdrawAmount;
                console.log(`Balance: ${this.accountBalance}`);
                
                this.transactions.push(`Withdrawal: ${withdrawAmount}`)
            }

        },
        checkBalance(){
            console.log(`Current Balance: ${this.accountBalance}`)

        },
        showTransactions(){
            this.transactions.forEach((transaction, index)=>{
                console.log(`${index + 1}. ${transaction}`)
            });

        }
    }
    bankAccount.deposit(20000);
    bankAccount.withdraw(5000);
    console.log(bankAccount.transactions);
    bankAccount.showTransactions();
    bankAccount.checkBalance();

   
    