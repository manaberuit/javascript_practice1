'use strict'
{   
    // 実行ボタンの要素を取得
    const button = document.querySelector("button");
    
    // ☆実行ボタンをクリックした時の処理
    button.addEventListener("click", e  => {
        e.preventDefault();
        
        // 入力フォームの値を取得
        const fiz = document.getElementById("fiz").value;
        console.log(fiz);

        const buzz = document.getElementById("buzz").value;
        console.log(buzz);

        // 入力された値が整数値であるか判定
        let flag = 0;
        
        if(document.form1.number1.value.match(/[^0-9]+/)){
            flag = 1;
        }
        
        else if(document.form1.number2.value.match(/[^0-9]+/)){
            flag = 1;
        }
        
        if(flag){
            
            // 整数以外が入力された場合の処理
            const p1 = document.createElement('p');
            p1.textContent = "整数値を入力して下さい";
            document.body.appendChild(p1);
        }
        
        else{
            
            // 整数が入力された場合の処理
            for (let i = 1; i <= 100; i++)    {
            
                if (i % fiz === 0 && i % buzz === 0) {
                    
                const p2 = document.createElement('p');
                p2.textContent = `FizzBuzz ${i}`;
                document.body.appendChild(p2);
                
                } else if (i % fiz === 0) {
                    
                const p3 = document.createElement('p');
                p3.textContent = `Fizz ${i}`;
                document.body.appendChild(p3);
                                
                } else if (i % buzz === 0) {
                    
                const p4 = document.createElement('p');
                p4.textContent = `Buzz ${i}`;
                document.body.appendChild(p4);
                                
                }
            

            };    
    
        };
        
    });
    
   
   
    
    
    
    
    
    
    
}