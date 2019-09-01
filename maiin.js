`use strict`;



  {
    const text = document.getElementById(`text`);
    const btn = document.getElementById(`btn`);
    const fizz = document.getElementById(`fizz`);
    const buzz = document.getElementById(`buzz`);


        btn.addEventListener(`click`,() =>{



        text.innerHTML = "";

          //parseFloatを入れることで、取得と検証をする。
        const fizzNum = parseFloat(fizz.value);
        const buzzNum = parseFloat(buzz.value);


        for (let num = 1 ;num < 100; num++) {

          if (!Math.floor(fizzNum) || !Math.floor(buzzNum)){
            text.innerHTML = ("整数値を入力してください");
            return;
          }



          if (num % fizzNum === 0 && num % buzzNum === 0){
            text.innerHTML += (`FizzBuzz${num}<br>`);
          }else if (num % fizzNum === 0) {
            text.innerHTML += (`Fizz ${num}<br>`);
          }else if (num % buzzNum === 0) {
            text.innerHTML += (`Buzz ${num}<br>`);
          }


        }
      })
  }
