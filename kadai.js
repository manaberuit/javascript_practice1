'use strict';

{

  //idがfizzInput,buzzInputのInput要素を取得
  let fizzInput = document.getElementById('fizzInput');
  let buzzInput = document.getElementById('buzzInput');



  //ボタンの要素を取得
  let btn = document.querySelector('button');

  // pの要素を取得
  let elem = document.querySelector('.output p');

  //実行キーを押す
  btn.addEventListener('click', () => {

    // 取得したinput要素の入力値を取得。
    let fizzInputValue = fizzInput.value;
    let buzzInputValue = buzzInput.value;



    if (isNaN(fizzInputValue) || isNaN(buzzInputValue)) {
      elem.innerText = '数値を入力'
    } else {
      let i = 1;
      fizzInputValue = fizzInputValue * i;
      buzzInputValue = buzzInputValue * i;
      while (fizzInputValue < 100 && buzzInputValue < 100);
      i++;
      elem.innerText = `fizz： ${fizzInputValue}\n
      buzz： ${buzzInputValue}`;
    }


  });



  // use strictの終わり
}
