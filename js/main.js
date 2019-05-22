{
  //submitクリック時にイベントを発生させる
  document.getElementById('submit').addEventListener( 'click',() =>{
    //フォームの中身を受け取る
    const fizz = document.getElementById("fizz").value;
    const buzz = document.getElementById("buzz").value;
    //数字のみかどうかチェック。非負整数のみ。
    const fizz_check = (/^(0|[1-9][0-9]*)$/).test(fizz);
    const buzz_check = (/^(0|[1-9][0-9]*)$/).test(buzz);

    //数字以外が含まれていたら検出してエラーメッセージを表示
    if (!(fizz_check && buzz_check)){
      document.querySelector("p.message").textContent = "整数値を入力してください"
    //エラーがなければFizzBuzzを実行
    }else{
      //出力する文字の初期化
      let text_fizz_buzz = "";
      //1-100の数字でfizzbuzzをして一致したらテキストを追加する
      for(let i = 1;i <= 100;i++){
        if (i % fizz === 0 && i%buzz === 0){
          text_fizz_buzz += "FizzBuzz "+i.toString(10)+"<br>";
        }else if(i % fizz === 0){
          text_fizz_buzz +="Fizz "+i.toString(10)+"<br>";
        }else if(i % buzz === 0){
          text_fizz_buzz +="Buzz "+i.toString(10)+"<br>";
        }
      }
      //出力エリアの初期化
      document.querySelector("p.message").textContent ="";
      //結果出力
      document.querySelector("p.message").insertAdjacentHTML('afterbegin', text_fizz_buzz);
    }
  });
}
