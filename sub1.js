const number1 = 3;
const number2 = 5;
const number3 = number1 * number2;
const maxNum = 100;
let fizz = number1;
let buzz = number2;
let fizzbuzz = number3;
let i = 1;
let j = 1;
let k = 1; 

while(i < maxNum){
    if(fizz < buzz){
        console.log("Fizz " + fizz);
        i += 1;
        fizz = number1 * i;
    }else if(buzz < fizz){
        console.log("Bazz " + buzz);
        j += 1;
        buzz = number2 * j;
    }else if(buzz === fizzbuzz && fizz === fizzbuzz){
        console.log("FizzBuzz " + fizzbuzz)
        i += 1;
        j += 1;
        k += 1;
        fizz = number1 * i;
        buzz = number2 * j;
        fizzbuzz = number3 * k;
    }
}


