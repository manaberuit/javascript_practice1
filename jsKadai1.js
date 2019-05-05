//実行ボタンのクリックを認識する関数
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('click').addEventListener('click', FizzBuzz, false);
});

//FizzBuzz判定をする関数
function FizzBuzz() {
  const FizzNum = document.getElementById('FizzNum').value;
  const BuzzNum = document.getElementById('BuzzNum').value;
  const output = document.getElementById('output');
  output.innerText = '';　//前回結果をクリア
  if (isNaN(FizzNum * BuzzNum) || FizzNum * BuzzNum === 0) {　//入力値に文字や0が含まれていないかをチェック
    indicateBrowser("整数値を入力してください");
  } else {
    for (let i = 1; i < 100; i++) {
      if( i % FizzNum === 0 && i % BuzzNum === 0 ) {
        indicateBrowser(`FizzBuzz ${i}\n`);
      } else if ( i % FizzNum === 0 ) {
        indicateBrowser(`Fizz ${i}\n`);
      } else if ( i % BuzzNum === 0 ) {
        indicateBrowser(`Buzz ${i}\n`);
      }
    }
  }
}

//【出力】の下に結果を出力する関数
function indicateBrowser(text) {
  const newtext = document.createTextNode(text);
  output.appendChild(newtext);　//id:outputより下に出力
  output.appendChild(document.createElement('br'));　//改行用
}
