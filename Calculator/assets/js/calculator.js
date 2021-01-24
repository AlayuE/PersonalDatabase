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
