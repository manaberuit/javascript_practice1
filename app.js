document.getElementById('js-submit').addEventListener('click', function(e) {
  
  e.preventDefault();

  // ユーザー入力値を取得
  var fizzNum = Number(document.getElementById('js-input-fizz').value);
  var buzzNum = Number(document.getElementById('js-input-buzz').value);

  // 結果表示エリアのDOMを取得
  var resultArea = document.getElementById('js-result');

  // 表示する数字の最大値を指定
  var MAX = 100;

  // 出力処理の開始前に、結果表示エリアを空にする
  resultArea.innerHTML = '';

  // エラーメッセージ
  var errMsg1 = '<p>整数値を入力してください。</p>';
  var errMsg2 = '<p>1以上で入力してください。</p>';
  var errMsg3 = '<p>' + MAX + '以下で入力してください。</p>';


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
  if(fizzNum > MAX || buzzNum > MAX) {
    resultArea.insertAdjacentHTML('afterbegin', errMsg3);
    return;
  }


  // 挿入するHTMLを生成する
  var html = '';
  for(var i = 1; i <= MAX; i++) {

    if(i % fizzNum === 0 && i % buzzNum === 0) {
      html += 'FizzBuzz ' + i + '<br>';

    } else if(i % fizzNum === 0) {
      html += 'Fizz ' + i + '<br>';

    } else if(i % buzzNum === 0) {
      html += 'Buzz ' + i + '<br>';
    }
  }

  resultArea.insertAdjacentHTML('afterbegin', html);
});