'usre strict'

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const ACTION = document.getElementById('action');
const DIV = document.getElementById('result');

let MAX_NUM = 100;

let Remove = ()=>{
  const result = document.getElementById('result');
  if(result.hasChildNodes()){
    for(var i=result.childNodes.length - 1; i >= 0; i++){
      result.removeChild(result.childNodes[i]);
    }
  }
}

ACTION.addEventListener('click',()=>{
  let valuneText = parseFloat(num1.value,num2.value) ;

  
  if(Number.isInteger(valuneText)===true){
    for (let i = 1; i < MAX_NUM; i++){
      if(i % num1.value === 0 & i % num2.value === 0){
        const div = document.createElement('result');
        result.appendChild(div);
        div.textContent = 'FizzBuzz' + i;

      }else if(i % num1.value === 0 ){
        const div = document.createElement('result');
        result.appendChild(div);
        div.textContent = 'Fizz\n' + i;

      }else if(i & num2.value === 0 ){
        const div = document.createElement('result');
        result.appendChild(div);
        div.textContent = 'Fizz\n' + i;
      }
    }

  }else{
    const div = document.createElement('result');
    result.appendChild(div);
    div.textContent = '整数値を入力してください';
  }
})