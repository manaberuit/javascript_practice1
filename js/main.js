 (function(){
    'use strict';
    const fizz = document.getElementById('fizz');
    const buzz = document.getElementById('buzz');
    const submit = document.getElementById('submit');
    const result = document.getElementById('result');

    submit.addEventListener('click',()=>{
        const fizzValue = parseInt(fizz.value, 10);
        const buzzValue = parseInt(buzz.value, 10);

        // const a = document.querySelectorAll('p');

        // if(a){
        //     document.body.removeChild(a);
        // }

        function isInt(value) {
            return typeof value === "number";
        }

        const notFizzNan = isNaN(fizzValue);
        const notBuzzNan = isNaN(buzzValue);

        if( isInt(fizzValue) && isInt(buzzValue) && notFizzNan === false && notBuzzNan === false){

            console.log('test1');
            for(let i = 1; i < 100; i++){
                const p = document.createElement('p');
                p.classList.add('add-txt');
                if(i % fizzValue === 0 && i % buzzValue === 0 ){
                    document.body.appendChild(p);
                    p.textContent = `fizzbuzz${i}`;
                }else if(i % fizzValue === 0){
                    document.body.appendChild(p);
                    p.textContent = `fizz${i}`;
                }else if(i % buzzValue === 0){
                    document.body.appendChild(p);
                    p.textContent = `buzz${i}`;
                }
            }

        }else{
            console.log('test');
            const alert = document.createElement(`p`);
            alert.classList.add('add-txt');
            document.body.appendChild(alert);
            alert.textContent = "整数値のみ入力可能です。";
        }
    });
  }());