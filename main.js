'use strict'
{   
    // 実行ボタンの要素を取得
    const execbutton = document.querySelector("button");
    
    // ☆実行ボタンをクリックした時の処理
    execbutton.addEventListener("click", e  => {
        e.preventDefault();
        
        // 入力フォームの値を取得
        const fiz = document.getElementById("fiz").value;
        console.log(fiz);

        const buzz = document.getElementById("buzz").value;
        console.log(buzz);

        // 入力された値が整数値であるか判定
        let integerflag = false;
        
        if(document.form.numberfiz.value.match(/[^0-9]+/)){
            integerflag = true;
        }
        
        else if(document.form.numberbuzz.value.match(/[^0-9]+/)){
            integerflag = true;
        }
        
        if(integerflag){
            
            // 整数以外が入力された場合の処理
            const error = document.createElement('p');
            error.textContent = "整数値を入力して下さい";
            document.body.appendChild(error);
            
        }
        
        else{
            
            // 整数が入力された場合の処理
            for (let i = 1; i <= 100; i++)    {
                
                // p要素を作成、表示
                const createp = document.createElement('p');
                
                function output() {
                    document.body.appendChild(createp);
                };
                
                if (i % fiz === 0 && i % buzz === 0) {
                    createp.textContent = `FizzBuzz ${i}`;
                    output();
          
                
                } else if (i % fiz === 0) {
                    createp.textContent = `Fizz ${i}`;
                    output();

                                
                } else if (i % buzz === 0) {
                    createp.textContent = `Buzz ${i}`;
                    output();

                }
            

            };    
    
        };
        
    });
    
   
   
    
    
    
    
    
    
    
}