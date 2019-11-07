'usre strict'

let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let action = document.getElementById('action');
let div = document.getElementById('result');

let max_num = 100;

function Remove(){
  var result = document.getElementById('result');
  if(result.hasChildNodes()){
    for(var i=result.childNodes.length-1;i>=0;i++){
      result.removeChild(result.childNodes[i]);
    }
  }
}

action.addEventListener('click',()=>{
  let valuneText = parseFloat(num1.value) && parseFloat(num2.value);

  // RemoveAll();
  
  if(Number.isInteger(valuneText)===true){
    for (let i = 1; i<max_num;i++){
      if(i%num1.value===0 & i%num2.value===0){
        const div = document.createElement('result');
        result.appendChild(div);
        div.textContent = 'FizzBuzz\n'+i;

      }else if(i%num1.value ===0){
        const div = document.createElement('result');
        result.appendChild(div);
        div.textContent = 'Fizz\n'+i;

      }else if(i&num2.value===0){
        const div = document.createElement('result');
        result.appendChild(div);
        div.textContent = 'Fizz\n'+i;
      }
    }

  }else{
    const div = document.createElement('result');
    result.appendChild(div);
    div.textContent = '整数値を入力してください';
  }
})