window.onload = function() {
const btn = document.getElementById("btn"); 

btn.addEventListener("click",function(){
const fizz = parseInt(document.getElementById("fizz").value);
const buzz = parseInt(document.getElementById("buzz").value);
const output = document.getElementById("output");
output.innerHTML = "";

  if(isNaN(fizz) || isNaN(buzz)){
  output.innerHTML = "整数値を入力してください";
  } else {
    for(let i = 1; i < 100; i++){
      if(i % fizz === 0 && i % buzz === 0){
        output.innerHTML += `FizzBuzz ${i}` + "<br>";
    } else if(i % fizz === 0){
      output.innerHTML += `Fizz ${i}` + "<br>";
    } else if(i % buzz === 0){
      output.innerHTML += `Buzz ${i}` + "<br>";
    }
    }
  }
});
}

