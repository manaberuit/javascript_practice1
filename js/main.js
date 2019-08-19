'use strict';

const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', function() {
	const fizz = parseFloat(document.getElementById('fizz').value);
	const buzz = parseFloat(document.getElementById('buzz').value);
	const target = document.getElementById('output');
	target.innerHTML = "";

	if(isNaN(fizz) || isNaN(buzz)){
		target.insertAdjacentHTML('beforeend',`整数値を入力してください`);
	}else{
		for(let i = 1; i <= 100; i++){
		  if(i % fizz === 0 && i % buzz === 0){
		    target.insertAdjacentHTML('beforeend',`<div>FizzBuzz ${i}</div>`);
		  }else if(i % fizz === 0){
		    target.insertAdjacentHTML('beforeend',`<div>Fizz ${i}</div>`);
		  }else if(i % buzz === 0){
		    target.insertAdjacentHTML('beforeend',`<div>Buzz ${i}</div>`);
		  }
		}
	}
});
