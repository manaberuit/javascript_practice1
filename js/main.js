"use strict";

const fizzBuzzContainer = document.getElementById('fizzBuzzContainer');
const error = document.createElement('p');
// FizzBuzzをする回数
const num = 15;

// 送信ボタンが押された時
function submitClick() {
    //fizzBuzzContainerの子要素を削除
    deleteText();
    // formやinputした値を取得
    const form = document.mainForm;
    let fizz = form.fizz.value;
    let buzz = form.buzz.value;

    // 入力されたものが数値であるかを判定
    if (isNumber(fizz) && isNumber(buzz)) {
        // 文字列から数値へ変換
        fizz = Number(fizz);
        buzz = Number(buzz);
        // FizzBuzzを可算していくための変数
        let fizzNum = fizz;
        let buzzNum = buzz;

        for (let i = 0; i < num; i++) {
            const fizzBuzzText = document.createElement('p');

            if (fizzNum < buzzNum) {
                fizzBuzzText.textContent = 'Fizz\n' + fizzNum;
                fizzNum += fizz;
            } else if (buzzNum < fizzNum) {
                fizzBuzzText.textContent = 'Buzz\n' + buzzNum;
                buzzNum += buzz;
            } else {
                fizzBuzzText.textContent = 'FizzBuzz\n' + fizzNum;
                fizzNum += fizz;
                buzzNum += buzz;
            }
            fizzBuzzContainer.appendChild(fizzBuzzText);
        }
    } else {
        error.textContent = '整数値を入力してください';
        fizzBuzzContainer.appendChild(error);
    }
}

// 子要素を全て削除
function deleteText() {
    while (fizzBuzzContainer.firstChild) {
        fizzBuzzContainer.removeChild(fizzBuzzContainer.firstChild);
    }
}

// 数値であるか(正の数のみ)どうかを判定する関数 
function isNumber(num) {
    const pattern = /^([1-9]\d*|0)(\.\d+)?$/;
    return pattern.test(num);
}