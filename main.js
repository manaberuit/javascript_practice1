document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('btn').addEventListener('click',function(){
        const fizzNum = document.getElementById('fizzNum');
        const buzzNum = document.getElementById('buzzNum');

        const output = document.getElementById("output");
        const anchor = document.createElement('p');

        while (output.firstChild){
            output.removeChild(output.firstChild);
        }

        if(!Number(fizzNum.value) || !Number(buzzNum.value)){
            const output = document.getElementById("output");
            const anchor = document.createElement("p");
            let text = document.createTextNode("整数値を入力してください");
            anchor.appendChild(text);
            output.appendChild(anchor);
            return

        }

        for(let i = 1; i < 100; i++){
            const output = document.getElementById('output');
            const anchor = document.createElement('p');
            if ((i % fizzNum.value === 0) && (i % buzzNum.value === 0)){
                let text = document.createTextNode("FizzBuzz"+" "+i);
                anchor.appendChild(text);
                output.appendChild(anchor);
            }else if (i % fizzNum.value === 0){
                let text = document.createTextNode("Fizz"+" "+i);
                anchor.appendChild(text);
                output.appendChild(anchor);
            }else if (i % buzzNum.value === 0){
                let text = document.createTextNode("Buzz"+" "+i);
                anchor.appendChild(text);
                output.appendChild(anchor);
                //output.appendChild(br);
            }

        }

        },false);}
        ,false);
