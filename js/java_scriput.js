'use strict';

{
    document.getElementById("btn").addEventListener("click", function(){
        // HTMLから入力された値を取得する
        const fizz = Number(document.getElementById("fizz").value);
        const buzz = Number(document.getElementById("buzz").value);
        // バリデーション用変定数。0以上の整数のみ通す。
        const Numerical_Check = /^([1-9]\d*|0)$/;
        // メッセージ用変数。
        let Output_Result = "";

         // バリデーション用変数の頭に！をつけて条件がそろえばfalseを返しFizzBuzzの処理を開始する。
        if (!Numerical_Check.test(fizz) || !Numerical_Check.test(buzz)){
            Output_Result = "<p>整数値を入力してください</p>";
        } else {
            for (let i = 1; i < 100; i++){
                if (i % fizz === 0 && i % buzz === 0) {
                    Output_Result += "FizzBuzz " + i.toString() + "<br>";
                } else if (i % fizz === 0) {
                    Output_Result += "Fizz " + i.toString() + "<br>";
                } else if (i % buzz === 0 ){
                    Output_Result += "Buzz " + i.toString() + "<br>";
                }
            };
        };
        document.getElementById("output_result").innerHTML = Output_Result;
    });
}
