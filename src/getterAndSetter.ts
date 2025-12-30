//access modifers
// readonly

class BankAccount {
  public readonly userId: number;
  public userName: string;
  protected userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }
//   private addBalance(balance: number) {
//     this.userBalance = this.userBalance + balance;
//   }

  set addBalance(amount:number){
    this.userBalance = this.userBalance + amount
  }

//   getBalance(){
//     return this.userBalance
//   }

get getBalance(){
   return this.userBalance
}
}

const hridoyAccount = new BankAccount(102, "Sakif", 17000);
// hridoyAccount.addBalance(100);
// console.log(hridoyAccount);
// console.log(hridoyAccount.getBalance())

hridoyAccount.addBalance = 150;
console.log(hridoyAccount.getBalance)

class StudentBankAccount extends BankAccount {
  test() {
    this.userBalance;
  }
}
