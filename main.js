"use strict";

function btn_click() {
  document.getElementById("button").addEventListener("click",function(){
    var Fizz = document.getElementById("FIZZ").value;
    var Buzz = document.getElementById("BUZZ").value;
    
   let F = parseInt(Fizz);
   let B = parseInt(Buzz);
    
   for(var n = 1; n<=101; n++){
    if( n % F ===0 && n % B ===0  ) {
     
      document.getElementById("result").textContent += "fizzbuzz";
      
      
    }else if((n % F) ===0) {
       document.getElementById("result").textContent += "fizz" + n % F===0;
       
       
    
      }else if((n % B) ===0) {
      document.getElementById("result").textContent += "buzz" + n%B===0;
      
      
     } else {
      document.getElementById("result").textContent += "\n";
      
      
     };
     };
  });
  };


