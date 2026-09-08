const student ={
    name: "Chioma",
    age: 19,
    course: "Agriculture",
    score: 80,

    greet: function(){
        this.score = this.score + 20;
        console.log(this.score);
}
}
student.greet();

const employee ={
    name: "Augustine",
    age:    35,
    job: "Computer Instructor",

    introduce: function(){
        this.name = "Chimaoraoke "+"Ifeoma"
        console.log(`My name is ${this.name}`);
        console.log(`I am ${this.age} years old.`)
        console.log(`My work is ${this.job}`)
    }
};
employee.introduce();

const car = {
    brand: "Toyota",
    model: "Camrey",
    year:   2020,

    describe(){
        console.log(`I have a ${this.brand} ${this.model} made in the ${this.year}`)
    }
}
car.describe();

const bankAccount ={
    owner: "Augustine",
    acccountBalance: 10000,

    deposit(depostitAmount){
        this.acccountBalance += depostitAmount;
        console.log(`Deposited ${depostitAmount}. New balance: ${this.acccountBalance}`);
    },

    withdraw(amountwithdraw){
            this.acccountBalance -= amountwithdraw;
            if (amountwithdraw <= this.acccountBalance) {
            console.log(`Withdrew ${amountwithdraw}. New balance: ${this.acccountBalance}`);
        } else {
            console.log("Insufficient funds.");
        }
}
}
bankAccount.deposit(5000);
bankAccount.withdraw(30000);