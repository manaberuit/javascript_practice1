//送信が押された時
document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("submit").addEventListener("click", function () {
		let halfNumFlag = 0;
		let fizz = document.getElementById("fizz");
		let buzz = document.getElementById("buzz");
		const fizznum = fizz.value;
		const buzznum = buzz.value;
		console.log(fizznum);
		console.log(buzznum);
		// 設定開始
		if (fizznum.search(/[^0-9]+/) && Number(fizznum) !== 0) {
			halfNumFlag = true;
		} else if (buzznum.search(/[^0-9]+/) && Number(buzznum) !== 0) {
			halfNumFlag = true;
		}
		console.log(halfNumFlag); //プルリクエストの時は本当は消す！
		// 設定終了
		if (!halfNumFlag) { //fizzとbuzzの値が半角数字以外ならば「整数値を入力してください」を出力
			document.getElementById('output').innerHTML = '整数値を入力してください';
			return false; // 送信を中止
		} else { //for文でiをインクリメント
			let fizzbuzz = function (num) {
				if (num % fizznum === 0 && num % buzznum === 0) {
					return 'FizzBuzz ' + num;
				} else if (num % fizznum === 0) {
					return 'Fizz ' + num;
				} else if (num % buzznum === 0) {
					return 'Buzz ' + num;
				}
			}
			for (let i = 1; i < 100; i++) {
				if (i % fizznum !== 0 && i % buzznum !== 0) {
					continue;
				}
				console.log(fizzbuzz(i));
				document.getElementById('output').innerHTML += fizzbuzz(i) + '<br>';
			}
		}
	});
});
