  'use strict';

   {
      const btn = document.getElementById('btn');
      const output = document.getElementById('output');
      btn.addEventListener('click', () => {
        const fizznum = document.getElementById('fizznum').value;
        const buzznum = document.getElementById('buzznum').value;
        const fnum = parseInt(fizznum);
        const bnum = parseInt(buzznum);
        output.innerText = "整数値を入力してください";

        if(fnum >= 1 && fnum <= 100 && bnum >= 1 && bnum <= 100){
          output.innerText = "";
        for(let i = 1; i < 101; i++){
          if(i % fnum === 0 && i % bnum === 0){
            output.innerText += "FizzBuzz" + " " + i + "\n";
          }else if(i % fnum === 0){
            output.innerText += "Fizz" + " " + i + "\n";
          }else if(i % bnum === 0){
            output.innerText += "Buzz" + " " + i + "\n";
          }
        }
      }else{
        output.innerText = "整数値を入力してください";
      }
      });
    }
