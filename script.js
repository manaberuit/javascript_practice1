'use strikt'


// **********************
// よろしくお願いします
// ********************** 

const FizzBuzz = () => {
    document.getElementById('change').innerHTML = '';
    let number1 = document.getElementById('fizz').value;
    let number2 = document.getElementById('buzz').value;
    let result1 = parseInt(number1);
    let result2 = parseInt(number2);
    
    if (isNaN(result1) || isNaN(result2)) {
        document.getElementById('change').innerHTML ='整数値を入力してください';
    }else {
        for (let i = 1; i <= 100; i++) {
            if (i % result1 === 0 && i % result2 === 0) {
               document.getElementById('change').innerHTML += 'FizzBuzz' + i +'<br>';  
            } else if (i % result1 === 0){
                document.getElementById('change').innerHTML += 'fizz' + i +'<br>';
            } else if (i % result2 === 0) {
                document.getElementById('change').innerHTML += 'buzz' + i + '<br>';
            } else {
                ;
            }
        }   
    } 
    }





