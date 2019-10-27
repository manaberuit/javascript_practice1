'use strict';

{
  const fizz_num = document.getElementById("fizz_num");
  const buzz_num = document.getElementById("buzz_num");
  const btn = document.querySelector("button");
  const result_area = document.getElementById("result_area");

  function FizzBuzz (a, b) {
    if (!(isNaN(a) || isNaN(b))) {
      for (let i = 1; i <= 100; i++) {
        const result = document.createElement('p');
        if (i % a == 0 && i % b == 0) {
          result.textContent = 'FizzBuzz ' + i;
        } else if (i % a == 0) {
          result.textContent = 'Fizz ' + i;
        } else if (i % b == 0) {
          result.textContent = 'Buzz ' + i;
        } else {
          result.textContent = '';
        }
        result_area.appendChild(result);
      }
    } else {
      const error = document.createElement('p');
      error.innerHTML = '整数値を入力してください';
      result_area.appendChild(error);
    }
   }

  btn.addEventListener('click', () => {
    result_area.innerHTML = '【出力】';
    FizzBuzz(Number(fizz_num.value), Number(buzz_num.value));
  });
}