'use strict';

{
    document.getElementById("btn").addEventListener("click", function(){
        // HTMLから入力された値を取得する
        const FIZZ = Number(document.getElementById("fizz").value);
        const BUZZ = Number(document.getElementById("buzz").value);
        // バリデーション用変定数。0以上の整数のみ通す。
        const NUMERICAL_CHECK = /^([1-9]\d*|0)$/;
        // メッセージ用変数。
        let Output_Result = "";

         // バリデーション用変数の頭に！をつけて条件がそろえばfalseを返しFizzBuzzの処理を開始する。
        if (!NUMERICAL_CHECK.test(FIZZ) || !NUMERICAL_CHECK.test(BUZZ)){
            Output_Result = "<p>整数値を入力してください</p>";
        } else {
            for (let i = 1; i < 100; i++){
                if (i % FIZZ === 0 && i % BUZZ === 0) {
                    Output_Result += "FizzBuzz " + i.toString() + "<br>";
                } else if (i % FIZZ === 0) {
                    Output_Result += "Fizz " + i.toString() + "<br>";
                } else if (i % BUZZ === 0 ){
                    Output_Result += "Buzz " + i.toString() + "<br>";
                }
            };
        };
        document.getElementById("output_result").innerHTML = Output_Result;
    });
}
