'use strict';

const sendBtn=document.getElementById('send-btn');

sendBtn.addEventListener('click', function() {
	const fizz = document.getElementById('fizz').value;
	const buzz = document.getElementById('buzz').value;
	const target = document.getElementById('output');
	target.innerHTML = "";

	for(let i = 1; i <= 100; i++){
	  if(i % fizz === 0 && i % buzz === 0){
	    target.insertAdjacentHTML('beforeend',`FizzBuzz ${i}\n`);
	  }else if(i % fizz === 0){
	    target.insertAdjacentHTML('beforeend',`Fizz ${i}\n`);
	  }else if(i % buzz === 0){
	    target.insertAdjacentHTML('beforeend',`Buzz ${i}\n`);
	  }
	}
});
