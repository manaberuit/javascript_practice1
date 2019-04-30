const Fizz = document.getElementById('Fizznum').value;
const Buzz = document.getElementById('Buzznum').value;
const btn = document.getElementById('btn');

console.log(Fizz);
console.log(Buzz);

btn.addEventListener('click', alart => {
    if (Fizz === "" && Buzz === "") {
        const alart = document.createElement('p');
        alart.textContent = "整数値を入力してください";
        space.appendChild(alart);
        console.log(alart);
    }else {
        for(var i =1; i<10; i++){
            
        }
    }
})