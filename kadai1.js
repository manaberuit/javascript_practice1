let btn = document.getElementById('btn');

        btn.addEventListener('click', function(){
            const number1 = Number(document.getElementById('fizz').value);
            const number2 = Number(document.getElementById('buzz').value);
            const maxNum = 100;
            let fizz = number1;
            let buzz = number2;
            let result = "";
            
            //出力リセット
            let dom_obj = document.getElementById("fizzbuzz");
            dom_obj.textContent = null;
            
            if(Number.isInteger(number1) && Number.isInteger(number2)){
                //整数の場合
                for(;fizz < maxNum || buzz < maxNum;){
                if(fizz < buzz){
                    result += "Fizz " + fizz + "<br>"
                    fizz += number1;
                }else if(buzz < fizz){
                    result += "Buzz " + buzz + "<br>"
                    buzz += number2;
                }else if(fizz === buzz){
                    result += "FizzBuzz " + fizz +"<br>"
                    fizz += number1;
                    buzz += number2;
                }
            }
            let div_element = document.createElement("div");
            div_element.innerHTML = result;
            let parent_object = document.getElementById("fizzbuzz");
            parent_object.appendChild(div_element);

        }else{
            //どちらか整数ではない場合
            result="整数値を入力してください";
            let div_element = document.createElement("div");
            div_element.innerHTML = result;
            let parent_object = document.getElementById("fizzbuzz");
            parent_object.appendChild(div_element);
                }
            }, false);
       