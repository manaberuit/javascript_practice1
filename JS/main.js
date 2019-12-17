(function() {
  'use strict';

  const btn = document.getElementById('btn');
  const output = document.getElementById('output');
  
  btn.addEventListener('click', function(){
    const Fizz = document.getElementById('Fizz').value;
    const Buzz = document.getElementById('Buzz').value;
    let flag = 0;

    //0だと動作不実施
    if(Fizz == 0 || Buzz == 0 ){
      return;
    };
    
    //整数値チェック
    if(Number.isInteger(parseInt(Fizz)) === false  || Number.isInteger(parseInt(Buzz)) === false ){
      return output.textContent = "整数値を入力してください";
    };
    
    //計算し、配列へ格納
    let i = 0;
    let results = [];    
    for(i =0; Fizz*i <= 100 || Buzz*i <= 100; i++){
      if(Fizz*i <= 100){
        results.push({name: "Fizz", data: Fizz * i});
      }
      if(Buzz*i <= 100){
        results.push({name: "Buzz", data: Buzz * i});
      }
    }

    // 昇順ソート(小=>大)
    results.sort(function(a,b){
      if(a.data < b.data) return -1;
      if(a.data > b.data) return 1;
      return 0;
    });

    //重複しているBuzzをFizzBuzzに変換し、重複しているFizzの配列を消す
    for(i =0; i <= results.length-2; i++){
        if(results[i].data === results[i+1].data){
            results[i+1].name = "FizzBuzz";
            delete results[i];
        };
    }
    
    //空白を詰める
    results = results.filter(v => v);
    
    //初期表示の文字を削除
    output.textContent='';
    
    //画面に表示
    for(i =1; i <= results.length-1; i++){
      const li = document.createElement('li');
      let text = document.createTextNode(results[i].name +" " +results[i].data);
      li.appendChild(text);
      output.appendChild(li);
    }
  });
})();
