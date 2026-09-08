// A method is an object whose one of its properties is and object
const count = {
    countValue: 5, 
    increaseCount: function(){
        return this.countValue = this.countValue+1;
    },
    // getValue(){
    //     return this.countValue;
    // }
    
}

console.log(count.countValue);
const increaseValue1 = count.increaseCount();
console.log(increaseValue1);

const increaseValue2 = count.increaseCount();
console.log(increaseValue2)

const increaseValue3 = count.increaseCount();
console.log(increaseValue3);

const increaseValue4 = count.increaseCount();
console.log(increaseValue4);

const increaseValue5 = count.increaseCount();
console.log(increaseValue5);


//object method using Bank Account
const bankAccount = {
    accountBalance: 5000,
    deposit: function(depositAmount){
         this.accountBalance += depositAmount

    },
    withdraw: function(withdrwaAmount){
        if(withdrwaAmount > this.accountBalance){
            console.log("Insulficient Balance")
            return;
        }
         this.accountBalance -= withdrwaAmount;
    }, 
    getBalance(){
        return this.accountBalance;
    }
}
bankAccount.deposit(5000);
bankAccount.deposit(40000)
console.log(bankAccount.getBalance( ));
bankAccount.withdraw(7000)
console.log(bankAccount.getBalance());
bankAccount.withdraw(100000);
console.log(bankAccount.getBalance());