document.querySelector('.js-submit').addEventListener('click', function(e) {

  e.preventDefault();

  // ユーザー入力値を取得
  var fizzNum = Number(document.querySelector('.js-input-fizz').value);
  var buzzNum = Number(document.querySelector('.js-input-buzz').value);

  // 結果表示エリアのDOMを取得
  var resultArea = document.querySelector('.js-result');

  // 表示する数字の最大値を指定
  var max = 100;

  // 出力処理の開始前に、結果表示エリアを空にする
  resultArea.innerHTML = '';

  // エラーメッセージ
  var errMsg1 = '<p>整数値を入力してください。</p>';
  var errMsg2 = '<p>1以上で入力してください。</p>';
  var errMsg3 = '<p>' + max + '以下で入力してください。</p>';


  // 整数値のバリデーション
  if(!Number.isInteger(fizzNum) || !Number.isInteger(buzzNum)) {
    resultArea.insertAdjacentHTML('afterbegin', errMsg1);
    return;
  }

  // 最小値のバリデーション
  if(fizzNum <= 0 || buzzNum <= 0) {
    resultArea.insertAdjacentHTML('afterbegin', errMsg2);
    return;
  }

  // 最大値のバリデーション
  if(fizzNum > max || buzzNum > max) {
    resultArea.insertAdjacentHTML('afterbegin', errMsg3);
    return;    
  }


  // 挿入するHTMLを生成する
  var html = '';
  for(var i = 1; i <= max; i++) {

    if(i % fizzNum === 0 && i % buzzNum === 0) {
      html += 'FizzBuzz ' + i + '<br>';
      continue;
    }

    if(i % fizzNum === 0) {
      html += 'Fizz ' + i + '<br>';
      continue; 
    }

    if(i % buzzNum === 0) {
      html += 'Buzz ' + i + '<br>';
      continue; 
    }
  }

  resultArea.insertAdjacentHTML('afterbegin', html);
});