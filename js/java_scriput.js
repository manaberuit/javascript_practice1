'use strict';

{
    document.getElementById("btn").addEventListener("click", function(){
        // HTMLから入力された値を取得する
        let fizz = Number(document.getElementById("fizz").value);
        let buzz = Number(document.getElementById("buzz").value);
        // バリデーション用変数。0以上の整数のみ通す。
        let numerical_check = /^([1-9]\d*|0)$/;
        // メッセージ用変数。
        let output_result = "";

         // バリデーション用変数の頭に！をつけて条件がそろえばfalseを返しFizzBuzzの処理を開始する。
        if (!numerical_check.test(fizz) || !numerical_check.test(buzz)){
            output_result = "<p>整数値を入力してください</p>";
        } else {
            for (let i = 1; i < 100; i++){
                if (i % fizz === 0 && i % buzz === 0) {
                    output_result += "<a>FizzBuzz " + i.toString() + "</a><br>";
                } else if (i % fizz === 0) {
                    output_result += "<a>Fizz " + i.toString() + "</a><br>";
                } else if (i % buzz === 0 ){
                    output_result += "<a>Buzz " + i.toString() + "</a><br>";
                }
            };
        };
        document.getElementById("output_result").innerHTML = output_result;
    });
}
