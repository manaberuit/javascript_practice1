<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>課題FizzBuzz</title>
</head>
<body>

<form action="kadai6_190509.php" method="post" >
    <p>FizzNum: <input type="text" name="fizz" value="" placeholder="整数値を入力してください"></p>
    <p>BuzzNum: <input type="text" name="buzz" value="" placeholder="整数値を入力してください"></p>
    <input type="submit" name="add" value="実行">
</form>
<p>【出力】</p>

<?php
if(@$_POST['add']) {
    $num1 = $_POST['fizz'];
    $num2 = $_POST['buzz'];

    if($num1 === '' || $num2 === '' || is_numeric($num1) != true || is_numeric($num2) != true) {
        echo "整数値を入力してください<br>";
    }

    for($i = 1; $i<=100; $i++) {
        if( $i % $_POST['fizz'] === 0 && $i % $_POST['buzz'] === 0 ) {
            echo "FizzBuzz " . $i . "<br>";
        }
        elseif( $i % $_POST['fizz'] === 0) {
            echo "Fizz " . $i . "<br>";
        }
        elseif( $i % $_POST['buzz'] === 0) {
            echo "Buzz " . $i . "<br>";
        }
    }
}
?>
</body>
</html>