'use strict';
{
  // 変数宣言
  const fizz = document.getElementById('fizz');
  const buzz = document.getElementById('buzz');
  const exec = document.getElementById('exec'); //実行ボタン
  const result = document.getElementById('result'); //エラーメッセージ


  // ■■■ クリックイベント start ■■■
  exec.addEventListener('click', () => {

    const calculation =[];  // 計算結果格納変数
    // const p = document.createElement('p');  // 要素追加コード
    // p.textContent = '';

    // 整数判別式
    if(Number.isInteger(parseInt(fizz.value)) === false  || Number.isInteger(parseInt(buzz.value)) === false ){
      return result.textContent = "整数を入力してください";
    };

    // ２倍にする計算コード
    for(let i = 1 ; fizz.value * i < 100 && buzz.value * i < 100 ; i++ ){
      // fizzを計算結果配列に追加するコード
      if((fizz.value * i) % buzz.value === 0 ){
        if( fizz.value > buzz.value ){
          calculation.push("FizzBuzz " + fizz.value * i);
        };
      } else{
        calculation.push("Fizz " + fizz.value * i);
      };

      // buzzを計算結果配列に追加するコード
      if( (buzz.value * i) % fizz.value === 0 ){
        if ( buzz.value > fizz.value ) {
          calculation.push("FizzBuzz " + buzz.value * i);
        };
      }  else{
        calculation.push("Buzz " + buzz.value * i);
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
