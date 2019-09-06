window.onload = function() {
const btn = document.getElementById("btn");
btn.addEventListener("click",function(){
const fizz = parseInt(document.getElementById("fizz").value);
const buzz = parseInt(document.getElementById("buzz").value); 
const output = doucument.getElementById("output").innerHTML = "";

  for(let i = 1; i < 100; i++){
      if(i % fizz === 0 && i % buzz === 0){
        output.innerHTML = "`FizzBuzz ${i}`";
      // console.log(`FizzBuzz ${i}`);
    } else if(i % fizz === 0){
      output.innerHTML = "`Fizz ${i}`";
      // console.log(`Fizz ${i}`);
    } else if(i % buzz === 0){
      output.innerHTML = "`Buzz ${i}`";
      // console.log(`Buzz ${i}`);
    } else{
      output.innerHTML = "整数値を入力してください";
      // console.log("整数値を入力してください");
    }
  }
  });
}
