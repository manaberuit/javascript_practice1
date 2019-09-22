'use strict';


{

	const fizzNum = document.getElementById("fizzNum");
	const buzzNum = document.getElementById("buzzNum");

	const execute = document.getElementById("execute");
	const output = document.getElementById("output");
	const fizzFrame = document.getElementById("fizzFrame");
	

	let fizzMultiple;
	let buzzMultiple;

	


	function ringCreate(e){

		
		let x;
		let y;
		let ring;
		let radius=25;

		
		x = e.clientX;
		y = e.clientY;

		

		ring = document.createElement("div");

		
    	ring.style.top = -radius + y + "px";
    	ring.style.left = -radius + x + "px";


    	
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

		if( Number.isInteger( Number(fizzNum.value) ) === false || Number.isInteger( Number(buzzNum.value) ) === false ){

			output.textContent = "整数値を入力してください。";

			return;
		}

		output.innerHTML ="";
		

		fizzMultiple = Number(fizzNum.value);
		buzzMultiple = Number(buzzNum.value);

		

		
		let result="";
		let count=30;



		for(let i=1; i<count; i++){

			fizzMultiple = Number(fizzNum.value) * i;
			buzzMultiple = Number(buzzNum.value) * i;

			//console.log("fizzMultiple:" + fizzMultiple);

			if( (fizzMultiple % Number(fizzNum.value) === 0) && (fizzMultiple % Number(buzzNum.value) === 0) ){

				result = result + "FizzBuzz"+ fizzMultiple + "<br>";

			} else {

				result = result + "Fizz"+ fizzMultiple + "<br>";


			}


			if( (buzzMultiple % Number(fizzNum.value) === 0) && (buzzMultiple % Number(buzzNum.value) === 0) ){

				result = result + "FizzBuzz"+ buzzMultiple + "<br>";

			} else {

				result = result + "Buzz"+ buzzMultiple + "<br>";


			}



		}
		

		output.innerHTML = result;


		


	});








}