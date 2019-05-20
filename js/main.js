'use strict';
{
  // 変数宣言
  const fizz = document.getElementById('fizz');
  const buzz = document.getElementById('buzz');
  const exec = document.getElementById('exec'); //実行ボタン
  const result = document.getElementById('result'); //エラーメッセージ


  // ■■■ クリックイベント start ■■■
  exec.addEventListener('click', () => {
    // 表示項目のクリア処理
    while(){
      
    };

    // 整数判別式
    if(Number.isInteger(parseInt(fizz.value)) === false  || Number.isInteger(parseInt(buzz.value)) === false ){
      return result.textContent = "整数を入力してください";
    };

    // 変数宣言
    const calculation =[];  // 計算結果格納配列
    const fizzFixed = parseInt(fizz.value,10);
    const buzzFixed = parseInt(buzz.value,10);

    let fizzCalc = fizzFixed;  // fizz計算結果格納変数
    let buzzCalc = buzzFixed;  // buzz計算結果格納変数

    // ２倍にする計算コード
    while( fizzCalc < 100 || buzzCalc < 100 ){
      // fizzを計算結果配列に追加するコード
      if( fizzCalc === buzzCalc ){
        calculation.push("FizzBuzz " + fizzCalc);
        fizzCalc += fizzFixed;
        buzzCalc += buzzFixed;
      } else if ( fizzCalc < buzzCalc ) {
        calculation.push("Fizz " + fizzCalc);
        fizzCalc += fizzFixed;
      } else if ( fizzCalc > buzzCalc ) {
        calculation.push("Buzz " + buzzCalc);
        buzzCalc += buzzFixed;
      }else {
        console.log("エラーが発生しました！");
      };
    }

    // 計算結果を持つ配列を要素に追加して表示
    calculation.forEach((calc) => {
      console.log(`配列の要素：${calc}`);

      const p = document.createElement('p');  // 要素追加コード
      p.textContent = calc;
      document.body.appendChild(p);
    });

  });
  // ■■■ クリックイベント end ■■■

}
