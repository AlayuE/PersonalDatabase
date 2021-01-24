let number1;
let number2;
let input=prompt("Select your operation:\n1.Addition\n2.Subtraction\n3.Multiplication\n4.Division\n5.Maximum\n6.Minimum\n7.Average\n8.Square\n9.Modulus\n10.Factorial");

// function defination

function Sub(number1,number2){
    return number1 - number2;
}

function div(number1,number2){
    return number1 / number2;
}
function Max(number1,number2){

    if(number1<number2){

        return number2;

    }else if(number1>number2){

        return number1;
    }else{
        alert("Both are equal");
    }
}

function Min(number1,number2){
   
    if(number1>number2){

        return number2;

    }else if(number1<number2){

        return number1;
    }else{
        alert("Both are equal");
    }
}

function Average(number1,number2){
    return (number1 + number2)/2;
}

function Square(number1){
    return number1 * number1;
}

function Modulus(number1,number2){
    return number1 % number2;
}

function Factorial(number1){
    factorial=1;
    for (i=1;i<(number1+1);i++){
        factorial *= i;
    }
    return factorial;
}

// matching the user selection with operions
if(parseInt(input)==1){

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

}else if(parseInt(input)==2){
     num1=prompt("Enter first number:");
     num2=prompt("Enter second number:");
    alert("Answer:" + " " + Sub(parseInt(num1),parseInt(num2)));

}else if(parseInt(input)==3){
    
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

}else if(parseInt(input)==4){
    num1=prompt("Enter first number:");
    num2=prompt("Enter second number:");
    if(parseInt(num2)==0){
        alert("Denominator can't be zero");
    }else{
        alert("Answer:" + " " + div(parseInt(num1),parseInt(num2)));
    }

}else if(parseInt(input)==5){
    num1=prompt("Enter first number:");
    num2=prompt("Enter second number:");
   alert("Answer:" + " " + Max(parseInt(num1),parseInt(num2)));

}else if(parseInt(input)==6){
    num1=prompt("Enter first number:");
    num2=prompt("Enter second number:");
   alert("Answer:" + " " + Min(parseInt(num1),parseInt(num2)));

}else if(parseInt(input)==7){
    num1=prompt("Enter first number:");
    num2=prompt("Enter second number:");
   alert("Answer:" + " " + Average(parseInt(num1),parseInt(num2)));

}else if(parseInt(input)==8){
    num1=prompt("Enter your number:");
   alert("Answer:" + " " + Square(parseInt(num1)));

}else if(parseInt(input)==9){
    num1=prompt("Enter first number:");
    num2=prompt("Enter second number:");
   alert("Answer:" + " " + Modulus(parseInt(num1),parseInt(num2)));

}else if(parseInt(input)==10){
    num1=prompt("Enter your number:");
   alert("Answer:" + " " + Factorial(parseInt(num1)));

}else{
    alert("Please enter the correct choice");
}

