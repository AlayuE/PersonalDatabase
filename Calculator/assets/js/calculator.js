let number1;
let number2;

do{
    var input=prompt(`Select your operation:
            1.Addition 
            2.Subtraction 
            3.Multiplication
            4.Division
            5.Maximum
            6.Minimum
            7.Average
            8.Square
            9.Modulus
            10.Factorial
            11.Exit`);


// matching the user selection with operions
if(parseInt(input)==1){

     // IIFE
     (function (){

        let input = new Array();
        let numberoffInput=prompt("Enter the amount of your numbers");
        
        for (let i = 0; i < parseInt(numberoffInput); i++) {
            input[i] = prompt("Enter your numbers ");
        } 
        function add( ){
            var sum=0;
            for(let i=0; i<input.length; i++){
                sum = sum +parseInt(input[i]);
                
            }
            return sum;
        }
        alert("Answer:" + " "+ add());
    })();

}else if(parseInt(input)==2){

    // IIFE
    (function (){

    num1=prompt("Enter first number:");
    num2=prompt("Enter second number:");
    alert("Answer:" + " " +(parseInt(num1)-parseInt(num2)));
    }

)();

}else if(parseInt(input)==3){

     // IIFE
     (function (){

        let input = new Array();
        let numberoffInput=prompt("Enter the amount of your numbers");
        
        for (let i = 0; i < parseInt(numberoffInput); i++) {
            input[i] = prompt("Enter your numbers ");
        }
        
        function mul( ){
            var multi=1;
            for(let i=0; i<input.length; i++){
                multi = multi *parseInt(input[i]);
                
            }
            return multi;
        }
        alert("Answer:" + " "+ mul());
    })();

}else if(parseInt(input)==4){

    // IIFE
    (function (number1,number2){

        num1=prompt("Enter first number:");
        num2=prompt("Enter second number:");

            if(parseInt(num2)==0){
                alert("Denominator can't be zero");
            }else{
                alert("Answer:" + " " +(parseInt(num1)/parseInt(num2)));
            }

    })();

}else if(parseInt(input)==5){
    //changing finding maximum of two numbers to maximum of an array
    
    // IIFE
    (function (){
        let input = new Array();
        let numberoffInput=prompt("Enter the amount of your numbers");
    
    for (let i = 0; i < parseInt(numberoffInput); i++) {
        input[i] = prompt("Enter your numbers ");
    }
    var maximum = input[0];
    for (let i = 1; i < input.length; ++i) {
        if (input[i] > maximum) {
            maximum = input[i];
    }
 }

    alert("Answer:" + " " + maximum);

})();


}else if(parseInt(input)==6){

    //changing finding minimum of two numbers to minimum of an array
    
    // IIFE
    (function (){
        let input = new Array();
        let numberoffInput=prompt("Enter the amount of your numbers");
    
    for (let i = 0; i < parseInt(numberoffInput); i++) {
        input[i] = prompt("Enter your numbers ");
    }
    var minimum = input[0];
    for (let i = 1; i < input.length; ++i) {
        if (input[i] < minimum) {
            minimum = input[i];
    }
 }

    alert("Answer:" + " " + minimum);

})();


}else if(parseInt(input)==7){
     //changing finding average of two numbers to average of an array
    
    // IIFE
    (function (){
        let input = new Array();
        let numberoffInput=prompt("Enter the amount of your numbers");
    
    for (let i = 0; i < parseInt(numberoffInput); i++) {
        input[i] = parseInt(prompt("Enter your numbers "));
    }
    
    var total = 0;
    for(var i = 0; i < input.length; i++) {
        total += input[i];
    }
    var average = total / input.length;

    alert("Answer:" + " " + average);

})();


}else if(parseInt(input)==8){
    // IIFE
    (function (){

        num1=prompt("Enter number:");
        alert("Answer:" + " " +(parseInt(num1)*parseInt(num1)));
        }
    
    )();

}else if(parseInt(input)==9){
     // IIFE
     (function (){

        num1=prompt("Enter first number:");
        num2=prompt("Enter second number:");
        alert("Answer:" + " " +(parseInt(num1)% parseInt(num2)));
        }
    
    )();

}else if(parseInt(input)==10){

    // IIFE
    (function (){

        num1=prompt("Enter number:");
        function Factorial(number1){
            factorial=1;
            for (i=1;i<(number1+1);i++){
                factorial *= i;
            }
            return factorial;
        }
        alert("Answer:" + " " + Factorial(parseInt(num1)));
    })();


}else{
    alert("Thanks for using this app");
}


}while(input != 11)
