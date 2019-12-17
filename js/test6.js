'use strict'
//execution-button=実行ボタンとして
//idを　execution　=> exec-btn　
//変数名をbutton　=> exceBtnなどとする
//一目で分かる
const execBtn = document.getElementById('exec-btn');

execBtn.addEventListener('click', function(){
    const Fizz = document.getElementById('Fizz').value;
    const Buzz = document.getElementById('Buzz').value;
    const result = document.getElementById('result');

    //チェック用の正規表現　数字が入力されているか
    const check = /^[0-9]+$/;

    //resultの子要素
    while(result.firstChild)
    result.textContent = ''; 　//=>でもOK！より短く、イメージしやすい
    // result.removeChild(result.firstChild);

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