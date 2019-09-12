"use strict";
// ページロード時イベントリスナーを登録
document.addEventListener(
  "DOMContentLoaded",
  function() {
    // ボタン(btn)クリック時に実行されるイベントリスナーを登録
    document.getElementById("btn").addEventListener(
      "click",
      function() {
        let fizz = Number(document.getElementById("fizz").value);
        let buzz = Number(document.getElementById("buzz").value);
        let result;

        result = "<a>【出力】</a><br>";

        for (let i = 1; i <= 100; i++) {
          if (i % fizz === 0 && i % buzz === 0) {
            result += "<a>" + "FizzBuzz" + " " + i.toString() + "</a><br>";
          } else if (i % fizz === 0) {
            result += "<a>" + "Fizz" + " " + i.toString() + "</a><br>";
          } else if (i % buzz === 0) {
            result += "<a>" + "Buzz" + " " + i.toString() + "</a><br>";
          } else {
          }
        }
        document.getElementById("result").innerHTML = result;
      },
      false
    );
  },
  false
);
