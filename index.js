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

        if(!fizz.value.match(/[1-9]\d*/) || !buzz.value.match(/[1-9]\d*/)){
            var p = document.createElement('p');
            p.innerText = '整数値を入力してください';
            outputBox.appendChild(p);
        } else {
            var fizzVal = parseInt(fizz.value);
            var buzzVal = parseInt(buzz.value);

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

            resultArr.sort(function(prev,current){
                return prev - current;
            })

            var result = resultArr.filter(function(currentEl, index, self){
                return self.indexOf(currentEl) === index;
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
        }
    });
});