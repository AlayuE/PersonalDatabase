// Declare variable to store values
var accountNumber1;
var balance1;
var user1;

var accountNumber2;
var balance2;
var user2;

var array=[accountNumber1,accountNumber2];

//this method to find an account number
function find(inputAcount) {
    if (accountNumber ===inputAcount) {
        return true;
    }
    return false;
}

    //This method to open an account
    (function () {
        alert("This app developed only for two users:")

        accountNumber1 = prompt("Enter Account Number 1: ");
        user1=prompt("Enter Name : ");
        balance1 =parseInt(prompt("Enter Balance: "));
    
        accountNumber2 = prompt("Enter Account Number 2: ");
        user2=prompt("Enter Name: ");
        balance2 =parseInt(prompt("Enter Balance: "));
    
    })();
    
    

    //run a code until number 5 is not pressed and it terminates when number 5 is pressed
    do {
        var listItem=parseInt(prompt(`Your Choice :
        1.Display Account 
        2.Deposit
        3.Withdrawal
        4.Transfer
        5.Exit`));
        
            switch (listItem) {

                case 1:
                       
                    // IIFE
                    //This method to display account details
                    (function(account) {
                        var account=prompt("Enter account number you want to show:");
                        if(account==accountNumber1){
                            alert("*******************************************************\nYour User Name Is :" +" "+  user1 +"\n*******************************************************\nYour Account Number Is:" +" "+ accountNumber1  + "\n*******************************************************\nYour Current Balance is:" +" "+ balance1 +"\n*******************************************************");
                        }else if(account==accountNumber2){
                            alert("*******************************************************\nYour Usser Name Is:" +" "+  user2 +"\n*******************************************************\nYour Account Number Is:" +" "+  accountNumber2 + "\n*******************************************************\nYour Current Balance is:" +" "+ balance2 +"\n*******************************************************");
                        }else{
                            alert("No such account..Transaction Failed..");
                        }
                    
                    })();
                    break;

                case 2:
                    accountNumber = prompt("Enter Account No : ");
                    found = false;
                    for (var i = 0; i < array.length; i++) {
                        found = find(accountNumber);
                        if (found) {
                            
                        //This method to deposit money
                            (function () {
                                if(accountNumber==accountNumber1){
                                    var amount =parseInt(prompt("Enter amount of money you want to deposit : "));
                                    balance1 = balance1 + amount;
                                    alert("You Deposit" + " " + amount + " " + "secessfully!");
                            
                                }else if(accountNumber==accountNumber2){
                                    var amount =parseInt(prompt("Enter amount of money you want to deposit : "));
                                    balance2 = balance2 + amount;
                                    alert("You Deposit" + " " + amount + " " + "secessfully!");
                                }else{
                                    alert("No such account created.Transaction Doesnit Processed");
                                }
                            
                            })();
                            break;
                        }
                    }
                    if (!found) {
                        alert("Search Failed..Account Not Exist..");
                    }
                    break;

                case 3:
                    accountNumber = prompt("Enter Account No : ");
                    found = false;
                    for (var i = 0; i < array.length; i++) {
                        found = find(accountNumber);
                        if (found) {

                        //This method to withdraw money 
                         (function() {
                                if(accountNumber==accountNumber1){
                                    var amount = prompt("Enter amount of money you want to withdraw: ");
                                    if(amount>100000){
                                        alert("Transaction doesn't proccess secessfully! You request high amount of Money");
                                    }else if(amount<50){
                                        alert("Transaction doesn't proccess secessfully! You request low amount of Money");
                                    }else if (balance1 >= amount) {
                                        balance1 = balance1 - amount;
                                        alert("You Withdraw" + " " + amount + " " + "secessfully!");
                                    } else {
                                     alert("Transaction Doesnit Processed.");
                                    }
                                }else if(accountNumber==accountNumber2){
                                    var amount = prompt("Enter amount of money you want to withdraw: ");
                                    if (balance2 >= amount) {
                                        balance2 = balance2 - amount;
                                        alert("You Withdraw" + " " + amount + " " + "secessfully!");
                                    } else {
                                         alert("Less Balance.Transaction Doesnit Processed.");
                                    }
                            
                                }else{
                                    alert("No such account.Transaction Doesnit Processed.");
                                }
                            
                            })();

                            
                            break;
                        }
                    }
                    if (!found) {
                        alert("Search Failed..Account Not Exist..");
                    }
                    break;

                case 4:
                    accountNumber = prompt("Enter Sender Account No : ");
                    found = false;
                    for (var i = 0; i < array.length; i++) {
                        found = find(accountNumber);
                        if (found) {

                            //This method to transfer
                            (function (){
                                if( accountNumber==accountNumber1){
                                    var recieverAcount = prompt("Enter reciver account number : ");
                                    var amount = parseInt(prompt("Enter Amount You Want To Send : "));
                                if (balance1 >=amount) {
                                    balance1 = balance1 - amount;
                                    balance2=balance2 + amount;
                                    alert("You Transfere " + amount+" "+ "secessfully to Account number" +" "+recieverAcount)
                                } else {
                                    alert("Less Balance..Transaction Failed..");
                                }
                                }else if(accountNumber==accountNumber2){
                                    var recieverAcount =prompt("Enter reciver account number : ");
                                    var amount =parseInt(prompt("Enter Amount You Want To Send : "));
                                if (balance2 >=amount) {
                                    balance2 = balance2 - amount;
                                    balance1 =balance1 + amount;
                                    alert("You Transfere " + amount+" "+ "secessfully to Account Number" +" "+recieverAcount)
                                } else {
                                    alert("Less Balance..Transaction Failed..");
                                }
                                }
                                
                            
                            })();
                            break;
                        }
                    }
                    if (!found) {
                        alert("Search Failed..Account Not Exist..");
                    }
                    break;

                case 5:
                    alert("Thanks for using this app");
                    break;
            }
        }
        while (listItem != 5);


    