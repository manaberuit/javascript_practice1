  'use strict';

   {
      const btn = document.getElementById('btn');
      const output = document.getElementById('output');
      btn.addEventListener('click', () => {
        const fizznum = document.getElementById('fizznum').value;
        const buzznum = document.getElementById('buzznum').value;
        let fnum = parseInt(fizznum);

        for(let i = 1; i < 10; i++){
          output.innerText = "FizzNum" + " " + fnum * i;
        }
      });
      }
