let button = document.getElementById('exe');
button.addEventListener('click', function() {
    let div = document.getElementById('result');
    while(div.lastChild){
        div.removeChild(div.lastChild);
    }

    let fizzNum= parseInt(document.getElementById('fizz').value);
    let buzzNum = parseInt(document.getElementById('buzz').value);

    if (Number.isInteger(fizzNum) === false || Number.isInteger(buzzNum) === false) {
        let warn = document.createElement('p');
        warn.innerText = '整数値を入力して下さい';
        document.getElementById('result').appendChild(warn);
        return;
    }
    
    let resultNum = 0;
    if (fizzNum <= buzzNum) {
        resultNum = fizzNum;
    } else {
        resultNum = buzzNum;
    }
    while (resultNum < 100) {
        let p = document.createElement('p');
        if (resultNum % fizzNum === 0 && resultNum % buzzNum === 0) {
            p.innerText = 'FizzBuzz ' + resultNum;
        } else if (resultNum % fizzNum === 0) {
            p.innerText = 'Fizz ' + resultNum;
        } else if (resultNum % buzzNum === 0) {
            p.innerText = 'Buzz ' + resultNum;
        }
        div.appendChild(p);
        resultNum++;
    }
});