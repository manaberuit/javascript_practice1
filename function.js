document.getElementById("execution-button").onclick = function() {
  var target = document.getElementById("result-area");
  if (has_valid(onGetValues())){
    console.log("成功パターン")
  }else{
    target.innerHTML = '<p>整数値を入力してください</p>';
    console.log("失敗パターン")
  }
  
}

function onGetValues() {
  return [ document.getElementById("fizz-area").value, document.getElementById("buzz-area").value ] 
}

function has_valid(nums) {
  // 本当はthisに対して実行したかったけどよくわからんレビューで聞こう！
  return (!! nums[0] && !! nums[1]) ? true : false
}

//　jsにおけるclasとIDの使い分け方を知りたい