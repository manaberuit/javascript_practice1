'use strict';

{
	const fizzNum = document.getElementById("fizzNum");
	const buzzNum = document.getElementById("buzzNum");
	const execute = document.getElementById("execute");
	const output = document.getElementById("output");

	function ringCreate(e){

		let clickPositionX;
		let clickPositionY;
		let ring;
		let radius=25;	

		clickPositionX = e.clientX;
		clickPositionY = e.clientY;

		ring = document.createElement("div");		

    	ring.style.top = -radius + clickPositionY + "px";
    	ring.style.left = -radius + clickPositionX + "px";

    	ring.className = "ring";
    	
    	document.body.appendChild(ring);

    	ring.addEventListener("animationend", function() {
    		
	        this.parentNode.removeChild(this);

	    });

	}

	fizzNum.addEventListener("click", function(e){		

		ringCreate(e);

	});

	buzzNum.addEventListener("click", function(e){		

		ringCreate(e);

	});

	execute.addEventListener("click", function fizzBuzz(e){

		ringCreate(e);

		if( !Number.isInteger( Number(fizzNum.value) ) || !Number.isInteger( Number(buzzNum.value) ) ){

			output.textContent = "整数値を入力してください。";

			return;

		}

		output.innerHTML ="";
		let result="";

		for(let count=1; count < 100; count++){

			if( Number(fizzNum.value)===0 || Number(buzzNum.value)===0){

				result="0以外の正の整数を入力してください";

				break;

			}

			if( count % Number(fizzNum.value)===0 && count % Number(buzzNum.value)===0 ){

				result = result + "fizzbuzz"+ count + "<br>";				

			} else if( count % Number(fizzNum.value)===0 ){

				result = result + "fizz"+ count + "<br>";

			} else if( count % Number(buzzNum.value)===0 ){
				
				result = result + "buzz"+ count + "<br>";

			}

		}		

		output.innerHTML = result;

	});

}