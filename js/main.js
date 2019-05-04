'use strict';
{
  // 変数宣言
  const calculation =[];  // 計算結果格納変数

  const fizz = document.getElementById('fizz');
  const buzz = document.getElementById('buzz');
  const zikko = document.getElementById('zikko'); //実行ボタン
  const result = document.getElementById('result'); //エラーメッセージ


  // 【メソッド】
  // 整数判別メソッド
  function isInteger(num) {
      return Math.round(num) === num;
  }


  // ■■■ クリックイベント start ■■■
  zikko.addEventListener('click', () => {

    // 整数判別式
    if(Number.isInteger(parseInt(fizz.value)) === false  || Number.isInteger(parseInt(buzz.value)) === false ){
      return result.textContent = "整数を入力してください";
    };

    // ２倍にする計算コード
    for(let i = 1 ; fizz.value * i < 100 && buzz.value * i < 100 ; i++ ){

      // if((fizz.value * i) === (buzz.value * i)){
      if((fizz.value * i) === 33){
        calculation.push("FizzBuzz " + fizz.value * i);
        console.log("来たよ");
        continue;
      };
      // 配列に追加するコード
      calculation.push("Fizz " + fizz.value * i);
      calculation.push("Buzz " + buzz.value * i);
    }

    // 計算結果を持つ配列を要素に追加して表示
    calculation.forEach((calc) => {
      console.log(`配列の要素：${calc}`);
      // p.textContent = `配列の要素：${calc}`;
      const p = document.createElement('p');  // 要素追加コード
      p.textContent = calc;
      document.body.appendChild(p);
    });

  });
  // ■■■ クリックイベント end ■■■

}
