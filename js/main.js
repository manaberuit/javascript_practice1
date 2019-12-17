 (function(){
    'use strict';
    const fizz = document.getElementById('fizz');
    const buzz = document.getElementById('buzz');
    const submit = document.getElementById('submit');
    const result = document.getElementById('result');


    submit.addEventListener('click',()=>{
        const fizzValue = parseInt(fizz.value, 10);
        const buzzValue = parseInt(buzz.value, 10);       

        const FizzNan = isNaN(fizzValue);
        const BuzzNan = isNaN(buzzValue);

        result.textContent = "";

        if( FizzNan === false && BuzzNan === false){

            for(let i = 1; i < 100; i++){
                const p = document.createElement('p');
                p.classList.add('add-txt');
                if(i % fizzValue === 0 && i % buzzValue === 0 ){
                    result.appendChild(p);
                    p.textContent = `fizzbuzz${i}`;
                }else if(i % fizzValue === 0){
                    result.appendChild(p);
                    p.textContent = `fizz${i}`;
                }else if(i % buzzValue === 0){
                    result.appendChild(p);
                    p.textContent = `buzz${i}`;
                }
            }

        }else{
            console.log('test');
            const alert = document.createElement(`p`);
            alert.classList.add('add-txt');
            result.appendChild(alert);
            alert.textContent = "整数値のみ入力可能です。";
        }

    });
  }());