/**************Largest among Three:**************/

let num1 = prompt("Enter first number: ");
let num2 = prompt("Enter second number: ");
let num3 = prompt("Enter third number: ");


if(!isNaN(num1) && !isNaN(num2) && !isNaN(num3)){
    if((num1 >= num2) && (num1 >= num3)){
        document.write(`${num1} is a Largest Number`)
}
else if((num2 >= num1) && (num2 >= num3)){
    document.write(`${num2} is a Largest Number`)
}

else{
    document.write(`${num3} is a Largest Number`)
}
}
else{
    document.write("Invalid input. Please enter a valid number.");
}