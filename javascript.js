document.getElementById("submit").addEventListener("click" ,() => {
    let fizzNum = parseInt(document.getElementById("fiz").value);
    let buzzNum = parseInt(document.getElementById("buzz").value);
    const fizNumber = fizzNum;
    const fizBuzzNumbers = [];
    if(Number.isInteger(fizzNum) && Number.isInteger(buzzNum)){
        //以前はwhileループで意図的にループを回し続けて、中のif文で強制終了するようにしていました。for文に変更しループ内ではBuzの値だけを判断させるように変更しました。
        for( i = fizzNum; i < 100; i += fizNumber) {
            
            fizBuzzNumbers.push(`Fiz ${fizzNum}`);
            fizzNum += fizNumber;
            
            if(buzzNum < 100){
                fizBuzzNumbers.push(`Buzz ${buzzNum}`);
                buzzNum += fizNumber;
            }
        }
        document.getElementById("displayFizBuzz").innerHTML = fizBuzzNumbers.join("<br>");
    }else{
        document.getElementById("displayFizBuzz").innerHTML = "整数値を入力してください";
    }
}, false);
