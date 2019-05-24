{
  //submitクリック時にイベントを発生させる
  document.getElementById('submit').addEventListener( 'click',() =>{
    //フォームの中身を受け取る
    const fizz = document.getElementById('fizz').value;
    const buzz = document.getElementById('buzz').value;
    //数字のみかどうかチェック。非負整数のみ。
    const fizzCheck = (/^(0|[1-9][0-9]*)$/).test(fizz);
    const buzzCheck = (/^(0|[1-9][0-9]*)$/).test(buzz);
    //数字以外が含まれていたら検出してエラーメッセージを表示
    if (!(fizzCheck && buzzCheck)){
      document.querySelector("p.message").textContent = "整数値を入力してください"
    //エラーがなければFizzBuzzを実行
    }else{
      //出力する文字の初期化
      let textFizzBuzz = '';
      //1-100の数字でfizzbuzzをして一致したらテキストを追加する
      for(let i = 1; i <= 100; i++){
        if (i % fizz === 0 && i % buzz === 0){
          textFizzBuzz += 'FizzBuzz ' + i + '<br>';
        }else if(i % fizz === 0){
          textFizzBuzz += 'Fizz ' + i + '<br>';
        }else if(i % buzz === 0){
          textFizzBuzz += 'Buzz ' + i + '<br>';
        }
    }
      //出力エリアの初期化
      document.querySelector('p.message').textContent = '';
      //結果出力
      document.querySelector('p.message').insertAdjacentHTML('afterbegin', textFizzBuzz);
    }
  });
}
