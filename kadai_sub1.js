for(let number = 1; number <= 99; number++){
    if(number % (5*3) === 0){
        console.log(`fizzbuzz ${number}`);
    } else if (number % 5 === 0){
        console.log(`buzz ${number}`);
    } else if (number % 3 === 0){
        console.log(`fizz ${number}`);
    }
}