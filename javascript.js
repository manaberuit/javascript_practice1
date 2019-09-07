const fizBuzz = () => {
    let fizzNum = parseInt(document.getElementById("fiz").value);
    let buzzNum = parseInt(document.getElementById("buzz").value);
    const fizNumber = fizzNum;
    let fizBuzzNumbers = [];
    if(Number.isInteger(fizzNum) && Number.isInteger(buzzNum)){
        while(true) {
            if(fizzNum<100){
                fizBuzzNumbers.push(`Fiz ${fizzNum}`);
                fizzNum += fizNumber;
            }else{
                break;
            }
            if(buzzNum<100){
                fizBuzzNumbers.push(`Buzz ${buzzNum}`);
                buzzNum += fizNumber;
            }else {
                break;
            }
        }
        document.getElementById("displayFizBuzz").innerHTML = fizBuzzNumbers.join("<br>");
    }else{
        document.getElementById("displayFizBuzz").innerHTML = "整数値を入力してください";
    }

}