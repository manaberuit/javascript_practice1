'use strict'; {

  //ボタンの要素を取得
  let btn = document.querySelector('button');

  // 結果表示の要素を取得
  let output = document.getElementById('output');

  // 結果表示のpの要素を取得
  let elem = document.getElementById('elem');

  //実行キーを押す
  btn.addEventListener('click', () => {

  // 一度取得したクラスの削除
    // let removeChilds = document.getElementsByClassName('pItem');
    // while (removeChilds.length) {
    //   removeChilds.item(0).remove();
    // }
    elem.textContent = '';

    // 取得したinput要素の入力値を取得。
    let fizzInputValue = parseFloat(fizzInput.value);
    let buzzInputValue = parseFloat(buzzInput.value);


    if (!Number.isInteger(fizzInputValue) || !Number.isInteger(buzzInputValue)) {
      elem.textContent = '数値を入力';
    } else if (fizzInputValue <= 0 || buzzInputValue <= 0) {
      elem.textContent = '';
    } else {
      elem.textContent = '';
      for (let i = 1; i < 100; i++) {
        if (i % (fizzInputValue * buzzInputValue) === 0) {
          let pItem = document.createElement('p');
          pItem.classList.add('pItem');
          pItem.textContent = (`FizzBuzzの値： ${i}`);
          output.appendChild(pItem);
        } else if (i % fizzInputValue === 0) {
          let pItem = document.createElement('p');
          pItem.classList.add('pItem');
          pItem.textContent = (`Fizzの値： ${i}`);
          output.appendChild(pItem);
        } else if (i % buzzInputValue === 0) {
          let pItem = document.createElement('p');
          pItem.classList.add('pItem');
          pItem.textContent = (`Buzzの値： ${i}`);
          output.appendChild(pItem);
        }
      }
    }

  });



  // use strictの終わり
}
