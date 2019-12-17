btn.addEventListener('click', alart => {

    const Fizz = document.getElementById('Fizznum').value;
    const Buzz = document.getElementById('Buzznum').value;
    const btn = document.getElementById('btn');

    if (Fizz === "" && Buzz === "") {
        const alart = document.createElement('p');
        alart.textContent = "整数値を入力してください";
        space.appendChild(alart);
        //console.log(alart);
    }else {
        for(var i = 1; i<10; i++){
            const Fizz1 = i*Fizz;
            const Buzz1 = i*Buzz;
            var data = [Fizz1,Buzz1];
            //おそらく出来上がった配列の中身を昇順にしている
            //②なぜこの部分を入れることで全体が昇順になるのか。一つ一つの配列が昇順にsortされるのはわかるがfor文を何巡にもまたいで全体にかかってくるのはなぜか、言い換えればfor文の１順でできた配列をその１順の中で並び替えているだけなのではないか
            data.sort(
                function(a,b){
                  return (a < b ? -1 : 1);
                } )    
                if(Fizz1%Buzz===0 && Buzz1%Buzz===0) {
                //③if(data[0]===data[1])では何故だめなのか、いい条件が思いつかない、そもそも条件分岐はこのポイントでいいのか、for文が１順される毎に条件分岐をしていたら結果がおかしくなってしまう気がする。かなり違和感がある箇所
                    console.log('FizzBuzz'+data[0]);
                }else{
                    console.log('Fizz'+data[0]);
                    console.log('Buzz'+data[1]);
                }
           
            }
    }
})

//疑問
// ①どうやってFizzBuzzが一致した時の処理をするか、if文で最小公約数
//最小公倍数で割れる＝それぞれで割れるは同値か(30&15===0であることと30&3====0&&30%5===0は同値か）
//そもそも最小公倍数の表現方法がわからない(3と６の最小公倍数は6みたいなのが上手く表現できない、6と9の最小公倍数は18など表現できない)
//②部分
//③部分