'use strict'

const button = document.getElementById('execution');

button.addEventListener('click', function(){
    const Fizz = document.getElementById('Fizz').value;
    const Buzz = document.getElementById('Buzz').value;
    const result = document.getElementById('result');

    const check = /^[0-9]+$/;

    while(result.firstChild)
    result.removeChild(result.firstChild);

    if(check.test(Fizz) && check.test(Buzz) ){
        for(let num = 1; num < 100; num++ ){
            if(num % Fizz === 0 && num % Buzz === 0){
                let text = '<p>FizzBuzz  ' + num + '</p>';
                result.insertAdjacentHTML('beforeend', text);      
            } else if (num % Fizz  === 0){
                let text =  '<p>Fizz  ' + num + '</p>';
                result.insertAdjacentHTML('beforeend', text);    
            }else if (num % Buzz === 0){
                let text = '<p>Buzz  ' + num + '</p>';
                result.insertAdjacentHTML('beforeend', text);    
            }
        }
    }else {
        result.innerHTML = '<p>整数値を入力してください</p>';
     }
});