"use strict";
// ページロード時イベントリスナーを登録
document.addEventListener(
  "DOMContentLoaded",
  function() {
    // ボタン(btn)クリック時に実行されるイベントリスナーを登録
    document.getElementById("btn").addEventListener(
      "click",
      function() {
        let fizzNum = Number(document.getElementById("fizz").value);
        let buzzNum = Number(document.getElementById("buzz").value);
        let result;
        // 0以上の整数のみの正規表現
        var pattern = /^([1-9]\d*|0)$/;

        if (!pattern.test(fizzNum)) {
          // fizzNum入力値バリデーション
          // 0以上の整数のみ許容する
          result = "<a>【出力】</a><br>";
          result += "<a>整数値を入力してください</a>";
        } else if (!pattern.test(buzzNum)) {
          // buzzNum入力値バリデーション
          // 0以上の整数のみ許容する
          result = "<a>【出力】</a><br>";
          result += "<a>整数値を入力してください</a>";
        } else {
          //FizzBuzz問題の出力結果を作成
          result = "<a>【出力】</a><br>";
          for (let i = 1; i <= 100; i++) {
            if (i % fizzNum === 0 && i % buzzNum === 0) {
              result += "<a>" + "FizzBuzz" + " " + i.toString() + "</a><br>";
            } else if (i % fizzNum === 0) {
              result += "<a>" + "Fizz" + " " + i.toString() + "</a><br>";
            } else if (i % buzzNum === 0) {
              result += "<a>" + "Buzz" + " " + i.toString() + "</a><br>";
            }
          }
        }
        document.getElementById("result").innerHTML = result;
      },
      false
    );
  },
  false
);
