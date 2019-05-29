document.addEventListener('DOMContentLoaded',function(){

    var button = document.querySelector(('#button'));
    var buzz = document.querySelector('#buzz');
    var fizz = document.querySelector('#fizz');
    var outputBox = document.querySelector('.output-box');

    button.addEventListener('click', function(){
        
        while(outputBox.firstChild){
            outputBox.removeChild(outputBox.firstChild);
        }

        var resultArr = []; 

        if(!fizz.value.match(/[0-9]/) || !buzz.value.match(/[0-9]/)){
            var p = document.createElement('p');
            p.innerText = '整数値を入力してください';
            outputBox.appendChild(p);
            return;
        }

        var fizzVal = parseInt(fizz.value);
        var buzzVal = parseInt(buzz.value);

        if(fizzVal === 0 || buzzVal === 0){
            var p = document.createElement('p');
            p.innerText = '１以上の整数値を入力してください';
            outputBox.appendChild(p);
            return;
        }

        var multipiedByFizz = 1;
        var multipiedByBuzz = 1;
        
        while(fizzVal * multipiedByFizz < 100){
            resultArr.push(fizzVal * multipiedByFizz);
            multipiedByFizz++;
        }

        while(buzzVal * multipiedByBuzz < 100){
            resultArr.push(buzzVal * multipiedByBuzz);
            multipiedByBuzz++;
        }

        resultArr.sort(function(a,b){
            return a - b;
        })

        var result = resultArr.filter(function(x, i, self){
            return self.indexOf(x) == i;
        })

        result.forEach(function(el){
            if( el % fizzVal === 0 && el % buzzVal === 0){
                var p = document.createElement('p');
                p.innerText = `FizzBuzz ${el}`;
                outputBox.appendChild(p);   
            } else if ( el % fizzVal === 0){
                var p = document.createElement('p');
                p.innerText = `Fizz ${el}`;
                outputBox.appendChild(p); 
            } else if ( el % buzzVal === 0){
                var p = document.createElement('p');
                p.innerText = `Buzz ${el}`;
                outputBox.appendChild(p); 
            }
        });
    });
});