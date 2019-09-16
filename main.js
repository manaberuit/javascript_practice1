'use strict';
// ページロード時イベントリスナーを登録
document.addEventListener('DOMContentLoaded', function () {
  // ボタン(btn)クリック時に実行されるイベントリスナーを登録
  document.getElementById('btn').addEventListener('click', function () {
    const fizzNum = Number(document.getElementById('fizz').value);
    const buzzNum = Number(document.getElementById('buzz').value);
    let result = '';
    // 0以上の整数のみの正規表現
    let pattern = /^([1-9]\d*|0)$/;

    // fizzNum入力値バリデーション
    // 0以上の整数のみ許容する
    if (!pattern.test(fizzNum)) {
      result = '【出力】<br>';
      result += '整数値を入力してください';
      document.getElementById('result').innerHTML = result;
      return;
    }

    // buzzNum入力値バリデーション
    // 0以上の整数のみ許容する
    if (!pattern.test(buzzNum)) {
      result = '【出力】<br>';
      result += '整数値を入力してください';
      document.getElementById('result').innerHTML = result;
      return;
    }

    //FizzBuzz問題の出力結果を作成
    result = '【出力】<br>';
    for (let i = 1; i <= 100; i++) {
      if (i % fizzNum === 0 && i % buzzNum === 0) {
        result += 'FizzBuzz' + ' ' + i.toString() + '<br>';
      } else if (i % fizzNum === 0) {
        result += 'Fizz' + ' ' + i.toString() + '<br>';
      } else if (i % buzzNum === 0) {
        result += 'Buzz' + ' ' + i.toString() + '<br>';
      }
    }
    document.getElementById('result').innerHTML = result;
  });
});
