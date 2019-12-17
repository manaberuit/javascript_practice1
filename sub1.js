const number1 = 3;
const number2 = 5;
const maxNum = 100;
let fizz = number1;
let buzz = number2;

while(fizz < maxNum || buzz < maxNum){
    if(fizz < buzz){
        console.log("Fizz " + fizz);
        fizz += number1;
    }else if(buzz < fizz){
        console.log("Buzz " + buzz);
        buzz += number2;
    }else if(fizz === buzz){
        console.log("FizzBuzz " + fizz)
        fizz += number1;
        buzz += number2;
    }
}