'use strict';

{
  const fizzNum = document.getElementById("fizz_num");
  const buzzNum = document.getElementById("buzz_num");
  const btn = document.querySelector("button");
  const resultArea = document.getElementById("result_area");

  // 整数値バリデーション
  function intValidate(target) {
    return (!isNaN(Number(target)));
  }

  function fizzBuzz(fizz, buzz) {
    for (let i = 1; i <= 100; i++) {
      const result = document.createElement('p');
      if (i % fizz === 0 && i % buzz === 0) {
        result.textContent = 'FizzBuzz ' + i;
      } else if (i % fizz === 0) {
        result.textContent = 'Fizz ' + i;
      } else if (i % buzz === 0) {
        result.textContent = 'Buzz ' + i;
      } else {
        result.textContent = '';
      }
      resultArea.appendChild(result);
    }
  }

  btn.addEventListener('click', () => {
    resultArea.innerHTML = '【出力】';
    if (intValidate(fizzNum.value) && intValidate(buzzNum.value)) {
      fizzBuzz(Number(fizzNum.value), Number(buzzNum.value));
    } else {
      const error = document.createElement('p');
      error.innerHTML = '整数値を入力してください';
      resultArea.appendChild(error);
    }
  });
}