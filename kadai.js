'use strict'; {

  //ボタンの要素を取得
  const btn = document.querySelector('button');

  // 結果表示の要素を取得
  const output = document.getElementById('output');

  // 結果表示のh3の要素を取得
  const message = document.getElementById('message');

  // 結果表示のpの要素を取得
  const elem = document.getElementById('elem');

  //実行キーを押す
  btn.addEventListener('click', () => {

    // 一度取得したクラスの削除
    // elem.textContent = '';
    while (elem.firstChild) {
      elem.removeChild(elem.firstChild);
    }

    // 取得したinput要素の入力値を取得。
    let fizzInputValue = parseFloat(fizzInput.value);
    let buzzInputValue = parseFloat(buzzInput.value);


    if (!Number.isInteger(fizzInputValue) || !Number.isInteger(buzzInputValue)) {
      message.textContent = '数値を入力';
    } else if (fizzInputValue <= 0 || buzzInputValue <= 0) {
      message.textContent = '';
    } else {
      message.textContent = '';
      for (let i = 1; i < 100; i++) {

        //pエレメントの作成
        let p = document.createElement('p');
        elem.appendChild(p);

        if (i % (fizzInputValue * buzzInputValue) === 0) {
          p.textContent = (`FizzBuzzの値： ${i}`);
        } else if (i % fizzInputValue === 0) {
          p.textContent = (`Fizzの値： ${i}`);
        } else if (i % buzzInputValue === 0) {
          p.textContent = (`Buzzの値： ${i}`);
        }
      }
    }

  });



  // use strictの終わり
}
