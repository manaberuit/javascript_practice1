  (function(){
    'use strict';

    const fizz = document.getElementById('fizz');
    const buzz = document.getElementById('buzz');
    const submit = document.getElementById('submit');
    const result = document.getElementById('result');

    const p = document.createElement('p');
   

    

    submit.addEventListener('click',()=>{
        const f = fizz.value;
        const b = buzz.value;

       for(let i = 1; i < 50; i++){

            if(i % f === 0 && i % b === 0 ){
                console.log('fizzbuzz');
            }else if(i % f === 0){
                console.log('fizz');
            }else if(i % b === 0){
                console.log('buzz');
            }else{
                console.log('fizz' + i * f);
                console.log('buzz' + i * b);
            }
        }

    });

  }());    