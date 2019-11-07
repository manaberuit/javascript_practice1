'usre strict';

// 要件定義
let number1 = document.getElementById('number1');
let numbar2 = document.getElementById('number2');
const action = document.getElementById('action');
const div = document.createElement('div')
const MAX_NUM = 100;


// resultの子要素の削除関数
function RemoveAll() {
  var result = document.getElementById('result');
  if (result.hasChildNodes()){
    for (var i=result.childNodes.length-1; i>=0; i--) {
      result.removeChild(result.childNodes[i]);
    }
  }
}

// クリックイベント
action.addEventListener('click',()=>{
  let ValuneText = parseFloat(number1.value) && parseFloat(number2.value);

//resultの子要素の削除
  RemoveAll();

// 数値かどうか判定
  if(Number.isInteger(ValuneText)　===　true){

    //繰り返し処理
    for(let i = 1; i < MAX_NUM; i++){

      //fizzbuzz判定
      if(i % number1.value ===0 & i %number2.value === 0 ){
        const div = document.createElement('div');
        result.appendChild(div);
        div.textContent = 'FizzBuzz '+ i;
        
      }else if(i % number1.value === 0){
        const div = document.createElement('div');
        result.appendChild(div);
        div.textContent = 'Fizz '+ i;

      }else if(i % number2.value === 0 ){
        const div = document.createElement('div');
        result.appendChild(div);
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
