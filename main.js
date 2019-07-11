"use strict";

const calcBtnDom = document.getElementById('calc-btn');

// 「実行」ボタンを押す 
calcBtnDom.addEventListener('click', calcFizzBuzz);

function calcFizzBuzz() {
    const inputFizzValue = document.getElementById('fizz-input').value;
    const inputBuzzValue = document.getElementById('buzz-input').value;

    // 整数値の判定
    if (Math.sign(inputFizzValue) && Math.sign(inputBuzzValue) && (inputFizzValue > 0) && (inputBuzzValue > 0)) {
        const outputSectionDom = document.getElementById('output-section');

        // 計算結果の出力html
        let outputSectionHtml = '';

        const outputDomPerth = document.createDocumentFragment();

        // FizzBuzzの表示部分のモジュール
        for (let num = 1; num < 100; num++) {
            let loopSaveHtml = '';
            let loopSaveName = '';
            let loopSaveNum = '';

            // Fizzの倍数なら出力
            if ((num % inputFizzValue) === 0) {
                loopSaveName += 'Fizz';
                loopSaveNum = num;
            }
            if ((num % inputBuzzValue) === 0) {
                loopSaveName += 'Buzz';
                loopSaveNum = num;
            }
            loopSaveHtml = loopSaveName + ' ' + loopSaveNum;

            if (loopSaveHtml) {
                // outputSectionHtml += loopSaveHtml + "\n";
                const createLowDom = document.createElement('div');
                const createLowDomText = document.createTextNode(loopSaveHtml);
                createLowDom.appendChild(createLowDomText);
                outputDomPerth.appendChild(createLowDom);
            }
        }

        // #output-sectionの元のテキストを削除
        outputSectionDom.innerHTML = '';

        // FizzBuzzで作ったDomをまとめてパース
        outputSectionDom.appendChild(outputDomPerth);




    }

}