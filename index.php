<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>kadai</title>
</head>
<body>
    FizzBuzz問題

    <form action="" method="post">
        <p><label for="fizz">FizzNum: </label><input type="text" name="fizz" id="fizz"></p>
        <p><label for="buzz">BizzNum: </label><input type="text" name="buzz" id="buzz"></p>
        <input type="submit" value="実行">
    </form>

    <p>【出力】</p>

    <?php

    if(!isset($_POST['submit'])){
    
        $num1 = $_POST["fizz"];
        $num2 = $_POST["buzz"];

        // 空欄で送信されているかの確認

        if($num1 === '' && $num2 === '' ){
            echo "整数値を入力してください\n";
        }elseif($num1 ===''){
            echo "Fizzを入力してください\n";
        }elseif($num2 ===''){
            echo "Buzzを入力してください\n";
        }

        //数字が入力されているか確認

        if(preg_match("/[^0-9]/", $num1) || preg_match("/[^0-9]/", $num2)){
           echo "数値以外が入力されています。";
        }

        

        //FizzBuzz

        for($i = 1; $i <= 200; $i++){
            
            if($i % $num1 === 0 && $i % $num2 === 0){
                echo "<p>FizzBuzz ". $i . "</p>";
            }elseif($i % $num1 === 0 ){
                echo "<p>Fizz ". $i . "</p>";
            }elseif($i % $num2 === 0 ){
                echo "<p>Buzz ". $i . "</p>";
            }
            // 100以上の値が出力されているかチェック
            if($i >= 100 && ($i % $num1 === 0 || $i % $num2 === 0) ) break;
        }

    }

    ?>
</body>
</html>