'usre strict';

// 要件定義
let fizzNum = document.getElementById('number1');
let buzzNum = document.getElementById('number2');
const action = document.getElementById('action');
const div = document.createElement('div')
var result = document.getElementById('result');
const MAX_NUM = 100;


// クリックイベント
action.addEventListener('click',()=>{
  const number1 = parseFloat(fizzNum.value);
  const number2 = parseFloat(buzzNum.value);

//resultの子要素の削除
  result.textContent = ""

// 数値かどうか判定
  if(Number.isInteger(number1) && Number.isInteger(number2)){

    //繰り返し処理
    for(let i = 1; i < MAX_NUM; i++){
      const div = document.createElement('div');
      result.appendChild(div);

      //fizzbuzz判定
      if(i % number1 ===0 & i %number2 === 0 ){
        div.textContent = 'FizzBuzz '+ i;
        
      }else if(i % number1 === 0){
        div.textContent = 'Fizz '+ i;

      }else if(i % number2 === 0 ){
        div.textContent = 'Buzz ' + i;
        }
      }

      // 数字以外
  }else{
    const div = document.createElement('div');
    result.appendChild(div);
    div.textContent = '整数値を入力してください';
   }

  })
