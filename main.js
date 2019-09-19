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
  let arrayBz = [];

  //固定値
  const MAX_DISP_NUM = 100;   //画面表示時のMax値

  //---入力値が数字かチェック
  let pattern = /^[0-9]+$/;
  const check_fz = pattern.test(fizValue);
  const check_bz = pattern.test(bzValue);
  console.log('fz_patt '+check_fz);
  console.log('bz_patt '+check_bz);
  //---------------------
  if( !check_fz || !check_bz )
  {
    const out_array_fz = document.querySelector('#log_out');
    out_array_fz.textContent = '整数値を入力してください';
  }
  else
  {//入力値の倍数を配列で確保
    for( let i = 0; i < MAX_DISP_NUM ; i++)
    {
      arrayFz[i] =  fizValue * i;
      arrayBz[i] =  bzValue * i;
      // console.log(arrayFz[i]);
    }

    let index_fz = 0;  //Fizz値用のindex
    let index_bz = 0;  //Buzz値用のindex
    let debug_ind = 0; //無限ループ回避で使用
    
    //画面更新用の変数作成
    while((arrayFz[index_fz] < MAX_DISP_NUM) || (arrayBz[index_bz] < MAX_DISP_NUM))
    {
      if( arrayFz[ index_fz ] < arrayBz[ index_bz ] )
      {
        stock += '<li style="list-style:none">' + 'Fizz ' + arrayFz[index_fz] +'</li>';
        index_fz++;
      }
      else if( arrayFz[index_fz] > arrayBz[index_bz] )
      {
        stock += '<li style="list-style:none">' + 'Buzz ' + arrayBz[index_bz] +'</li>';
        index_bz++;
      }
      else if( arrayFz[index_fz] === arrayBz[index_bz] )
      {
        if( index_fz !== 0 ){
          stock += '<li style="list-style:none">' + 'FizzBuzz ' + arrayFz[index_fz]; + '</li>';
        }
        index_fz++;
        index_bz++;  
      }

      // console.log('arrayFz' + index_fz + ':' + arrayF[index_fz]);
      // console.log('arrayBz' + index_bz + ':' + arrayBz[index_bz]);

      //無限ループ回避用
      debug_ind++;
      if(debug_ind > 1000) //1000に意味はない
      {
        break;
      }//----------------
    }

    //表示内容を更新
    const out_array_fz = document.querySelector('#log_out');
    out_array_fz.innerHTML = stock;

  }
}
