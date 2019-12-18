'use strict'

const input = document.getElementById('input');
const log = document.getElementById('output');

input.addEventListener('click', () => {
    const fizz = document.getElementById('id_fizz').value;
    const buzz = document.getElementById('id_buzz').value;
    const fizzNum = parseFloat(fizz);
    const buzzNum = parseFloat(buzz);
    
    log.innerHTML = "";

        for( let i = 1; i < 100 ; i++){
            if ( !Math.floor(fizzNum) || !Math.floor(buzzNum) ) {
                log.innerHTML = "整数値を入力して下さい";
            } else if ( i % fizz === 0 && i % buzz ===0 ) {
                log.innerHTML += `FizzBuzz: ${i}` + "<br>";
            } else if ( i % buzz === 0 ){
                log.innerHTML += `Buzz: ${i}` + "<br>";
            } else if ( i % fizz === 0 ){
                log.innerHTML += `Fizz: ${i}` + "<br>";
            } else {
                console.log("完璧！");//遊び心です
            }
        }
} ,false);


/*

const del = document.getElementById('opt');
del.remove(log) //削除用

*/