(function() {
  'use strict';

  let btn = document.getElementById('btn')
  let output = document.getElementById('output')
  
  btn.addEventListener('click', function(){
    let Fizz = document.getElementById('Fizz').value;
    let Buzz = document.getElementById('Buzz').value;
    let flag = 0;
    // console.log(Fizz);
    // console.log(typeof Fizz);
    if(Fizz.match(/[^0-9]+/) || Buzz.match(/[^0-9]+/)){//なぜこれで動作するか不明
        flag = 1;
    }else{
    }
    // console.log('flag='+flag);
    if(flag == 1){
      document.form1.reset();//入力フォーマットリセット
      // window.alert('数値のみ入力してください'); // 入力漏れがあれば警告ダイアログを表示
      return false; // 送信を中止
    }else{
      let i = 0;
      let results1 = [];
      for(i =0; Fizz*i <= 100; i++){
        results1[i] = {name: "Fizz", data: Fizz * i};
      }
      for(i =0; Buzz*i <= 100; i++){
        results1.push({name: "Buzz", data: Buzz * i});
      }

      //昇順ソート(小=>大)
      results1.sort(function(a,b){
        if(a.data < b.data) return -1;
        if(a.data > b.data) return 1;
        return 0;
      });

      // console.log(results1);
      // console.log(results1.length);

      //重複しているBuzzをFizzBuzzに変換し、重複しているFizzの配列を消す
      for(i =0; i <= results1.length-2; i++){
          if(results1[i].data === results1[i+1].data){
              // console.log(results1[i]);
              // console.log(results1[i+1]);
              results1[i+1].name = "FizzBuzz";
              delete results1[i];
            }else{
                  }
        }
      // console.log(results1);
      results1 = results1.filter(v => v);//空白を詰める
      // console.log(results1);

      output.textContent='';//初期表示の文字を削除
      for(i =1; i <= results1.length-1; i++){
        let li = document.createElement('li');
        let text = document.createTextNode(results1[i].name +" " +results1[i].data);
        li.appendChild(text);
        output.appendChild(li);
      }
      console.log(results1);
    }
  });
})();
