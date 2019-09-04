//fizzとbuzzの倍数を１００以下まで表示　
// fizzとbuzzの積の表示
// 数字以外を入れたときにdefault表示
//Parameter driven
function FizzBuzz(value1, value2){
    let returnValue = '';
    if(isNaN(value1) ==false && isNaN(value2) ==false){
        for(i = 1;i <= 100;i++){
            if(i%value1 == 0 && i%value2 == 0){
                returnValue += `FizzBuzz ${i}<br>`;
            } else if(i%value1 ==0){
                returnValue +=`Fizz ${i}<br>`;
            } else if(i%value2 ==0){
                returnValue +=`Buzz ${i}<br>`;
            } 
        }
    } else {
        returnValue += '整数を入力してください';
    }
    return returnValue;
}

function buzzIt(){
    let output = '';
    let val1 = document.getElementById('fizzValue').value;
    let val2 = document.getElementById('buzzValue').value;
    output = FizzBuzz(val1, val2);
    document.getElementById('result').innerHTML = output;
}
