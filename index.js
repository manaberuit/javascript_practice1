document.addEventListener('DOMContentLoaded',function(){

    var button = document.querySelector(('#button'));
    var buzz = document.querySelector('#buzz');
    var fizz = document.querySelector('#fizz');
    var output_box = document.querySelector('.output-box');

    button.addEventListener('click', function(){
        
        while(output_box.firstChild){
            output_box.removeChild(output_box.firstChild);
        }

        var result_arr = []; 

        if(!fizz.value.match(/[0-9]/) || !buzz.value.match(/[0-9]/)){
            var p = document.createElement('p');
            p.innerText = '整数値を入力してください';
            output_box.appendChild(p);
            return;
        }

        var fizz_val = parseInt(fizz.value);
        var buzz_val = parseInt(buzz.value);

        if(fizz_val == 0 || buzz_val == 0){
            var p = document.createElement('p');
            p.innerText = '１以上の整数値を入力してください';
            output_box.appendChild(p);
            return
        }

        var i = 1;
        var j = 1;
        
        while(fizz_val * i < 100){
            result_arr.push(fizz_val * i);
            i++;
        }

        while(buzz_val * j < 100){
            result_arr.push(buzz_val * j);
            j++;
        }

        result_arr.sort(function(a,b){
            return a - b;
        })

        result = result_arr.filter(function(x, i, self){
            return self.indexOf(x) == i;
        })

        console.log(result);

        result.forEach(function(el){
            if( el % fizz_val == 0 && el % buzz_val == 0){
                var p = document.createElement('p');
                p.innerText = `FizzBuzz ${el}`;
                output_box.appendChild(p);   
            } else if ( el % fizz_val == 0){
                var p = document.createElement('p');
                p.innerText = `Fizz ${el}`;
                output_box.appendChild(p); 
            } else if ( el % buzz_val == 0){
                var p = document.createElement('p');
                p.innerText = `Buzz ${el}`;
                output_box.appendChild(p); 
            }
        });
    });
});