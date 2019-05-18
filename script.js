'use strict';

const btn = document.getElementById('btn');

btn.addEventListener("click", function(){
    // 各idを取得して、変数に代入する
    const fizz = document.getElementById('fizz').value;
    const buzz = document.getElementById('buzz').value;
    const result = document.getElementById('result'); 

    //数字が入力されているか、チェック用の変数
    const checknumber = /^[0-9]+$/;

    // resultの子要素削除
    while (result.firstChild) 
    result.removeChild(result.firstChild);

    //数字が入力されているかチェックする
if(checknumber.test(fizz) && checknumber.test(buzz)  ){
    for(var i = 1 ; i <= 100; i++){
        if(i % fizz === 0 && i % buzz === 0){
            var text = "<p>FizzBuzz "  + i + "</p>";
            result.insertAdjacentHTML('beforeend',text);
        }else if(i % fizz === 0 ){
            var text = "<p>Fizz " + i + "</p>";
            result.insertAdjacentHTML('beforeend',text);
        }else if(i % buzz === 0 ){
            var text = "<p>Buzz " + i + "</p>";
            result.insertAdjacentHTML('beforeend',text);
        }
        
    
    }

//数字以外が入力された場合エラーを吐く
}else{
    result.innerHTML="<p>整数値を入力してください。</p>";
}

}, false);



