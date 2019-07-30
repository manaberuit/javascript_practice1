document.getElementById("execution-button").onclick = function() {

  const Fizz = document.getElementById("fizz-area").value
  const Buzz = document.getElementById("buzz-area").value
  var target = document.getElementById("result-area");

  if (isValid(Fizz, Buzz)){

    var fizzBuzzArray = creatFizzBuzzArray(Fizz, Buzz)
    var textFizzBuzzArray = createIncludeTextFizzBuzzArray(fizzBuzzArray) 
    displayFizzBuzz(textFizzBuzzArray, target)
    // 全体的にクラスで書きたい
  }else{
    disPlayAlert(target);
  }

}
  
function isValid(fizz, buzz) {
  return ( !! Number(fizz) && !! Number(buzz) ) ? true : false 
}

function creatFizzBuzzArray(fizz, buzz) {
  var standardNum = Math.max(fizz,buzz)
  var nums = []
  for ( i = 1; standardNum * i < 100;  i++ ) {
    nums.push( fizz * i);
    nums.push( buzz * i);
  }
  var fizzBuzzNums = nums.filter(function (x, i, self) {
    return self.indexOf(x) === i;
  });
  return fizzBuzzNums.sort(function (a, b) {
    return a - b;
  });
}

function createIncludeTextFizzBuzzArray(fizzBuzzAry) {
  var htmlAray = []
  fizzBuzzAry.forEach(function(element) {
    if ( isNaNFizzBuzz(element) ) {
      htmlAray.push( ('FizzBuzz' + element))
    } else if (isNaNFizz(element)){
      htmlAray.push( ('Fizz' + element))
    }else if( isNaNBuzz(element) ){
      htmlAray.push( ('Buzz' + element))
    }
  });
  return htmlAray
}

function isNaNFizz(num) {
  var Fizz = document.getElementById("fizz-area").value
  return (num % Fizz == 0) ? true : false
}

function isNaNBuzz(num) {
  var Buzz = document.getElementById("buzz-area").value
  return (num % Buzz == 0) ? true : false
}

function isNaNFizzBuzz(num) {
  return (isNaNFizz(num) && isNaNBuzz(num)) ? true : false
}

function displayFizzBuzz(fizzBuzzAry, target) {
  target.innerHTML = null;
  fizzBuzzAry.forEach(function(element) {
    text = document.createElement('p')
    text.textContent = element
    target.appendChild(text);
  });
}

function disPlayAlert(target) {
  target.innerHTML = '<p>整数値を入力してください</p>';
}



//　jsにおけるhtmlのclasとIDの使い分け方を知りたい