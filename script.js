'use strict'


// **********************
// よろしくお願いします
// ********************** 

const FizzBuzz = () => {
    document.getElementById('change').innerHTML = '';
    let num1 = document.getElementById('fizzNum').value;
    let num2 = document.getElementById('buzzNum').value;
    let intNum1 = parseInt(num1);
    let intNum2 = parseInt(num2);
    
    if (isNaN(intNum1) || isNaN(intNum2)) {
        document.getElementById('change').innerHTML ='整数値を入力してください';
    }else {
        for (let i = 1; i <= 100; i++) {
            if (i % intNum1 === 0 && i % intNum2 === 0) {
               document.getElementById('change').innerHTML += 'FizzBuzz' + i +'<br>';  
            } else if (i % intNum1 === 0){
                document.getElementById('change').innerHTML += 'fizz' + i +'<br>';
            } else if (i % intNum2 === 0) {
                document.getElementById('change').innerHTML += 'buzz' + i + '<br>';
            } 
        }   
    } 
    }





