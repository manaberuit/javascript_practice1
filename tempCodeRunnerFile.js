let fizz = 3;
let buzz = 5;
let fizzbazz = fizz * buzz;
let i = 1;
let j = 1;
let k = 1;

while(fizzbazz >200){
    if(fizz < buzz && fizz < fizzbazz){
        console.log("Fizz " + fizz);
        i += 1;
        fizz = fizz * i;
    }else if(buzz < fizz && buzz < fizzbazz){
        console.log("Bazz " + fizz);
        j += 1;
        fizz = fizz * j;
    }else if(buzz == fizzbazz && fizz ==fizzbazz){
        console.log("FizzBazz " + fizzbazz)
        i += 1;
        j += 1;
    }
}

