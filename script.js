'use script';

document.getElementById("exec-btn").addEventListener('click', () => {
    // ES6ではletかconstを使う
    // 変数名は具体的に
    const fizzNum = document.forms.input.num1.value;
    const buzzNum = document.forms.input.num2.value;
    const sum = fizzNum + buzzNum;

    //　二回目以降の場合、出力結果を消去する
    if ( document.getElementById("output") !== null ) {
        document.getElementById("output").remove();
    };

    // 出力結果用のdivを用意
    const outputArea = document.createElement("div");
    outputArea.setAttribute("id", "output");
    document.body.appendChild(outputArea);

    // 整数の場合
    if (sum.search(/^[-]?[0-9]+$/) === 0) {
        for (let i = 0; i < 100; i++) {
            const result = document.createElement("p");
            result.setAttribute("class", "result");

            if ((i + 1) % fizzNum === 0 && (i + 1) % buzzNum !== 0) {
                result.innerHTML = `Fizz ${i + 1}`;
                outputArea.appendChild(result);
            } else if ((i + 1) % fizzNum !== 0 && (i + 1) % buzzNum === 0) {
                result.innerHTML = `Buzz ${i + 1}`;
                outputArea.appendChild(result);
            } else if ((i + 1) % fizzNum === 0 && (i + 1) % buzzNum === 0) {
                result.innerHTML = `FizzBuzz ${i + 1}`;
                outputArea.appendChild(result);
            };
        };
    // 整数でない場合
    } else {
        outputArea.innerHTML = "整数値を入力してください";
    };
});    