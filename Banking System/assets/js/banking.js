var accountNumber;
var balance;
var user;
    
function openAccount() {

    accountNumber = prompt("Enter Account No: ");
    user=prompt("Enter Name: ");
    balance =parseInt(prompt("Enter Balance: "));

}

function showAccount() {

    alert("Your Account Number:" +" "+  accountNumber +"\nYour User Name:" +" "+  user + "\nYour Current Balance:" +" "+ balance);

}
function deposit() {

    var amount =parseInt(prompt("Enter Amount U Want to Deposit : "));
    balance = balance + amount;

}
function withdrawal() {

    var amount = prompt("Enter Amount U Want to withdraw : ");
    if (balance >= amount) {
        balance = balance - amount;
    } else {
        alert("Less Balance..Transaction Failed..");
    }
}

openAccount()

    