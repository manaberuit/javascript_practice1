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

      btn.onclick = function(){

        text.innerHTML = ("");

        let X = fizz.value;
        let Y = buzz.value;
        // var sum = fizz.value * buzz.value;
        // text.textContent = sum;



        // return;
        for (let i = 1 ;i < 100; i++){

          if (i % X === 0 && i % Y === 0){
            text.innerHTML += (`FizzBuzz${i}<br>`);

          }else if (i % X === 0) {
            text.innerHTML += (`Fizz ${i}<br>`);
          }else if (i % Y === 0) {
            text.innerHTML += (`Buzz ${i}<br>`);
          }else if (isNaN(X) || isNaN(Y)){
            text.innerHTML = ("整数値を入力してください");
            return;
          }else if (X === "" || Y === ""){
            text.innerHTML = ("整数値を入力してください");
            return;
          }
        }


      }
  }
