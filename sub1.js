const number1 = 3;
const number2 = 5;
const number3 = number1 * number2;
let fizz = number1;
let buzz = number2;
let fizzbazz = number3;
let i = 1;
let j = 1;
let k = 1; 

while(i <50){
    if(fizz < buzz && fizz < fizzbazz){
        console.log("Fizz " + fizz);
        i += 1;
        fizz = number1 * i;
    }else if(buzz < fizz && buzz < fizzbazz){
        console.log("Bazz " + buzz);
        j += 1;
        buzz = number2 * j;
    }else if(buzz == fizzbazz && fizz == fizzbazz){
        console.log("FizzBazz " + fizzbazz)
        i += 1;
        j += 1;
        k += 1;
        fizz = number1 * i;
        buzz = number2 * j;
        fizzbazz = number3 * k;
    }
}


