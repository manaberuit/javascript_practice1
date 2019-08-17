'use strict';

{

  //ボタンの要素を取得
  let btn = document.querySelector('button');

  // pの要素を取得
  let elem = document.querySelector('.output p');

  //fizzInput,buzzInputの要素を取得
  // let mathFizz = document.getElementById('fizzInput');
  // let mathBuzz = document.getElementById('buzzInput');

  //実行キーを押す
  btn.addEventListener('click', () => {

    // 取得したinput要素の入力値を取得。
    let fizzInputValue = parseInt(fizzInput.value);
    let buzzInputValue = parseInt(buzzInput.value);


    //もしtextboxで小数入力された場合、parseIntした整数を入力ボックスに書き換えたいのですが方法が分かりません。
    // mathFizz.textContent = fizzInputValue;
    // mathBuzz.textContent = buzzInputValue;


    // もし、全角数字を入力した場合、半角数字に変換した後、作業を続行したいのですが、
    // 半角数字への変換方法が分かりません。



    elem.textContent = '数値を入力';
    if (isNaN(fizzInputValue) || isNaN(buzzInputValue)) {
    } else if (fizzInputValue <= 0 || buzzInputValue <= 0) {
      elem.textContent = '';
    } else {
      let i = 0;
      let fizzResult = 0;
      let buzzResult = 0;

      while ( fizzResult <= 100 || buzzResult <= 100){
        i++;
        fizzResult = fizzInputValue * i;
        buzzResult = buzzInputValue * i;

        console.log(`fizz： ${fizzResult}`);
        console.log(`buzz： ${buzzResult}`);

        elem.textContent = document.write(`fizz： ${fizzResult}\n
        buzz： ${buzzResult}`);

      }
    }


  });



  // use strictの終わり
}
