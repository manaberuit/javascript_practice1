document.getElementById("execution-button").onclick = function() {
  var target = document.getElementById("result-area");
  var valuse = onGetValues()
  if (has_valid(valuse)){
    console.log("成功パターン")
    var fizzs = createNums(valuse[0])
    var buzzs = createNums(valuse[1])

  }else{
    target.innerHTML = '<p>整数値を入力してください</p>';
  }
  
}

function onGetValues() {
  return [ document.getElementById("fizz-area").value, document.getElementById("buzz-area").value ] 
}

function has_valid(nums) {
  // 本当はthisに対して実行したかったけどよくわからんレビューで聞こう！
  return (!! nums[0] && !! nums[1]) ? true : false
}

function createNums(num) {
  var nums = []
  for ( i = 1; num * i < 100;  i++ ) {
    nums.push(num * i);
  }
  return nums
}

function creatFizzBuzzArray(fizzs, buzzs) {
  // それっぽい形にしてfizz 4 buzz 6 fizzbuzz 12の配列にする
  var fizz = "Fizz"
  var buzz = "Buzz"
  var fizzBuzz = "FizzBuzz"
  


}

function displayFizzBuzz(fizzBuzzAry) {
  // もらったfizzbuzzをひたすら描画
}

//　jsにおけるclasとIDの使い分け方を知りたい