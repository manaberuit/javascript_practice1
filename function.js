document.getElementById("execution-button").addEventListener('click', FizzBuzz, false);

function FizzBuzz () {

  const Fizz = document.getElementById("fizz-area").value
  const Buzz = document.getElementById("buzz-area").value
  const target = document.getElementById("result-area");

  if (isValid(Fizz, Buzz)){
    const fizzBuzzArray = creatFizzBuzzArray(Fizz, Buzz);
    const textFizzBuzzArray = createIncludeTextFizzBuzzArray(fizzBuzzArray, Fizz, Buzz); 
    displayFizzBuzz(textFizzBuzzArray, target);
  }else{
    disPlayAlert(target);
  }
}
  
function isValid(fizz, buzz) {
  return ( !! Number(fizz) && !! Number(buzz) ) ? true : false; 
}

function creatFizzBuzzArray(fizz, buzz) {
  const standardNum = Math.max(fizz,buzz)
  const nums = []
  for ( i = 1; standardNum * i < 100;  i++ ) {
    nums.push( fizz * i);
    nums.push( buzz * i);
  }
  const fizzBuzzNums = nums.filter(function (element, index, self) {
    return self.indexOf(element) === index;
  });
  return fizzBuzzNums.sort(function (a, b) {
    return a - b;
  });
}

function createIncludeTextFizzBuzzArray(fizzBuzzAry, fizz, buzz) {
  const htmlAray = []
  fizzBuzzAry.forEach(function(element) {
    switch (whichFizzBuzzType(element, fizz, buzz)) {
      case 'FizzBuzz':
        htmlAray.push( ('FizzBuzz' + element));
        break;
      case 'Fizz':
        htmlAray.push( ('Fizz' + element));
        break;
      case 'Buzz':
        htmlAray.push( ('Buzz' + element));
        break;
    }
  });
  return htmlAray
}

function whichFizzBuzzType(num, fizz, buzz) {
  if ( isNaNFizzBuzz(num, fizz, buzz) ) {
    return 'FizzBuzz';
  } else if (isNaNFizz(num, fizz)){
    return 'Fizz';
  }else if( isNaNBuzz(num, buzz )){
    return 'Buzz';
  }
}

function isNaNFizz(num) {
  const Fizz = document.getElementById("fizz-area").value
  return (num % Fizz == 0) ? true : false;
}

function isNaNBuzz(num) {
  const Buzz = document.getElementById("buzz-area").value
  return (num % Buzz == 0) ? true : false;
}

function isNaNFizzBuzz(num) {
  return (isNaNFizz(num) && isNaNBuzz(num)) ? true : false;
}

function displayFizzBuzz(fizzBuzzAry, target) {
  target.innerHTML = null;
  fizzBuzzAry.forEach(function(element) {
    text = document.createElement('p');
    text.textContent = element;
    target.appendChild(text);
  });
}

function disPlayAlert(target) {
  target.innerHTML = '<p>整数値を入力してください</p>';
}



//　jsにおけるhtmlのclasとIDの使い分け方を知りたい