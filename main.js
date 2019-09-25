// main.js
// FizzBuzzメイン処理
'use_strict';
    
// ----------
//クリック時動作
document.querySelector('.fizz_button').addEventListener('click' , () => {

  execFizzBuzz();

});

function execFizzBuzz() {
  //テキストBOX内の値を取得
  const fizNum = document.querySelector('#fizz_num');
  const fizValue = fizNum.value;
  const bzNum = document.querySelector('#buzz_num');
  const bzValue = bzNum.value;
  // ---
  const arrayFz = []; //データ格納用の配列
  let stock = '';     //データ表示用の配列
  const arrayBz = [];

  //固定値
  const MAX_DISP_NUM = 100;   //画面表示時のMax値

  //---入力値が数字かチェック
  let pattern = /^[0-9]+$/;
  const checkFz = pattern.test(fizValue);
  const checkBz = pattern.test(bzValue);
  console.log('fz_patt '+ checkFz);
  console.log('bz_patt '+ checkBz);
  //---------------------
  if( !checkFz || !checkBz )
  {
    const outArrayFz = document.querySelector('#log_out');
    outArrayFz.textContent = '整数値を入力してください';
  }
  else
  {//入力値の倍数を配列で確保
    for( let i = 0; i < MAX_DISP_NUM ; i++)
    {
      arrayFz[i] =  fizValue * i;
      arrayBz[i] =  bzValue * i;
      // console.log(arrayFz[i]);
    }

    let indexFz = 0;  //Fizz値用のindex
    let indexBz = 0;  //Buzz値用のindex
    let debugInd = 0; //無限ループ回避で使用
    
    //画面更新用の変数作成
    while((arrayFz[indexFz] < MAX_DISP_NUM) || (arrayBz[indexBz] < MAX_DISP_NUM))
    {
      if( arrayFz[ indexFz ] < arrayBz[ indexBz ] )
      {
        stock += '<li style="list-style:none">' + 'Fizz ' + arrayFz[indexFz] +'</li>';
        indexFz++;
      }
      else if( arrayFz[indexFz] > arrayBz[indexBz] )
      {
        stock += '<li style="list-style:none">' + 'Buzz ' + arrayBz[indexBz] +'</li>';
        indexBz++;
      }
      else if( arrayFz[indexFz] === arrayBz[indexBz] )
      {
        if( indexFz !== 0 ){
          stock += '<li style="list-style:none">' + 'FizzBuzz ' + arrayFz[indexFz]; + '</li>';
        }
        indexFz++;
        indexBz++;  
      }

      // console.log('arrayFz' + indexFz + ':' + arrayF[indexFz]);
      // console.log('arrayBz' + indexBz + ':' + arrayBz[indexBz]);

      //無限ループ回避用
      debugInd++;
      if(debugInd > 1000) //1000に意味はない
      {
        break;
      }//----------------
    }

    //表示内容を更新
    const outArrayFz = document.querySelector('#log_out');
    outArrayFz.innerHTML = stock;

  }
}
