document.getElementById("execution-button").addEventListener('click', execFizzBuzz, false);

function execFizzBuzz () {

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
  if ( isNamFizzBuzz(num, fizz, buzz)  ) {
    return 'FizzBuzz';
  } else if (isNamFizz(num, fizz)){
    return 'Fizz';
  }else if( isNamBuzz(num, buzz )){
    return 'Buzz';
  }
}

function isNamFizz(num) {
  const Fizz = document.getElementById("fizz-area").value
  return (num % Fizz === 0) ? true : false;
}

function isNamBuzz(num) {
  const Buzz = document.getElementById("buzz-area").value
  return (num % Buzz === 0) ? true : false;
}

function isNamFizzBuzz(num) {
  return (isNamFizz(num) && isNamBuzz(num)) ? true : false;
}

function displayFizzBuzz(fizzBuzzAry, target) {
  target.innerHTML = "";
  fizzBuzzAry.forEach(function(element) {
    text = document.createElement('p');
    text.textContent = element;
    target.appendChild(text);
  });
}

function disPlayAlert(target) {
  target.innerHTML = '<p>整数値を入力してください</p>';
}