`use strict`;


//  const btn = document.getElementById(`btn`);
//  const fizz =document.getElementById(`fizz`);
//  const buzz =document.getElementById(`buzz`);

//  const fizzbuzz = document.createElement(`fizzbuzz`);
//    fizzbuzz.classList.add(`fizzbuzz`);


//  btn.addEventListener(`click`,()=>{
//    fizzbuzz.fizzbuzz.textContent = `整数値を入力してください`;

//  })
  // btn.addEventListener(`click`,()=>{
  //   document.text.textContent ='整数値を入力してください';
  // })
  {
    const text = document.getElementById(`text`);
    const btn = document.getElementById(`btn`);
    const fizz = document.getElementById(`fizz`);
    const buzz = document.getElementById(`buzz`);

      // btn.onclick = function(){
        btn.addEventListener(`click`,() =>{



        text.innerHTML = "";

        let fizzNum = fizz.value;
        let buzzNum = buzz.value;
        // var sum = fizz.value * buzz.value;
        // text.textContent = sum;



        // return;
        for (const num = 1 ;num < 100; num++){

          if (!Math.floor(fizzNum) || !Math.floor(buzzNum)){
            // text.innerHTML = ("整数値を入力してください");
            return;
          }

          if (fizzNum === "" || buzzNum === ""){
            // text.innerHTML = ("整数値を入力してください");
            return;
          }

          if (num % fizzNum === 0 && num % buzzNum === 0){
            text.innerHTML += (`FizzBuzz${num}<br>`);
          }else if (num % fizzNum === 0) {
            text.innerHTML += (`Fizz ${num}<br>`);
          }else if (num % buzzNum === 0) {
            text.innerHTML += (`Buzz ${num}<br>`);
          }


          // if (Math.floor(fizzNum) || Math.floor(buzzNum)){
          //   text.innerHTML = ("整数値を入力してください");
          //   return;
          // }else if (fizzNum === "" || buzzNum === ""){
          //   text.innerHTML = ("整数値を入力してください");
          //   return;
          // }
        }
      })


  }
