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

        for (let i = 1; i <= 100; i++) {
          if (i % fizz === 0 && i % buzz === 0) {
            console.log(i + "fizzbuzz");
          } else if (i % fizz === 0) {
            console.log(i + "fizz");
          } else if (i % buzz === 0) {
            console.log(i + "buzz");
          } else {
            console.log(i + "else");
          }
        }
      },
      false
    );
  },
  false
);
