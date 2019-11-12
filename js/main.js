'usre strict'

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const ACTION = document.getElementById('action');
const DIV = document.getElementById('result');

const MAX_NUM = 100;

ACTION.addEventListener('click',() => {
  let valuneText1 = parseFloat(num1.value)  
  let valuneText2 = parseFloat(num2.value)      


  if(Number.isInteger(valuneText1) === true && Number.isInteger(valuneText2) === true){
    for (let i = 1; i < MAX_NUM; i++){
      if(i % num1.value === 0 && i % num2.value === 0){
        const div = document.createElement('div');
        result.appendChild(div);
        div.textContent = 'FizzBuzz' + i;

      }else if(i % num1.value === 0 ){
        const div = document.createElement('div');
        result.appendChild(div);
        div.textContent = 'Fizz' + i;

      }else if(i % num2.value === 0 ){
        const div = document.createElement('div');
        result.appendChild(div);
        div.textContent = 'Buzz' + i;
      }
    }

  }else{
    const div = document.createElement('div');
    result.appendChild(div);
    div.textContent = '整数値を入力してください';
  }
})